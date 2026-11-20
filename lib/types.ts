export type Language = 'ar' | 'fr';

export type SectorCategory =
  | 'housing'
  | 'telecom'
  | 'energy_water'
  | 'social_labor'
  | 'justice_interior'
  | 'transport'
  | 'finance_economy'
  | 'education_higher'
  | 'health_civil'
  | 'ministries';

export interface BilingualText {
  ar: string;
  fr: string;
}

export interface SectorServiceItem {
  id: string;
  title: BilingualText;
  description: BilingualText;
  url?: string;
  isOnline: boolean;
}

export interface SectorItem {
  id: string;
  slug: string;
  category: SectorCategory;
  name: BilingualText;
  acronym?: string;
  ministry?: BilingualText;
  description: BilingualText;
  officialUrl: string;
  portalUrl?: string;
  iconName: string;
  isPopular?: boolean;
  services: SectorServiceItem[];
  quickSummary: {
    targetAudience: BilingualText;
    processingTime: BilingualText;
    fees: BilingualText;
    channel: BilingualText;
    keyRequirement: BilingualText;
  };
  requirements: {
    label: BilingualText;
    value: BilingualText;
  }[];
  faqs: {
    question: BilingualText;
    answer: BilingualText;
  }[];
}

export interface BankServiceItem {
  ar: string;
  fr: string;
  url?: string;
  summary?: BilingualText;
}

export interface BankItem {
  id: string;
  slug: string;
  name: BilingualText;
  acronym: string;
  type: 'public' | 'private' | 'islamic' | 'central';
  description: BilingualText;
  website: string;
  eBankingUrl?: string;
  swiftCode?: string;
  headquarters: BilingualText;
  services: BankServiceItem[];
  contactPhone?: string;
  quickSummary: {
    accountTypes: BilingualText;
    digitalBanking: BilingualText;
    islamicWindow: BilingualText;
  };
  requirements?: {
    label: BilingualText;
    value: BilingualText;
  }[];
  faqs: {
    question: BilingualText;
    answer: BilingualText;
  }[];
}

export interface InsuranceProductItem {
  ar: string;
  fr: string;
  url?: string;
  summary?: BilingualText;
}

export interface InsuranceItem {
  id: string;
  slug: string;
  name: BilingualText;
  acronym: string;
  type: 'public' | 'private' | 'takaful';
  description: BilingualText;
  website: string;
  portalUrl?: string;
  headquarters: BilingualText;
  products: InsuranceProductItem[];
  emergencyNumber?: string;
  quickSummary: {
    autoInsurance: BilingualText;
    eDeclaration: BilingualText;
    takafulOptions: BilingualText;
  };
  requirements?: {
    label: BilingualText;
    value: BilingualText;
  }[];
  faqs: {
    question: BilingualText;
    answer: BilingualText;
  }[];
}

export interface ProcedureItem {
  id: string;
  slug: string;
  title: BilingualText;
  sectorId: string;
  responsibleEntity: BilingualText;
  description: BilingualText;
  officialLink: string;
  videoEmbedUrl?: string;
  videoWatchUrl?: string;
  targetAudience?: BilingualText;
  channel?: BilingualText;
  keyRequirement?: BilingualText;
  estimatedDuration: BilingualText;
  cost: BilingualText;
  steps: {
    stepNumber: number;
    title: BilingualText;
    detail: BilingualText;
  }[];
  documentsRequired: {
    name: BilingualText;
    isMandatory: boolean;
    note?: BilingualText;
  }[];
  faqs: {
    question: BilingualText;
    answer: BilingualText;
  }[];
}

export interface VideoItem {
  id: string;
  slug: string;
  title: BilingualText;
  description: BilingualText;
  videoUrl: string;
  watchUrl?: string;
  thumbnailUrl: string;
  platform: 'youtube' | 'facebook' | 'mp4';
  duration?: string;
  category: BilingualText;
  officialUrl?: string;
  relatedGuidePath?: string;
  relatedGuideLabel?: BilingualText;
  guideParagraphs?: { ar: string[]; fr: string[] };
  stepsHighlight: BilingualText[];
  faqs?: {
    question: BilingualText;
    answer: BilingualText;
  }[];
}

export interface NoticeItem {
  id: string;
  slug: string;
  title: BilingualText;
  category: BilingualText;
  date: string;
  summary: BilingualText;
  content: BilingualText;
  officialUrl?: string;
  importantDates?: { label: BilingualText; date: string }[];
  downloadableDoc?: string;
  faqs?: {
    question: BilingualText;
    answer: BilingualText;
  }[];
}

export interface ToolReference {
  label: BilingualText;
  url: string;
}

export interface ToolItem {
  id: string;
  slug: string;
  category: 'calculators' | 'daily-life' | 'health' | 'islamic' | 'productivity' | 'study';
  name: BilingualText;
  description: BilingualText;
  iconName: string;
  isPopular?: boolean;
  references?: ToolReference[];
  faqs?: {
    question: BilingualText;
    answer: BilingualText;
  }[];
}

export interface TrainTripItem {
  id: string;
  tripCode: string;
  corridor: 'suburb' | 'mainline' | 'sahara' | 'international';
  departure: BilingualText;
  arrival: BilingualText;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  trainType: BilingualText;
  frequency: BilingualText;
  price: string;
  stops: BilingualText[];
}

export interface ExternalPortalService {
  id: string;
  title: BilingualText;
  summary: BilingualText;
  officialUrl: string;
  tag: BilingualText;
}

export interface RichGuideContent {
  intro: { ar: string[]; fr: string[] };
  eligibilityChecklist: { ar: string[]; fr: string[] };
  stepByStepGuide: {
    title: BilingualText;
    detail: BilingualText;
  }[];
  troubleshooting: {
    issue: BilingualText;
    solution: BilingualText;
  }[];
  extraFaqs: {
    question: BilingualText;
    answer: BilingualText;
  }[];
}

export interface ToolRichGuide {
  quickSummary?: {
    targetAudience: BilingualText;
    processingTime: BilingualText;
    fees: BilingualText;
    channel: BilingualText;
    keyRequirement: BilingualText;
  };
  explanation: { ar: string[]; fr: string[] };
  formulaTitle: BilingualText;
  formulaText: BilingualText;
  practicalExample: {
    title: BilingualText;
    scenario: BilingualText;
    result: BilingualText;
  };
  comparisonTable?: {
    title: BilingualText;
    headers: BilingualText[];
    rows: BilingualText[][];
  };
  tips: { ar: string[]; fr: string[] };
  extraFaqs: {
    question: BilingualText;
    answer: BilingualText;
  }[];
}

export interface BlogArticle {
  slug: string;
  category: BilingualText;
  publishedAt: string;
  updatedAt: string;
  readTimeMinutes: number;
  title: BilingualText;
  excerpt: BilingualText;
  quickAnswer: BilingualText;
  sections: {
    heading: BilingualText;
    paragraphs: { ar: string[]; fr: string[] };
    bullets?: { ar: string[]; fr: string[] };
  }[];
  comparisonTable?: {
    headers: BilingualText[];
    rows: BilingualText[][];
  };
  relatedSectors: string[];
  relatedTools: { category: string; slug: string; label: BilingualText }[];
  faqs: {
    question: BilingualText;
    answer: BilingualText;
  }[];
}

