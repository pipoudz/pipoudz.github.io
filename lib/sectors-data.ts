import { SectorItem, BankItem, InsuranceItem, ProcedureItem, VideoItem, ToolItem } from './types';
import { sectorsPart1 } from './data/sectors-part1';
import { sectorsPart2 } from './data/sectors-part2';
import {
  banksList as baseBanksList,
  insuranceList as baseInsuranceList,
} from './data/banks-insurance';
import {
  proceduresList as baseProceduresList,
  videosList as baseVideosList,
} from './data/procedures-videos-notices';
import { toolsList as baseToolsList } from './data/tools-catalog';
import { batch1Sectors } from './data/batches/batch-1';
import { batch2Sectors } from './data/batches/batch-2';
import { batch3Sectors } from './data/batches/batch-3';
import { batch4Sectors } from './data/batches/batch-4';
import { batch5Sectors } from './data/batches/batch-5';
import { batch6Sectors } from './data/batches/batch-6';
import { batch7Sectors } from './data/batches/batch-7';
import { batch8Sectors } from './data/batches/batch-8';
import { batch9Sectors } from './data/batches/batch-9';
import { batch1Banks } from './data/batches/banks-batch-1';
import { batch2Banks } from './data/batches/banks-batch-2';
import { batch3Banks } from './data/batches/banks-batch-3';
import { batch1Insurances } from './data/batches/insurance-batch-1';
import { batch2Insurances } from './data/batches/insurance-batch-2';
import { batch1Procedures } from './data/batches/procedures-batch-1';
import { batch2Procedures } from './data/batches/procedures-batch-2';
import { batch1Videos } from './data/batches/videos-batch-1';
import { batch2Videos } from './data/batches/videos-batch-2';
import { batch1Tools } from './data/batches/tools-batch-1';
import { batch2Tools } from './data/batches/tools-batch-2';
import { batch3Tools } from './data/batches/tools-batch-3';
import { batch4Tools } from './data/batches/tools-batch-4';
import { batch5Tools } from './data/batches/tools-batch-5';
import { batch6Tools } from './data/batches/tools-batch-6';
import { batch7Tools } from './data/batches/tools-batch-7';
import { batch8Tools } from './data/batches/tools-batch-8';

export {
  homeExternalServices,
  contactPortalLinks,
  noticesList,
} from './data/procedures-videos-notices';
export { SNTF_CORRIDORS, SNTF_STATIONS, trainTripsList } from './data/sntf-rail';
export { blogArticles } from './data/blog-articles';

function mergeSectorBatches(
  base: SectorItem[],
  ...batches: SectorItem[][]
): SectorItem[] {
  const bySlug = new Map<string, SectorItem>();
  base.forEach((item) => bySlug.set(item.slug, item));
  batches.forEach((batch) => {
    batch.forEach((item) => {
      bySlug.set(item.slug, item);
    });
  });
  return Array.from(bySlug.values());
}

function mergeBankBatches(
  base: BankItem[],
  ...batches: BankItem[][]
): BankItem[] {
  const bySlug = new Map<string, BankItem>();
  base.forEach((item) => bySlug.set(item.slug, item));
  batches.forEach((batch) => {
    batch.forEach((item) => {
      bySlug.set(item.slug, item);
    });
  });
  return Array.from(bySlug.values());
}

function mergeInsuranceBatches(
  base: InsuranceItem[],
  ...batches: InsuranceItem[][]
): InsuranceItem[] {
  const bySlug = new Map<string, InsuranceItem>();
  base.forEach((item) => bySlug.set(item.slug, item));
  batches.forEach((batch) => {
    batch.forEach((item) => {
      bySlug.set(item.slug, item);
    });
  });
  return Array.from(bySlug.values());
}

function mergeProcedureBatches(
  base: ProcedureItem[],
  ...batches: ProcedureItem[][]
): ProcedureItem[] {
  const bySlug = new Map<string, ProcedureItem>();
  base.forEach((item) => bySlug.set(item.slug, item));
  batches.forEach((batch) => {
    batch.forEach((item) => {
      bySlug.set(item.slug, item);
    });
  });
  return Array.from(bySlug.values());
}

function mergeVideoBatches(
  base: VideoItem[],
  ...batches: VideoItem[][]
): VideoItem[] {
  const bySlug = new Map<string, VideoItem>();
  base.forEach((item) => bySlug.set(item.slug, item));
  batches.forEach((batch) => {
    batch.forEach((item) => {
      bySlug.set(item.slug, item);
    });
  });
  return Array.from(bySlug.values());
}

function mergeToolBatches(
  base: ToolItem[],
  ...batches: ToolItem[][]
): ToolItem[] {
  const bySlug = new Map<string, ToolItem>();
  base.forEach((item) => bySlug.set(item.slug, item));
  batches.forEach((batch) => {
    batch.forEach((item) => {
      bySlug.set(item.slug, item);
    });
  });
  return Array.from(bySlug.values());
}

export const toolsList: ToolItem[] = mergeToolBatches(
  baseToolsList,
  batch1Tools,
  batch2Tools,
  batch3Tools,
  batch4Tools,
  batch5Tools,
  batch6Tools,
  batch7Tools,
  batch8Tools
);

export const proceduresList: ProcedureItem[] = mergeProcedureBatches(
  baseProceduresList,
  batch1Procedures,
  batch2Procedures
);

export const videosList: VideoItem[] = mergeVideoBatches(
  baseVideosList,
  batch1Videos,
  batch2Videos
);

export const insuranceList: InsuranceItem[] = mergeInsuranceBatches(
  baseInsuranceList,
  batch1Insurances,
  batch2Insurances
);

export const banksList: BankItem[] = mergeBankBatches(
  baseBanksList,
  batch1Banks,
  batch2Banks,
  batch3Banks
);

export const sectorsList: SectorItem[] = mergeSectorBatches(
  [...sectorsPart1, ...sectorsPart2],
  batch1Sectors,
  batch2Sectors,
  batch3Sectors,
  batch4Sectors,
  batch5Sectors,
  batch6Sectors,
  batch7Sectors,
  batch8Sectors,
  batch9Sectors
);
