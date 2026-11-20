import fs from 'node:fs';
import path from 'node:path';
import Module, { createRequire } from 'node:module';
import ts from 'typescript';

const require = createRequire(import.meta.url);
const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, 'public');

// Load .ts files on the fly with @/ alias resolution
const originalResolveFilename = Module._resolveFilename;
Module._resolveFilename = function (request, parent, isMain, options) {
  let mapped = request;
  if (mapped.startsWith('@/')) {
    mapped = path.join(ROOT, mapped.slice(2));
  }
  try {
    return originalResolveFilename.call(this, mapped, parent, isMain, options);
  } catch {
    if (!mapped.endsWith('.ts') && !mapped.endsWith('.tsx')) {
      for (const ext of ['.ts', '.tsx', '/index.ts', '/index.tsx']) {
        if (fs.existsSync(mapped + ext)) {
          return mapped + ext;
        }
      }
    }
    throw new Error(`Cannot resolve module: ${request}`);
  }
};

require.extensions['.ts'] = function (mod, filename) {
  const source = fs.readFileSync(filename, 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
    fileName: filename,
  });
  return mod._compile(outputText, filename);
};

const {
  sectorsList,
  banksList,
  insuranceList,
  proceduresList,
  toolsList,
  videosList,
  noticesList,
  blogArticles,
} = require(path.join(ROOT, 'lib/sectors-data.ts'));

const rawEnvUrl = process.env.SITEMAP_BASE_URL || process.env.APP_URL || '';
const SITE_URL = (
  rawEnvUrl.startsWith('http') && !rawEnvUrl.includes('ais-dev-')
    ? rawEnvUrl
    : 'https://pipoudz.github.io'
).replace(/\/$/, '');

const TODAY = new Date().toISOString().slice(0, 10);

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildUrl(relPath, lang) {
  const clean = relPath.replace(/^\/+|\/+$/g, '');
  return clean ? `${SITE_URL}/${lang}/${clean}/` : `${SITE_URL}/${lang}/`;
}

function makeBilingualEntry(relPath, priority, changefreq, lastmod = TODAY) {
  const arUrl = buildUrl(relPath, 'ar');
  const frUrl = buildUrl(relPath, 'fr');
  return ['ar', 'fr'].map((lang) => ({
    loc: lang === 'ar' ? arUrl : frUrl,
    arUrl,
    frUrl,
    lastmod,
    changefreq,
    priority: priority.toFixed(2),
  }));
}

function renderUrlset(entries) {
  const urls = entries
    .map(
      (e) => `  <url>
    <loc>${escapeXml(e.loc)}</loc>
    <lastmod>${escapeXml(e.lastmod)}</lastmod>
    <changefreq>${escapeXml(e.changefreq)}</changefreq>
    <priority>${escapeXml(e.priority)}</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${escapeXml(e.arUrl)}" />
    <xhtml:link rel="alternate" hreflang="fr" href="${escapeXml(e.frUrl)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(e.arUrl)}" />
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}

function renderSitemapIndex(files) {
  const items = files
    .map(
      (f) => `  <sitemap>
    <loc>${escapeXml(`${SITE_URL}/${f}`)}</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</sitemapindex>
`;
}

// 1. sitemap-main.xml (Home, Hubs, Blog, Notices, Videos, E-E-A-T Legal & Info)
const mainEntries = [
  ...makeBilingualEntry('', 1.0, 'daily'),
  ...[
    'sectors',
    'sectors/bank',
    'sectors/assurance',
    'sectors/sntf-schedule',
    'process',
    'pages/tools',
    'blog',
    'pages/video',
    'pages/education-notices',
  ].flatMap((hub) => makeBilingualEntry(hub, 0.9, 'weekly')),
  ...[
    { path: 'pages/guide', priority: 0.8 },
    { path: 'pages/statistics', priority: 0.75 },
    { path: 'pages/about', priority: 0.7 },
    { path: 'pages/contact', priority: 0.7 },
    { path: 'pages/privacy', priority: 0.5 },
    { path: 'pages/terms', priority: 0.5 },
    { path: 'pages/disclaimer', priority: 0.5 },
    { path: 'pages/favorites', priority: 0.4 },
  ].flatMap((p) => makeBilingualEntry(p.path, p.priority, 'monthly')),
  ...blogArticles.flatMap((a) =>
    makeBilingualEntry(`blog/${a.slug}`, 0.9, 'weekly', a.updatedAt || TODAY)
  ),
  ...noticesList.flatMap((n) =>
    makeBilingualEntry(`pages/education-notices/${n.slug}`, 0.75, 'weekly', n.date || TODAY)
  ),
  ...videosList.flatMap((v) => makeBilingualEntry(`pages/video/${v.slug}`, 0.7, 'monthly')),
];

// 2. sitemap-sectors.xml (All Public Sectors & Institutions)
const sectorEntries = sectorsList.flatMap((s) =>
  makeBilingualEntry(`sectors/${s.slug}`, s.isPopular ? 0.9 : 0.8, 'weekly')
);

// 3. sitemap-finance.xml (Banks & Insurance Companies)
const financeEntries = [
  ...banksList.flatMap((b) => makeBilingualEntry(`sectors/bank/${b.slug}`, 0.85, 'monthly')),
  ...insuranceList.flatMap((i) =>
    makeBilingualEntry(`sectors/assurance/${i.slug}`, 0.85, 'monthly')
  ),
];

// 4. sitemap-procedures.xml (Administrative Procedures)
const procedureEntries = proceduresList.flatMap((p) =>
  makeBilingualEntry(`process/${p.slug}`, 0.85, 'monthly')
);

// 5. sitemap-tools.xml (Interactive Client-Side Tools)
const toolEntries = toolsList.flatMap((t) =>
  makeBilingualEntry(
    `pages/tools/${t.category}/${t.slug}`,
    t.isPopular ? 0.85 : 0.75,
    'monthly'
  )
);

const outputs = {
  'sitemap-main.xml': renderUrlset(mainEntries),
  'sitemap-sectors.xml': renderUrlset(sectorEntries),
  'sitemap-finance.xml': renderUrlset(financeEntries),
  'sitemap-procedures.xml': renderUrlset(procedureEntries),
  'sitemap-tools.xml': renderUrlset(toolEntries),
};

const childFiles = Object.keys(outputs);
outputs['sitemap.xml'] = renderSitemapIndex(childFiles);

fs.mkdirSync(PUBLIC_DIR, { recursive: true });
for (const [filename, xml] of Object.entries(outputs)) {
  fs.writeFileSync(path.join(PUBLIC_DIR, filename), xml, 'utf8');
}

const totalUrls =
  mainEntries.length +
  sectorEntries.length +
  financeEntries.length +
  procedureEntries.length +
  toolEntries.length;

console.log(
  `Generated modular sitemaps for ${SITE_URL}: ${totalUrls} bilingual URLs across ${childFiles.length} sub-sitemaps + sitemap.xml index.`
);
