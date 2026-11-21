import RootLandingClient from '@/components/RootLandingClient';
import { generateWebsiteSchema, generateOrganizationSchema } from '@/lib/seo';

export default function RootLandingPage() {
  const websiteSchema = generateWebsiteSchema('ar');
  const organizationSchema = generateOrganizationSchema('ar');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <RootLandingClient />
    </>
  );
}
