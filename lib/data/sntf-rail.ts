import { TrainTripItem, BilingualText } from '../types';

export interface SntfStation {
  id: string;
  name: BilingualText;
  wilaya: BilingualText;
  lines: string[];
  lat: number;
  lng: number;
}

export interface SntfCorridorInfo {
  id: 'suburb' | 'mainline' | 'sahara' | 'international';
  title: BilingualText;
  description: BilingualText;
  frequencySummary: BilingualText;
  fareRange: string;
}

export interface SntfNetworkGroup {
  id: 'suburb_algiers' | 'eastern' | 'western' | 'sahara_plateaus' | 'international';
  title: BilingualText;
  subtitle: BilingualText;
  corridorRef: 'suburb' | 'mainline' | 'sahara' | 'international';
  highlights: BilingualText[];
  scheduleId: string;
}

export interface SntfTariffCard {
  id: string;
  name: BilingualText;
  discount: BilingualText;
  audience: BilingualText;
  scope: BilingualText;
  details: BilingualText;
}

export interface SntfLineSchedule {
  id: string;
  code: string;
  networkGroup: SntfNetworkGroup['id'];
  title: BilingualText;
  corridorSummary: BilingualText;
  operatingDays: BilingualText;
  stations: BilingualText[];
  departures: {
    trainNumber: string;
    departureTime: string;
    arrivalTime: string;
    type: BilingualText;
    note?: BilingualText;
  }[];
  sourceNote: BilingualText;
}

export interface SntfCorridorDiagramNote {
  lineTitle: BilingualText;
  documentedStops: BilingualText[];
  diagramOnlyHalts: BilingualText[];
}

export const SNTF_CORRIDORS: SntfCorridorInfo[] = [
  {
    id: 'suburb',
    title: {
      ar: 'شبكة ضواحي الجزائر العاصمة',
      fr: 'Réseau Banlieue d\'Alger',
    },
    description: {
      ar: 'قطارات كهربائية يومية تربط محطة آغا والجزائر الوسطى بالثنية، العفرون، زرالدة، ومطار هواري بومدين الدولي.',
      fr: 'Trains électriques quotidiens reliant Alger/Agha à Thénia, El Affroun, Zéralda et l\'Aéroport Houari Boumediene.',
    },
    frequencySummary: {
      ar: 'كل 15 إلى 30 دقيقة يوميا',
      fr: 'Toutes les 15 à 30 min par jour',
    },
    fareRange: '30 - 110 DZD',
  },
  {
    id: 'mainline',
    title: {
      ar: 'الخطوط الكبرى السريعة (كوراديا)',
      fr: 'Grandes Lignes Rapides (Coradia)',
    },
    description: {
      ar: 'قطارات كوراديا الحديثة عالية الراحة التي تربط العاصمة بوهران، قسنطينة، عنابة، سطيف، بجاية، وتلمسان.',
      fr: 'Rames modernes Coradia reliant Alger à Oran, Constantine, Annaba, Sétif, Béjaïa et Tlemcen.',
    },
    frequencySummary: {
      ar: 'رحلات صباحية ومسائية منتظمة',
      fr: 'Départs quotidiens matin et après-midi',
    },
    fareRange: '550 - 2 100 DZD',
  },
  {
    id: 'sahara',
    title: {
      ar: 'خطوط الجنوب والهضاب العليا',
      fr: 'Lignes du Sud & Hauts Plateaux',
    },
    description: {
      ar: 'قطارات ليلية بمقصورات نوم وقطارات جهوية تربط وهران ببشار، والعاصمة بكل من بسكرة وتقرت والأغواط.',
      fr: 'Trains de nuit à couchettes et liaisons régionales desservant Béchar, Biskra, Touggourt, Djelfa et Laghouat.',
    },
    frequencySummary: {
      ar: 'رحلات يومية أو بالتناوب ليلا',
      fr: 'Dessertes nocturnes quotidiennes ou alternées',
    },
    fareRange: '850 - 2 400 DZD',
  },
  {
    id: 'international',
    title: {
      ar: 'الخط المغاربي الدولي',
      fr: 'Ligne Internationale Maghreb',
    },
    description: {
      ar: 'القطار الدولي المباشر بين عنابة وتونس العاصمة مرورا بسوق أهراس وغار الدماء.',
      fr: 'Liaison internationale directe reliant Annaba à Tunis via Souk Ahras et Ghardimaou.',
    },
    frequencySummary: {
      ar: '3 رحلات أسبوعية ذهابا وإيابا',
      fr: '3 allers-retours hebdomadaires',
    },
    fareRange: '1 900 DZD',
  },
];

export const SNTF_NETWORK_GROUPS: SntfNetworkGroup[] = [
  {
    id: 'suburb_algiers',
    title: {
      ar: 'مواقيت سير القطارات (ضاحية الجزائر)',
      fr: 'Horaires Trains Banlieue d\'Alger',
    },
    subtitle: {
      ar: 'الشبكة الكهربائية لضواحي العاصمة نحو الثنية، البليدة والعفرون، زرالدة، ومطار هواري بومدين',
      fr: 'Réseau électrifié : Alger / Agha ↔ Thénia, El Affroun, Zéralda et Aéroport',
    },
    corridorRef: 'suburb',
    highlights: [
      { ar: 'آغا ↔ مطار هواري بومدين (كل ساعة تقريبا، 22 دقيقة)', fr: 'Agha ↔ Aéroport Houari Boumediene (cadencement horaire, 22 min)' },
      { ar: 'الجزائر ↔ الثنية عبر الحراش والرويبة وبومرداس', fr: 'Alger ↔ Thénia via El Harrach, Rouiba et Boumerdès' },
      { ar: 'الجزائر ↔ البليدة ↔ العفرون وخط زرالدة عبر سيدي عبد الله', fr: 'Alger ↔ Blida ↔ El Affroun et liaison Zéralda via Sidi Abdellah' },
    ],
    scheduleId: 'abttbb-to-agha',
  },
  {
    id: 'eastern',
    title: {
      ar: 'مواقيت سير القطارات (الخطوط الجهوية والكبرى - الشرق Eastern)',
      fr: 'Grandes Lignes & Régionales Est (Eastern)',
    },
    subtitle: {
      ar: 'الربط بين الجزائر العاصمة وحواضر الشرق الجزائري عبر البويرة وبجاية وبرج بوعريريج وسطيف وقسنطينة وعنابة',
      fr: 'Liaisons Alger ↔ Bouira, Béjaïa, Bordj Bou Arréridj, Sétif, Constantine et Annaba',
    },
    corridorRef: 'mainline',
    highlights: [
      { ar: 'الجزائر (آغا) ↔ قسنطينة وعنابة (كوراديا يوميا + قطار ليلي)', fr: 'Alger (Agha) ↔ Constantine & Annaba (Coradia quotidien + train de nuit)' },
      { ar: 'الجزائر ↔ بجاية عبر الثنية وأقبو وسيدي عيش', fr: 'Alger ↔ Béjaïa via Thénia, Akbou et Sidi Aïch' },
      { ar: 'خط الثنية / برج بوعريريج ↔ آغا (ABTTBB) يوميا في الاتجاهين', fr: 'Axe Thénia / Bordj Bou Arréridj ↔ Agha (ABTTBB) quotidien dans les deux sens' },
    ],
    scheduleId: 'alger-constantine',
  },
  {
    id: 'western',
    title: {
      ar: 'مواقيت سير القطارات (الخطوط الجهوية والكبرى - الغربية Western)',
      fr: 'Grandes Lignes & Régionales Ouest (Western)',
    },
    subtitle: {
      ar: 'القطارات السريعة كوراديا والجهوية نحو الشلف وغليزان ووهران وسيدي بلعباس وتلمسان',
      fr: 'Trains Coradia et régionaux vers Chlef, Relizane, Oran, Sidi Bel Abbès et Tlemcen',
    },
    corridorRef: 'mainline',
    highlights: [
      { ar: 'الجزائر (آغا) ↔ وهران السريع عبر الشلف وغليزان (4 سا 15 د)', fr: 'Alger (Agha) ↔ Oran Express via Chlef et Relizane (4h 15)' },
      { ar: 'وهران ↔ تلمسان عبر سيدي بلعباس (1 سا 50 د)', fr: 'Oran ↔ Tlemcen via Sidi Bel Abbès (1h 50)' },
      { ar: 'ضواحي وهران وشبكة الغرب الجهوية', fr: 'Desserte suburbaine d\'Oran et lignes régionales Ouest' },
    ],
    scheduleId: 'alger-oran',
  },
  {
    id: 'sahara_plateaus',
    title: {
      ar: 'مواقيت سير القطارات (الخطوط الجهوية - الصحراء والهضاب العليا)',
      fr: 'Lignes Régionales — Sahara & Hauts Plateaux',
    },
    subtitle: {
      ar: 'القطارات الليلية والجهوية نحو المسيلة وباتنة وبسكرة وتقرت والمشرية وبشار',
      fr: 'Trains de nuit et dessertes régionales : M\'Sila, Batna, Biskra, Touggourt, Mécheria et Béchar',
    },
    corridorRef: 'sahara',
    highlights: [
      { ar: 'الجزائر ↔ تقرت مرورا بالمسيلة وباتنة وبسكرة والمغير', fr: 'Alger ↔ Touggourt via M\'Sila, Batna, Biskra et El M\'Ghair' },
      { ar: 'وهران ↔ بشار عبر سعيدة والمشرية وعين الصفراء', fr: 'Oran ↔ Béchar via Saïda, Mécheria et Aïn Sefra' },
      { ar: 'قسنطينة ↔ باتنة ↔ بسكرة يوميا', fr: 'Constantine ↔ Batna ↔ Biskra quotidien' },
    ],
    scheduleId: 'alger-touggourt',
  },
  {
    id: 'international',
    title: {
      ar: 'مواقيت سير القطارات (الخط الدولي)',
      fr: 'Ligne Ferroviaire Internationale',
    },
    subtitle: {
      ar: 'الربط الدولي المباشر بين عنابة وتونس العاصمة عبر سوق أهراس وغار الدماء',
      fr: 'Liaison directe internationale Annaba ↔ Tunis via Souk Ahras et Ghardimaou',
    },
    corridorRef: 'international',
    highlights: [
      { ar: 'عنابة ↔ سوق أهراس ↔ غار الدماء ↔ جندوبة ↔ باجة ↔ تونس', fr: 'Annaba ↔ Souk Ahras ↔ Ghardimaou ↔ Jendouba ↔ Béja ↔ Tunis' },
      { ar: '3 رحلات أسبوعية ذهابا وإيابا مع إجراءات العبور الحدودي بالمحطة', fr: '3 allers-retours par semaine avec formalités frontalières en gare' },
    ],
    scheduleId: 'annaba-tunis',
  },
];

export const SNTF_STATIONS: SntfStation[] = [
  { id: 'alger', name: { ar: 'الجزائر الوسطى', fr: 'Alger Centre' }, wilaya: { ar: 'الجزائر', fr: 'Alger' }, lines: ['suburb', 'mainline'], lat: 36.776, lng: 3.061 },
  { id: 'agha', name: { ar: 'محطة أغا', fr: 'Gare Agha' }, wilaya: { ar: 'الجزائر', fr: 'Alger' }, lines: ['suburb', 'mainline', 'sahara'], lat: 36.766, lng: 3.058 },
  { id: 'el-harrach', name: { ar: 'الحراش', fr: 'El Harrach' }, wilaya: { ar: 'الجزائر', fr: 'Alger' }, lines: ['suburb', 'mainline'], lat: 36.721, lng: 3.137 },
  { id: 'bab-ezzouar', name: { ar: 'باب الزوار', fr: 'Bab Ezzouar' }, wilaya: { ar: 'الجزائر', fr: 'Alger' }, lines: ['suburb'], lat: 36.718, lng: 3.188 },
  { id: 'airport', name: { ar: 'مطار هواري بومدين', fr: 'Aéroport Houari Boumediene' }, wilaya: { ar: 'الجزائر', fr: 'Alger' }, lines: ['suburb'], lat: 36.691, lng: 3.215 },
  { id: 'thenia', name: { ar: 'الثنية', fr: 'Thénia' }, wilaya: { ar: 'بومرداس', fr: 'Boumerdès' }, lines: ['suburb', 'mainline'], lat: 36.725, lng: 3.556 },
  { id: 'zeralda', name: { ar: 'زرالدة', fr: 'Zéralda' }, wilaya: { ar: 'الجزائر', fr: 'Alger' }, lines: ['suburb'], lat: 36.711, lng: 2.842 },
  { id: 'blida', name: { ar: 'البليدة', fr: 'Blida' }, wilaya: { ar: 'البليدة', fr: 'Blida' }, lines: ['suburb', 'mainline'], lat: 36.479, lng: 2.828 },
  { id: 'el-affroun', name: { ar: 'العفرون', fr: 'El Affroun' }, wilaya: { ar: 'البليدة', fr: 'Blida' }, lines: ['suburb', 'mainline'], lat: 36.471, lng: 2.625 },
  { id: 'chlef', name: { ar: 'الشلف', fr: 'Chlef' }, wilaya: { ar: 'الشلف', fr: 'Chlef' }, lines: ['mainline'], lat: 36.165, lng: 1.334 },
  { id: 'relizane', name: { ar: 'غليزان', fr: 'Relizane' }, wilaya: { ar: 'غليزان', fr: 'Relizane' }, lines: ['mainline'], lat: 35.737, lng: 0.555 },
  { id: 'oran', name: { ar: 'وهران', fr: 'Oran' }, wilaya: { ar: 'وهران', fr: 'Oran' }, lines: ['mainline', 'sahara'], lat: 35.697, lng: -0.633 },
  { id: 'tlemcen', name: { ar: 'تلمسان', fr: 'Tlemcen' }, wilaya: { ar: 'تلمسان', fr: 'Tlemcen' }, lines: ['mainline'], lat: 34.878, lng: -1.315 },
  { id: 'bouira', name: { ar: 'البويرة', fr: 'Bouira' }, wilaya: { ar: 'البويرة', fr: 'Bouira' }, lines: ['mainline', 'sahara'], lat: 36.374, lng: 3.901 },
  { id: 'bejaia', name: { ar: 'بجاية', fr: 'Béjaïa' }, wilaya: { ar: 'بجاية', fr: 'Béjaïa' }, lines: ['mainline'], lat: 36.751, lng: 5.056 },
  { id: 'bba', name: { ar: 'برج بوعريريج', fr: 'Bordj Bou Arréridj' }, wilaya: { ar: 'برج بوعريريج', fr: 'Bordj Bou Arréridj' }, lines: ['mainline', 'sahara'], lat: 36.073, lng: 4.761 },
  { id: 'setif', name: { ar: 'سطيف', fr: 'Sétif' }, wilaya: { ar: 'سطيف', fr: 'Sétif' }, lines: ['mainline'], lat: 36.191, lng: 5.413 },
  { id: 'constantine', name: { ar: 'قسنطينة', fr: 'Constantine' }, wilaya: { ar: 'قسنطينة', fr: 'Constantine' }, lines: ['mainline'], lat: 36.365, lng: 6.614 },
  { id: 'annaba', name: { ar: 'عنابة', fr: 'Annaba' }, wilaya: { ar: 'عنابة', fr: 'Annaba' }, lines: ['mainline', 'international'], lat: 36.900, lng: 7.766 },
  { id: 'batna', name: { ar: 'باتنة', fr: 'Batna' }, wilaya: { ar: 'باتنة', fr: 'Batna' }, lines: ['mainline', 'sahara'], lat: 35.555, lng: 6.174 },
  { id: 'biskra', name: { ar: 'بسكرة', fr: 'Biskra' }, wilaya: { ar: 'بسكرة', fr: 'Biskra' }, lines: ['sahara'], lat: 34.850, lng: 5.728 },
  { id: 'touggourt', name: { ar: 'تقرت', fr: 'Touggourt' }, wilaya: { ar: 'تقرت', fr: 'Touggourt' }, lines: ['sahara'], lat: 33.105, lng: 6.058 },
  { id: 'mecheria', name: { ar: 'المشرية', fr: 'Mécheria' }, wilaya: { ar: 'النعامة', fr: 'Naâma' }, lines: ['sahara'], lat: 33.541, lng: -0.281 },
  { id: 'bechar', name: { ar: 'بشار', fr: 'Béchar' }, wilaya: { ar: 'بشار', fr: 'Béchar' }, lines: ['sahara'], lat: 31.616, lng: -2.216 },
  { id: 'souk-ahras', name: { ar: 'سوق أهراس', fr: 'Souk Ahras' }, wilaya: { ar: 'سوق أهراس', fr: 'Souk Ahras' }, lines: ['international'], lat: 36.286, lng: 7.951 },
  { id: 'tunis', name: { ar: 'تونس العاصمة', fr: 'Tunis Ville' }, wilaya: { ar: 'الجمهورية التونسية', fr: 'Tunisie' }, lines: ['international'], lat: 36.795, lng: 10.180 },
];

export const trainTripsList: TrainTripItem[] = [
  {
    id: 'alger-thenia',
    tripCode: 'BL-101',
    corridor: 'suburb',
    departure: { ar: 'الجزائر الوسطى (أغا)', fr: 'Alger (Agha)' },
    arrival: { ar: 'الثنية (بومرداس)', fr: 'Thénia (Boumerdès)' },
    departureTime: '06:00',
    arrivalTime: '06:58',
    duration: '58m',
    trainType: { ar: 'قطار كهربائي ضواحي (Stadler)', fr: 'Train Banlieue Électrique (Stadler)' },
    frequency: { ar: 'كل 20 دقيقة (05:30 - 21:00)', fr: 'Toutes les 20 min (05:30 - 21:00)' },
    price: '90 DZD',
    stops: [
      { ar: 'الجزائر الوسطى', fr: 'Alger Centre' },
      { ar: 'أغا', fr: 'Agha' },
      { ar: 'الحراش', fr: 'El Harrach' },
      { ar: 'باب الزوار', fr: 'Bab Ezzouar' },
      { ar: 'رويبة', fr: 'Rouiba' },
      { ar: 'الرغاية', fr: 'Réghaïa' },
      { ar: 'بومرداس', fr: 'Boumerdès' },
      { ar: 'الثنية', fr: 'Thénia' },
    ],
  },
  {
    id: 'alger-affroun',
    tripCode: 'BL-204',
    corridor: 'suburb',
    departure: { ar: 'الجزائر (أغا)', fr: 'Alger (Agha)' },
    arrival: { ar: 'العفرون (البليدة)', fr: 'El Affroun (Blida)' },
    departureTime: '06:15',
    arrivalTime: '07:20',
    duration: '1h 05m',
    trainType: { ar: 'قطار كهربائي ضواحي (Stadler)', fr: 'Train Banlieue Électrique' },
    frequency: { ar: 'كل 30 دقيقة طوال اليوم', fr: 'Toutes les 30 min' },
    price: '110 DZD',
    stops: [
      { ar: 'أغا', fr: 'Agha' },
      { ar: 'حسين داي', fr: 'Hussein Dey' },
      { ar: 'الحراش', fr: 'El Harrach' },
      { ar: 'بئر توتة', fr: 'Birtouta' },
      { ar: 'بوفاريك', fr: 'Boufarik' },
      { ar: 'البليدة', fr: 'Blida' },
      { ar: 'العفرون', fr: 'El Affroun' },
    ],
  },
  {
    id: 'agha-zeralda',
    tripCode: 'BL-302',
    corridor: 'suburb',
    departure: { ar: 'محطة أغا (الجزائر)', fr: 'Gare Agha (Alger)' },
    arrival: { ar: 'زرالدة (المدينة الجديدة)', fr: 'Zéralda' },
    departureTime: '06:30',
    arrivalTime: '07:12',
    duration: '42m',
    trainType: { ar: 'قطار الضاحية الغربي', fr: 'Banlieue Ouest Électrique' },
    frequency: { ar: 'رحلات منتظمة كل 40 دقيقة', fr: 'Toutes les 40 min' },
    price: '80 DZD',
    stops: [
      { ar: 'أغا', fr: 'Agha' },
      { ar: 'الحراش', fr: 'El Harrach' },
      { ar: 'جسر قسنطينة', fr: 'Gué de Constantine' },
      { ar: 'بئر توتة', fr: 'Birtouta' },
      { ar: 'سيدي عبد الله', fr: 'Sidi Abdellah' },
      { ar: 'زرالدة', fr: 'Zéralda' },
    ],
  },
  {
    id: 'agha-airport',
    tripCode: 'AIR-01',
    corridor: 'suburb',
    departure: { ar: 'محطة أغا (الجزائر)', fr: 'Gare Agha (Alger)' },
    arrival: { ar: 'مطار هواري بومدين الدولي', fr: 'Aéroport Houari Boumediene' },
    departureTime: '05:00',
    arrivalTime: '05:22',
    duration: '22m',
    trainType: { ar: 'خط المطار السريع (Navette)', fr: 'Navette Aéroport Express' },
    frequency: { ar: 'كل ساعة (05:00 - 22:00)', fr: 'Toutes les heures (05:00 - 22:00)' },
    price: '80 DZD',
    stops: [
      { ar: 'أغا', fr: 'Agha' },
      { ar: 'الحراش', fr: 'El Harrach' },
      { ar: 'باب الزوار', fr: 'Bab Ezzouar' },
      { ar: 'مطار هواري بومدين', fr: 'Aéroport International' },
    ],
  },
  {
    id: 'abttbb-to-agha',
    tripCode: 'REG-1022',
    corridor: 'mainline',
    departure: { ar: 'برج بوعريريج (ABTTBB)', fr: 'Bordj Bou Arréridj (ABTTBB)' },
    arrival: { ar: 'محطة أغا (الجزائر)', fr: 'Gare Agha (Alger)' },
    departureTime: '05:45',
    arrivalTime: '09:10',
    duration: '3h 25m',
    trainType: { ar: 'قطار جهوي سريع (الشرق - الوسط)', fr: 'Train Régional Express Est-Centre' },
    frequency: { ar: 'يومي صباحي ومسائي في الاتجاهين', fr: 'Quotidien matin & soir dans les deux sens' },
    price: '620 DZD',
    stops: [
      { ar: 'برج بوعريريج', fr: 'Bordj Bou Arréridj' },
      { ar: 'المنصورة', fr: 'Mansourah' },
      { ar: 'البويرة', fr: 'Bouira' },
      { ar: 'الأخضرية', fr: 'Lakhdaria' },
      { ar: 'الثنية', fr: 'Thénia' },
      { ar: 'الحراش', fr: 'El Harrach' },
      { ar: 'أغا', fr: 'Agha' },
    ],
  },
  {
    id: 'alger-oran-morning',
    tripCode: '1002',
    corridor: 'mainline',
    departure: { ar: 'الجزائر (أغا)', fr: 'Alger (Agha)' },
    arrival: { ar: 'وهران', fr: 'Oran' },
    departureTime: '08:00',
    arrivalTime: '12:15',
    duration: '4h 15m',
    trainType: { ar: 'قطار سريع Coradia', fr: 'Train Coradia Grande Ligne' },
    frequency: { ar: 'رحلات يومية (08:00 و15:30)', fr: 'Quotidien (08h00 & 15h30)' },
    price: '1 350 DZD',
    stops: [
      { ar: 'أغا', fr: 'Agha' },
      { ar: 'البليدة', fr: 'Blida' },
      { ar: 'العفرون', fr: 'El Affroun' },
      { ar: 'خميس مليانة', fr: 'Khemis Miliana' },
      { ar: 'الشلف', fr: 'Chlef' },
      { ar: 'غليزان', fr: 'Relizane' },
      { ar: 'المحمدية', fr: 'Mohammadia' },
      { ar: 'وهران', fr: 'Oran' },
    ],
  },
  {
    id: 'oran-alger-afternoon',
    tripCode: '1005',
    corridor: 'mainline',
    departure: { ar: 'وهران', fr: 'Oran' },
    arrival: { ar: 'الجزائر (أغا)', fr: 'Alger (Agha)' },
    departureTime: '10:30',
    arrivalTime: '14:45',
    duration: '4h 15m',
    trainType: { ar: 'قطار سريع Coradia', fr: 'Train Coradia Grande Ligne' },
    frequency: { ar: 'يومي (07:30 و10:30 و15:00)', fr: 'Quotidien (07h30, 10h30 & 15h00)' },
    price: '1 350 DZD',
    stops: [
      { ar: 'وهران', fr: 'Oran' },
      { ar: 'المحمدية', fr: 'Mohammadia' },
      { ar: 'غليزان', fr: 'Relizane' },
      { ar: 'الشلف', fr: 'Chlef' },
      { ar: 'العفرون', fr: 'El Affroun' },
      { ar: 'البليدة', fr: 'Blida' },
      { ar: 'أغا', fr: 'Agha' },
    ],
  },
  {
    id: 'oran-tlemcen',
    tripCode: '1044',
    corridor: 'mainline',
    departure: { ar: 'وهران', fr: 'Oran' },
    arrival: { ar: 'تلمسان', fr: 'Tlemcen' },
    departureTime: '07:15',
    arrivalTime: '09:05',
    duration: '1h 50m',
    trainType: { ar: 'قطار سريع Coradia', fr: 'Train Coradia Régional' },
    frequency: { ar: 'يومي (ذهاب وإياب)', fr: 'Quotidien' },
    price: '550 DZD',
    stops: [
      { ar: 'وهران', fr: 'Oran' },
      { ar: 'سيدي بلعباس', fr: 'Sidi Bel Abbès' },
      { ar: 'تلمسان', fr: 'Tlemcen' },
    ],
  },
  {
    id: 'tlemcen-oran',
    tripCode: '1043',
    corridor: 'mainline',
    departure: { ar: 'تلمسان', fr: 'Tlemcen' },
    arrival: { ar: 'وهران', fr: 'Oran' },
    departureTime: '07:10',
    arrivalTime: '09:00',
    duration: '1h 50m',
    trainType: { ar: 'قطار سريع Coradia', fr: 'Train Coradia Régional' },
    frequency: { ar: 'يومي صباحي ومسائي', fr: 'Quotidien matin & soir' },
    price: '550 DZD',
    stops: [
      { ar: 'تلمسان', fr: 'Tlemcen' },
      { ar: 'سيدي بلعباس', fr: 'Sidi Bel Abbès' },
      { ar: 'وهران', fr: 'Oran' },
    ],
  },
  {
    id: 'alger-constantine',
    tripCode: '1014',
    corridor: 'mainline',
    departure: { ar: 'الجزائر (أغا)', fr: 'Alger (Agha)' },
    arrival: { ar: 'قسنطينة', fr: 'Constantine' },
    departureTime: '07:30',
    arrivalTime: '13:45',
    duration: '6h 15m',
    trainType: { ar: 'قطار سريع Coradia', fr: 'Train Coradia Grande Ligne' },
    frequency: { ar: 'يومي منتظم', fr: 'Quotidien' },
    price: '1 450 DZD',
    stops: [
      { ar: 'أغا', fr: 'Agha' },
      { ar: 'البويرة', fr: 'Bouira' },
      { ar: 'المنصورة', fr: 'Mansourah' },
      { ar: 'برج بوعريريج', fr: 'Bordj Bou Arréridj' },
      { ar: 'سطيف', fr: 'Sétif' },
      { ar: 'قسنطينة', fr: 'Constantine' },
    ],
  },
  {
    id: 'constantine-biskra',
    tripCode: 'REG-508',
    corridor: 'sahara',
    departure: { ar: 'قسنطينة', fr: 'Constantine' },
    arrival: { ar: 'بسكرة', fr: 'Biskra' },
    departureTime: '15:00',
    arrivalTime: '18:20',
    duration: '3h 20m',
    trainType: { ar: 'قطار جهوي سريع (الشرق - الأوراس)', fr: 'Autorail Régional Aurès' },
    frequency: { ar: 'يومي (يسمح بالتبديل في قسنطينة)', fr: 'Quotidien (correspondance Constantine)' },
    price: '580 DZD',
    stops: [
      { ar: 'قسنطينة', fr: 'Constantine' },
      { ar: 'عين مليلة', fr: 'Aïn M\'lila' },
      { ar: 'باتنة', fr: 'Batna' },
      { ar: 'عين التوتة', fr: 'Aïn Touta' },
      { ar: 'القنطرة', fr: 'El Kantara' },
      { ar: 'بسكرة', fr: 'Biskra' },
    ],
  },
  {
    id: 'alger-bejaia',
    tripCode: '1020',
    corridor: 'mainline',
    departure: { ar: 'الجزائر (أغا)', fr: 'Alger (Agha)' },
    arrival: { ar: 'بجاية', fr: 'Béjaïa' },
    departureTime: '07:10',
    arrivalTime: '11:30',
    duration: '4h 20m',
    trainType: { ar: 'قطار سريع Coradia', fr: 'Train Coradia Express' },
    frequency: { ar: 'رحلتان يوميا (07:10 و16:00)', fr: '2 trains / jour' },
    price: '790 DZD',
    stops: [
      { ar: 'أغا', fr: 'Agha' },
      { ar: 'الثنية', fr: 'Thénia' },
      { ar: 'البويرة', fr: 'Bouira' },
      { ar: 'أقبو', fr: 'Akbou' },
      { ar: 'سيدي عيش', fr: 'Sidi Aïch' },
      { ar: 'القصر', fr: 'El Kseur' },
      { ar: 'بجاية', fr: 'Béjaïa' },
    ],
  },
  {
    id: 'alger-annaba',
    tripCode: '1018',
    corridor: 'mainline',
    departure: { ar: 'الجزائر (أغا)', fr: 'Alger (Agha)' },
    arrival: { ar: 'عنابة', fr: 'Annaba' },
    departureTime: '20:45',
    arrivalTime: '06:30',
    duration: '9h 45m',
    trainType: { ar: 'قطار ليلي بمقصورات نوم', fr: 'Train de Nuit à Couchettes' },
    frequency: { ar: 'يومي ليلي', fr: 'Quotidien de nuit' },
    price: '1 950 DZD',
    stops: [
      { ar: 'أغا', fr: 'Agha' },
      { ar: 'برج بوعريريج', fr: 'Bordj Bou Arréridj' },
      { ar: 'سطيف', fr: 'Sétif' },
      { ar: 'قسنطينة', fr: 'Constantine' },
      { ar: 'عزابة', fr: 'Azzaba' },
      { ar: 'عنابة', fr: 'Annaba' },
    ],
  },
  {
    id: 'alger-touggourt',
    tripCode: '601',
    corridor: 'sahara',
    departure: { ar: 'الجزائر (أغا)', fr: 'Alger (Agha)' },
    arrival: { ar: 'تقرت (الصحراء)', fr: 'Touggourt' },
    departureTime: '18:10',
    arrivalTime: '04:50',
    duration: '10h 40m',
    trainType: { ar: 'قطار ليلي صحراوي (كوراديا / مقصورات)', fr: 'Train Sahara Couchettes' },
    frequency: { ar: 'الأحد، الثلاثاء، الخميس', fr: 'Dimanche, Mardi, Jeudi' },
    price: '1 900 DZD',
    stops: [
      { ar: 'أغا', fr: 'Agha' },
      { ar: 'المسيلة', fr: 'M\'Sila' },
      { ar: 'بريكة', fr: 'Barika' },
      { ar: 'باتنة', fr: 'Batna' },
      { ar: 'بسكرة', fr: 'Biskra' },
      { ar: 'المغير', fr: 'El M\'Ghair' },
      { ar: 'جامعة', fr: 'Djamaa' },
      { ar: 'تقرت', fr: 'Touggourt' },
    ],
  },
  {
    id: 'oran-bechar',
    tripCode: '702',
    corridor: 'sahara',
    departure: { ar: 'وهران', fr: 'Oran' },
    arrival: { ar: 'بشار', fr: 'Béchar' },
    departureTime: '20:30',
    arrivalTime: '06:15',
    duration: '9h 45m',
    trainType: { ar: 'قطار صحراوي ليلي', fr: 'Train Sahara Couchettes' },
    frequency: { ar: 'رحلات منتظمة ليلا', fr: 'Quotidien de nuit' },
    price: '1 850 DZD',
    stops: [
      { ar: 'وهران', fr: 'Oran' },
      { ar: 'سيدي بلعباس', fr: 'Sidi Bel Abbès' },
      { ar: 'سعيدة', fr: 'Saïda' },
      { ar: 'المشرية', fr: 'Mécheria' },
      { ar: 'عين الصفراء', fr: 'Aïn Sefra' },
      { ar: 'بني ونيف', fr: 'Beni Ounif' },
      { ar: 'بشار', fr: 'Béchar' },
    ],
  },
  {
    id: 'annaba-tunis',
    tripCode: 'INT-11',
    corridor: 'international',
    departure: { ar: 'عنابة (الجزائر)', fr: 'Annaba (Algérie)' },
    arrival: { ar: 'تونس العاصمة (تونس)', fr: 'Tunis (Tunisie)' },
    departureTime: '09:00',
    arrivalTime: '18:27',
    duration: '9h 27m',
    trainType: { ar: 'القطار الدولي المغاربي', fr: 'Train International Maghreb' },
    frequency: { ar: 'الأحد، الثلاثاء، الخميس', fr: 'Dimanche, Mardi, Jeudi' },
    price: '1 900 DZD',
    stops: [
      { ar: 'عنابة', fr: 'Annaba' },
      { ar: 'سوق أهراس', fr: 'Souk Ahras' },
      { ar: 'غار الدماء', fr: 'Ghardimaou' },
      { ar: 'جندوبة', fr: 'Jendouba' },
      { ar: 'باجة', fr: 'Béja' },
      { ar: 'تونس العاصمة', fr: 'Tunis Ville' },
    ],
  },
];

export const SNTF_TARIFF_CARDS: SntfTariffCard[] = [
  {
    id: 'waqar',
    name: { ar: 'بطاقة وقار للمتقاعدين', fr: 'Carte Waqar (Retraités)' },
    discount: { ar: '50%', fr: '50%' },
    audience: { ar: 'المتقاعدون وذوو الحقوق', fr: 'Retraités et ayants droit' },
    scope: { ar: 'الرحلات الوطنية والخط الدولي نحو تونس', fr: 'Réseau national et ligne internationale de Tunis' },
    details: {
      ar: 'تمنح بطاقة وقار تخفيضا بنسبة 50% على تذاكر القطارات لفائدة المتقاعدين وذوي الحقوق، بما في ذلك الرحلات الوطنية والخط الدولي نحو تونس.',
      fr: 'La carte Waqar accorde 50 % de réduction sur les billets SNTF aux retraités et ayants droit sur tout le réseau national ainsi que sur la liaison internationale vers Tunis.',
    },
  },
  {
    id: 'khadra',
    name: { ar: 'البطاقة الخضراء (الخضراء)', fr: 'Carte Verte (Banlieue Alger)' },
    discount: { ar: '40%', fr: '40%' },
    audience: { ar: 'مستعملو قطارات الضواحي بالعاصمة', fr: 'Navetteurs de la banlieue d\'Alger' },
    scope: { ar: 'القطارات الكهربائية لضاحية مدينة الجزائر', fr: 'Trains électriques de la banlieue d\'Alger' },
    details: {
      ar: 'تمنح البطاقة الخضراء تخفيض 40% على متن القطارات الكهربائية لضاحية مدينة الجزائر في جميع الرحلات اليومية.',
      fr: 'La Carte Verte offre 40 % de réduction sur l\'ensemble des rames électriques desservant la banlieue d\'Alger.',
    },
  },
  {
    id: 'age-03',
    name: { ar: 'بطاقة الفئة العمرية الثالثة (03)', fr: 'Carte 3ème Âge (Catégorie 03)' },
    discount: { ar: '20%', fr: '20%' },
    audience: { ar: 'كبار السن (الفئة العمرية 03)', fr: 'Seniors (3ème âge)' },
    scope: { ar: 'الخطوط الجهوية والطويلة التي تفوق 100 كلم', fr: 'Lignes régionales et grandes lignes (> 100 km)' },
    details: {
      ar: 'تمنح بطاقة الفئة العمرية الثالثة تخفيض 20% على كل تذكرة للخطوط الجهوية والخطوط الطويلة التي تفوق مسافة 100 كلم.',
      fr: 'Réduction de 20 % appliquée aux seniors sur chaque billet des lignes régionales et grandes lignes dépassant 100 km.',
    },
  },
  {
    id: 'aller-retour',
    name: { ar: 'بطاقة المسافرون ذهاب - إياب', fr: 'Tarif Voyageurs Aller-Retour' },
    discount: { ar: '20%', fr: '20%' },
    audience: { ar: 'عموم المسافرين ذهابا وإيابا', fr: 'Tout public (billet Aller-Retour)' },
    scope: { ar: 'الخطوط الجهوية والطويلة (> 400 كلم)', fr: 'Grandes lignes (> 400 km)' },
    details: {
      ar: 'تمنح بطاقة المسافرون ذهاب - إياب تخفيض 20% على كل تذكرة للخطوط الجهوية والطويلة التي تفوق 400 كلم.',
      fr: 'Remise de 20 % accordée sur les billets aller-retour sur les lignes régionales et longues distances supérieures à 400 km.',
    },
  },
  {
    id: 'dawahy-regional',
    name: { ar: 'بطاقة الضواحي (عنابة، قسنطينة، وهران)', fr: 'Carte Banlieues Régionales' },
    discount: { ar: '40%', fr: '40%' },
    audience: { ar: 'مسافرو ضواحي المدن الكبرى خارج العاصمة', fr: 'Usagers des banlieues Annaba, Constantine, Oran' },
    scope: { ar: 'مسارات ضواحي عنابة وقسنطينة ووهران', fr: 'Lignes suburbaines d\'Annaba, Constantine et Oran' },
    details: {
      ar: 'تمنح بطاقة الضواحي تخفيض 40% على مسارات قطارات الضواحي في كل من عنابة وقسنطينة ووهران.',
      fr: 'Réduction de 40 % applicable sur les dessertes ferroviaires suburbaines d\'Annaba, Constantine et Oran.',
    },
  },
  {
    id: 'special-needs',
    name: { ar: 'بطاقة ذوي الاحتياجات الخاصة', fr: 'Carte Personnes à Besoins Spéciaux' },
    discount: { ar: 'تسعيرة خاصة', fr: 'Tarif spécial' },
    audience: { ar: 'الأشخاص ذوو الاحتياجات الخاصة', fr: 'Personnes en situation de handicap' },
    scope: { ar: 'جميع خطوط شبكة السكك الحديدية الوطنية', fr: 'Ensemble du réseau ferroviaire SNTF' },
    details: {
      ar: 'تسعيرة تفضيلية خاصة بذوي الاحتياجات الخاصة ومرافقيهم وفق التنظيم المعمول به في شبابيك SNTF.',
      fr: 'Tarification sociale préférentielle réservée aux titulaires d\'une carte de personne à mobilité réduite ou besoins spécifiques.',
    },
  },
  {
    id: 'summer-camps',
    name: { ar: 'بطاقة المخيمات الصيفية', fr: 'Tarif Colonies de Vacances' },
    discount: { ar: '50%', fr: '50%' },
    audience: { ar: 'أفواج المخيمات الصيفية (> 10 أشخاص)', fr: 'Groupes de colonies (> 10 personnes)' },
    scope: { ar: 'تذاكر ذهاب وإياب للمجموعات المنظمة', fr: 'Billets Aller-Retour pour groupes encadrés' },
    details: {
      ar: 'تمنح بطاقة المخيمات الصيفية تخفيض 50% على تذاكر الذهاب والإياب لأكثر من 10 أشخاص ضمن المخيمات المرخصة.',
      fr: 'Réduction de 50 % sur les trajets aller-retour pour les groupes de colonies de vacances de plus de 10 participants.',
    },
  },
  {
    id: 'half-fare',
    name: { ar: 'بطاقة نصف التسعيرة', fr: 'Carte Demi-Tarif' },
    discount: { ar: '50%', fr: '50%' },
    audience: { ar: 'الفئات المؤهلة لنصف التسعيرة', fr: 'Bénéficiaires conventionnés demi-tarif' },
    scope: { ar: 'رحلات شبكة السكك الحديدية الوطنية', fr: 'Réseau ferroviaire national' },
    details: {
      ar: 'تمنح بطاقة نصف التسعيرة تخفيض 50% من السعر الكامل للتذكرة وفق الشروط المعتمدة لدى المؤسسة.',
      fr: 'Permet de voyager à moitié prix (-50 %) sur les tarifs pleins du réseau ferroviaire SNTF.',
    },
  },
  {
    id: 'children-under-4',
    name: { ar: 'بطاقة التسعيرة الخاصة بالأطفال', fr: 'Tarif Gratuit Enfants (-4 ans)' },
    discount: { ar: '100% مجانا', fr: '100% Gratuit' },
    audience: { ar: 'الأطفال دون 04 سنوات', fr: 'Enfants de moins de 4 ans' },
    scope: { ar: 'جميع الخطوط بدون حجز مقعد منفصل', fr: 'Toutes lignes sans siège attribué' },
    details: {
      ar: 'تمنح التسعيرة الخاصة بالأطفال تخفيض 100% (مجانية تامة) للأطفال دون 04 سنوات دون مقعد مخصص.',
      fr: 'Exonération totale (100 % gratuit) accordée aux enfants de moins de 4 ans voyageant sans occuper un siège séparé.',
    },
  },
  {
    id: 'ordinary-groups',
    name: { ar: 'بطاقة تسعيرة الجماعات العادية', fr: 'Tarif Groupes Ordinaires' },
    discount: { ar: '30%', fr: '30%' },
    audience: { ar: 'المجموعات المكونة من 10 أشخاص فأكثر', fr: 'Groupes d\'au moins 10 personnes' },
    scope: { ar: 'مسافة تساوي أو تفوق 300 كلم', fr: 'Trajets d\'au moins 300 km' },
    details: {
      ar: 'تمنح تسعيرة الجماعات العادية تخفيض 30% لكل مجموعة مكونة من 10 أشخاص على الأقل على مسافة 300 كلم فما فوق.',
      fr: 'Remise de 30 % accordée à tout groupe constitué d\'un minimum de 10 voyageurs sur un parcours de 300 km et plus.',
    },
  },
  {
    id: 'sports-groups',
    name: { ar: 'بطاقة تسعيرة الجماعات الرياضية', fr: 'Tarif Groupes Sportifs' },
    discount: { ar: '50%', fr: '50%' },
    audience: { ar: 'الفرق والوفود الرياضية المتنقلة', fr: 'Clubs et délégations sportives' },
    scope: { ar: 'التنقل في إطار المنافسات والأحداث الرياضية', fr: 'Déplacements liés aux événements sportifs' },
    details: {
      ar: 'تمنح تسعيرة الجماعات الرياضية تخفيض 50% لكل مجموعة أو فريق رياضي متنقل في إطار الأحداث والمنافسات الرياضية الرسمية.',
      fr: 'Réduction de 50 % dédiée aux groupes et équipes sportives se déplaçant dans le cadre d\'une compétition ou manifestation officielle.',
    },
  },
  {
    id: 'youth-12-28',
    name: { ar: 'بطاقة التسعيرة المخصصة للشباب', fr: 'Carte Jeunes (12 - 28 ans)' },
    discount: { ar: '20%', fr: '20%' },
    audience: { ar: 'الشباب بين 12 و28 سنة', fr: 'Jeunes âgés de 12 à 28 ans' },
    scope: { ar: 'المسارات التي تفوق 100 كلم', fr: 'Parcours supérieurs à 100 km' },
    details: {
      ar: 'تمنح التسعيرة المخصصة للشباب تخفيض 20% للشباب الذين تتراوح أعمارهم بين 12 و28 سنة على مسار يتجاوز 100 كلم.',
      fr: 'Avantage tarifaire de 20 % destiné aux voyageurs âgés de 12 à 28 ans pour tout trajet excédant 100 km.',
    },
  },
  {
    id: 'ordinary-subscriptions',
    name: { ar: 'بطاقة الاشتراكات العادية', fr: 'Abonnements Ordinaires SNTF' },
    discount: { ar: '35%', fr: '35%' },
    audience: { ar: 'المشتركون المنتظمون (عمال وموظفون)', fr: 'Abonnés réguliers (hebdo, mensuel, trimestriel)' },
    scope: { ar: 'الخطوط المنتظمة والضواحي والجهوية', fr: 'Lignes régulières banlieue et régionales' },
    details: {
      ar: 'تمنح بطاقة الاشتراكات العادية تخفيض 35% مقارنة بسعر التذاكر اليومية للتنقل المنتظم ذهابا وإيابا.',
      fr: 'Les cartes d\'abonnement ordinaire offrent 35 % de réduction par rapport au cumul des billets quotidiens.',
    },
  },
  {
    id: 'sahla-bimodal',
    name: { ar: 'بطاقة الاشتراك الثنائي "ساهلة"', fr: 'Carte Combinée « Sahla » (SNTF + ETUSA)' },
    discount: { ar: '50%', fr: '50%' },
    audience: { ar: 'مستعملو القطار والحافلة بالعاصمة', fr: 'Usagers multimodaux Train + Bus ETUSA' },
    scope: { ar: 'اشتراك ثنائي موحد: قطار SNTF + حافلة إيتوزا ETUSA', fr: 'Bimodal Alger : Train SNTF + Bus ETUSA' },
    details: {
      ar: 'تمنح بطاقة الاشتراك ساهلة تخفيض 50% عبر بطاقة ثنائية مدمجة تجمع بين رحلات قطار SNTF وحافلات النقل الحضري إيتوزا ETUSA.',
      fr: 'Carte bimodale intégrée combinant 50 % de réduction sur les trains de banlieue SNTF et les lignes d\'autobus ETUSA à Alger.',
    },
  },
  {
    id: 'single-full-5days',
    name: { ar: 'تذكرة الذهاب العادية (بتسعيرة كاملة)', fr: 'Billet Aller Simple Plein Tarif (> 200 km)' },
    discount: { ar: 'صلاحية 05 أيام', fr: 'Validité 5 jours' },
    audience: { ar: 'جميع المسافرين بدون بطاقة خصم', fr: 'Tout voyageur au tarif normal' },
    scope: { ar: 'مسافة تفوق 200 كلم (صلاحية ممتدة 05 أيام)', fr: 'Distance > 200 km (validité étendue 5 jours)' },
    details: {
      ar: 'تمنح تذكرة الذهاب العادية بتسعيرة كاملة صلاحية استعمال تمتد إلى 05 أيام كاملة لكل مسار تفوق مسافته 200 كلم.',
      fr: 'Tout billet aller simple au tarif normal émis pour un parcours dépassant 200 km bénéficie d\'une durée de validité de 5 jours.',
    },
  },
];

export const SNTF_LINE_SCHEDULES: SntfLineSchedule[] = [
  {
    id: 'abttbb-to-agha',
    code: 'ABTTBB ↔ AGHA',
    networkGroup: 'suburb_algiers',
    title: {
      ar: 'جدول خط برج بوعريريج / الثنية ↔ محطة آغا (ABTTBB)',
      fr: 'Fiche Horaire Axe Bordj Bou Arréridj / Thénia ↔ Gare Agha (ABTTBB)',
    },
    corridorSummary: {
      ar: 'يربط هذا الخط الاستراتيجي محطة آغا بالجزائر الوسطى مع الحراش، الثنية، البويرة، وبرج بوعريريج يوميا.',
      fr: 'Liaison stratégique quotidienne reliant Alger-Agha à El Harrach, Thénia, Bouira et Bordj Bou Arréridj.',
    },
    operatingDays: {
      ar: 'السير يوميا في الاتجاهين (حسب توقيت الجزائر UTC+1)',
      fr: 'Circulation quotidienne dans les deux sens (Heure d\'Algérie UTC+1)',
    },
    stations: [
      { ar: 'برج بوعريريج', fr: 'Bordj Bou Arréridj' },
      { ar: 'المنصورة', fr: 'Mansourah' },
      { ar: 'البويرة', fr: 'Bouira' },
      { ar: 'الأخضرية', fr: 'Lakhdaria' },
      { ar: 'الثنية', fr: 'Thénia' },
      { ar: 'الحراش', fr: 'El Harrach' },
      { ar: 'محطة آغا (الجزائر)', fr: 'Gare Agha (Alger)' },
    ],
    departures: [
      {
        trainNumber: 'REG-1022',
        departureTime: '05:45',
        arrivalTime: '09:10',
        type: { ar: 'قطار جهوي سريع نحو آغا', fr: 'Régional Express vers Agha' },
        note: { ar: 'توقفات موثقة في المحطات السبع الرئيسية', fr: 'Arrêts documentés dans les 7 gares principales' },
      },
      {
        trainNumber: '1014',
        departureTime: '07:30',
        arrivalTime: '10:55',
        type: { ar: 'كوراديا الشرق (انطلاقا من آغا)', fr: 'Coradia Est (au départ d\'Agha)' },
        note: { ar: 'يواصل نحو سطيف وقسنطينة', fr: 'Poursuit vers Sétif et Constantine' },
      },
      {
        trainNumber: 'BL-101',
        departureTime: '06:00',
        arrivalTime: '06:58',
        type: { ar: 'ضاحية الجزائر (أغا ↔ الثنية)', fr: 'Banlieue Alger (Agha ↔ Thénia)' },
        note: { ar: 'تردد كل 20 دقيقة بين 05:30 و21:00', fr: 'Toutes les 20 min de 05h30 à 21h00' },
      },
    ],
    sourceNote: {
      ar: 'المواقيت المعروضة مأخوذة من الجدول المعتمد والمدرج في المنصة. يرجى مراعاة أيام التشغيل والتحديثات الاستثنائية.',
      fr: 'Horaires issus des fiches officielles SNTF intégrées au portail. Veuillez tenir compte des jours de circulation et mises à jour saisonnières.',
    },
  },
  {
    id: 'agha-airport',
    code: 'AGHA ↔ AIRPORT',
    networkGroup: 'suburb_algiers',
    title: {
      ar: 'جدول خط مطار هواري بومدين الدولي ↔ محطة آغا',
      fr: 'Fiche Horaire Navette Aéroport Houari Boumediene ↔ Agha',
    },
    corridorSummary: {
      ar: 'قطار المطار المباشر عبر الحراش وباب الزوار بزمن رحلة 22 دقيقة وتسعيرة موحدة 80 دج.',
      fr: 'Navette ferroviaire directe via El Harrach et Bab Ezzouar en 22 minutes au tarif unique de 80 DZD.',
    },
    operatingDays: {
      ar: 'يوميا كل ساعة من 05:00 إلى 22:00',
      fr: 'Quotidien toutes les heures de 05h00 à 22h00',
    },
    stations: [
      { ar: 'محطة آغا', fr: 'Gare Agha' },
      { ar: 'الحراش', fr: 'El Harrach' },
      { ar: 'باب الزوار', fr: 'Bab Ezzouar' },
      { ar: 'مطار هواري بومدين', fr: 'Aéroport Houari Boumediene' },
    ],
    departures: [
      {
        trainNumber: 'AIR-01',
        departureTime: '05:00',
        arrivalTime: '05:22',
        type: { ar: 'أول رحلة صباحية', fr: 'Premier départ matinal' },
      },
      {
        trainNumber: 'AIR-07',
        departureTime: '11:00',
        arrivalTime: '11:22',
        type: { ar: 'تردد نهاري كل ساعة', fr: 'Cadence horaire journée' },
      },
      {
        trainNumber: 'AIR-17',
        departureTime: '21:00',
        arrivalTime: '21:22',
        type: { ar: 'الرحلات المسائية للمطار', fr: 'Desserte soirée aéroport' },
      },
    ],
    sourceNote: {
      ar: 'السعر الثابت للتذكرة 80 دج في كلا الاتجاهين مع الربط المباشر بالمحطة الجوفية للمطار.',
      fr: 'Tarif fixe de 80 DZD par trajet avec accès direct au terminal aéroportuaire.',
    },
  },
  {
    id: 'alger-constantine',
    code: 'ALG ↔ CST',
    networkGroup: 'eastern',
    title: {
      ar: 'جدول الخط الشرقي السريع: الجزائر ↔ سطيف ↔ قسنطينة وعنابة',
      fr: 'Fiche Horaire Ligne Est : Alger ↔ Sétif ↔ Constantine & Annaba',
    },
    corridorSummary: {
      ar: 'محور الشرق الكبير يشمل قطار كوراديا النهاري والقطار الليلي نحو عنابة مرورا ببرج بوعريريج وسطيف.',
      fr: 'Grand axe Est incluant le train Coradia de jour vers Constantine et le train couchettes de nuit vers Annaba.',
    },
    operatingDays: {
      ar: 'رحلات يومية منتظمة (نهارية وليلية)',
      fr: 'Circulations quotidiennes de jour et de nuit',
    },
    stations: [
      { ar: 'محطة آغا (الجزائر)', fr: 'Gare Agha (Alger)' },
      { ar: 'البويرة', fr: 'Bouira' },
      { ar: 'برج بوعريريج', fr: 'Bordj Bou Arréridj' },
      { ar: 'سطيف', fr: 'Sétif' },
      { ar: 'قسنطينة', fr: 'Constantine' },
      { ar: 'عنابة', fr: 'Annaba' },
    ],
    departures: [
      {
        trainNumber: '1014',
        departureTime: '07:30',
        arrivalTime: '13:45',
        type: { ar: 'كوراديا السريع نحو قسنطينة', fr: 'Coradia Express vers Constantine' },
      },
      {
        trainNumber: '1020',
        departureTime: '07:10',
        arrivalTime: '11:30',
        type: { ar: 'كوراديا نحو بجاية (عبر البويرة)', fr: 'Coradia vers Béjaïa (via Bouira)' },
      },
      {
        trainNumber: '1018',
        departureTime: '20:45',
        arrivalTime: '06:30',
        type: { ar: 'القطار الليلي إلى عنابة', fr: 'Train Couchettes vers Annaba' },
      },
    ],
    sourceNote: {
      ar: 'تستفيد الرحلات التي تفوق 400 كلم ذهابا وإيابا من تخفيض 20% وعروض الشباب والطلبة.',
      fr: 'Les parcours aller-retour > 400 km bénéficient de 20 % de remise ainsi que des cartes Jeunes et Waqar.',
    },
  },
  {
    id: 'alger-oran',
    code: 'ALG ↔ ORN',
    networkGroup: 'western',
    title: {
      ar: 'جدول الخط الغربي السريع: الجزائر ↔ الشلف ↔ وهران وتلمسان',
      fr: 'Fiche Horaire Ligne Ouest : Alger ↔ Chlef ↔ Oran & Tlemcen',
    },
    corridorSummary: {
      ar: 'قطارات كوراديا السريعة بين الجزائر ووهران في 4 ساعات و15 دقيقة مع تفرع جهوي نحو سيدي بلعباس وتلمسان.',
      fr: 'Autorails Coradia reliant Alger à Oran en 4h15 avec correspondance vers Sidi Bel Abbès et Tlemcen.',
    },
    operatingDays: {
      ar: 'يومي صباحا ومساء في الاتجاهين',
      fr: 'Quotidien matin et après-midi dans les deux sens',
    },
    stations: [
      { ar: 'محطة آغا (الجزائر)', fr: 'Gare Agha (Alger)' },
      { ar: 'البليدة', fr: 'Blida' },
      { ar: 'الشلف', fr: 'Chlef' },
      { ar: 'غليزان', fr: 'Relizane' },
      { ar: 'وهران', fr: 'Oran' },
      { ar: 'تلمسان', fr: 'Tlemcen' },
    ],
    departures: [
      {
        trainNumber: '1002',
        departureTime: '08:00',
        arrivalTime: '12:15',
        type: { ar: 'الجزائر ← وهران (كوراديا)', fr: 'Alger → Oran (Coradia)' },
      },
      {
        trainNumber: '1005',
        departureTime: '10:30',
        arrivalTime: '14:45',
        type: { ar: 'وهران ← الجزائر (كوراديا)', fr: 'Oran → Alger (Coradia)' },
      },
      {
        trainNumber: '1044',
        departureTime: '07:15',
        arrivalTime: '09:05',
        type: { ar: 'وهران ← تلمسان', fr: 'Oran → Tlemcen' },
      },
    ],
    sourceNote: {
      ar: 'يمكن الربط في محطة وهران بقطار وهران - بشار الصحراوي أو وهران - تلمسان بمهلة 30 إلى 180 دقيقة.',
      fr: 'Correspondance directe possible en gare d\'Oran vers Tlemcen ou Béchar dans une plage de 30 à 180 minutes.',
    },
  },
  {
    id: 'alger-touggourt',
    code: 'SAHARA',
    networkGroup: 'sahara_plateaus',
    title: {
      ar: 'جدول خطوط الصحراء والهضاب العليا: تقرت وبسكرة وبشار',
      fr: 'Fiche Horaire Sahara & Hauts Plateaux : Touggourt, Biskra & Béchar',
    },
    corridorSummary: {
      ar: 'الرحلات الليلية والجهوية نحو الواحات الشرقية (بسكرة وتقرت) والجنوب الغربي (المشرية وبشار).',
      fr: 'Trains couchettes nocturnes vers Biskra/Touggourt et ligne Ouest-Sahara vers Mécheria et Béchar.',
    },
    operatingDays: {
      ar: 'حسب الأيام المبرمجة (الأحد، الثلاثاء، الخميس لتقرت ويوميا لبشار)',
      fr: 'Dim/Mar/Jeu vers Touggourt et liaisons régulières vers Béchar',
    },
    stations: [
      { ar: 'محطة آغا / وهران', fr: 'Agha / Oran' },
      { ar: 'باتنة / سعيدة', fr: 'Batna / Saïda' },
      { ar: 'بسكرة / المشرية', fr: 'Biskra / Mécheria' },
      { ar: 'تقرت / بشار', fr: 'Touggourt / Béchar' },
    ],
    departures: [
      {
        trainNumber: '601',
        departureTime: '18:10',
        arrivalTime: '04:50',
        type: { ar: 'الجزائر ← تقرت (عبر باتنة وبسكرة)', fr: 'Alger → Touggourt (via Batna/Biskra)' },
      },
      {
        trainNumber: '702',
        departureTime: '20:30',
        arrivalTime: '06:15',
        type: { ar: 'وهران ← بشار (عبر المشرية)', fr: 'Oran → Béchar (via Mécheria)' },
      },
      {
        trainNumber: 'REG-508',
        departureTime: '15:00',
        arrivalTime: '18:20',
        type: { ar: 'قسنطينة ← بسكرة (الأوراس)', fr: 'Constantine → Biskra (Aurès)' },
      },
    ],
    sourceNote: {
      ar: 'ينصح بالحضور قبل 45 دقيقة في رحلات النوم الصحراوية وتأكيد أيام التشغيل قبل اقتناء التذكرة.',
      fr: 'Présentez-vous 45 min avant le départ pour les rames couchettes et confirmez les jours de circulation en gare.',
    },
  },
  {
    id: 'annaba-tunis',
    code: 'INT-11',
    networkGroup: 'international',
    title: {
      ar: 'جدول الخط الدولي: عنابة ↔ سوق أهراس ↔ تونس العاصمة',
      fr: 'Fiche Horaire Internationale : Annaba ↔ Souk Ahras ↔ Tunis',
    },
    corridorSummary: {
      ar: 'القطار المغاربي الدولي المباشر عبر الحدود الجزائرية التونسية.',
      fr: 'Train international transfrontalier reliant Annaba à Tunis Ville.',
    },
    operatingDays: {
      ar: 'الأحد، الثلاثاء، الخميس (ذهابا من عنابة)',
      fr: 'Dimanche, Mardi et Jeudi (au départ d\'Annaba)',
    },
    stations: [
      { ar: 'عنابة', fr: 'Annaba' },
      { ar: 'سوق أهراس', fr: 'Souk Ahras' },
      { ar: 'غار الدماء', fr: 'Ghardimaou' },
      { ar: 'جندوبة', fr: 'Jendouba' },
      { ar: 'باجة', fr: 'Béja' },
      { ar: 'تونس العاصمة', fr: 'Tunis Ville' },
    ],
    departures: [
      {
        trainNumber: 'INT-11',
        departureTime: '09:00',
        arrivalTime: '18:27',
        type: { ar: 'القطار الدولي المغاربي', fr: 'Train International Maghreb' },
        note: { ar: 'يشمل إجراءات الجوازات في سوق أهراس وغار الدماء', fr: 'Inclut le contrôle douanier à Souk Ahras et Ghardimaou' },
      },
    ],
    sourceNote: {
      ar: 'يشترط جواز سفر ساري الصلاحية ووثائق العبور الحدودي؛ وتقبل بطاقة وقار للمتقاعدين بتخفيض 50%.',
      fr: 'Passeport valide exigé pour le passage frontalier ; la carte Waqar ouvre droit à 50 % de réduction.',
    },
  },
];

export const SNTF_CORRIDOR_NOTES: SntfCorridorDiagramNote[] = [
  {
    lineTitle: {
      ar: 'ضاحية الجزائر (الجزائر - الحراش - الثنية / العفرون)',
      fr: 'Banlieue d\'Alger (Alger - El Harrach - Thénia / El Affroun)',
    },
    documentedStops: [
      { ar: 'الجزائر الوسطى', fr: 'Alger Centre' },
      { ar: 'أغا', fr: 'Agha' },
      { ar: 'الحراش', fr: 'El Harrach' },
      { ar: 'باب الزوار', fr: 'Bab Ezzouar' },
      { ar: 'رويبة', fr: 'Rouiba' },
      { ar: 'الرغاية', fr: 'Réghaïa' },
      { ar: 'بومرداس', fr: 'Boumerdès' },
      { ar: 'الثنية', fr: 'Thénia' },
      { ar: 'بئر توتة', fr: 'Birtouta' },
      { ar: 'بوفاريك', fr: 'Boufarik' },
      { ar: 'البليدة', fr: 'Blida' },
      { ar: 'العفرون', fr: 'El Affroun' },
    ],
    diagramOnlyHalts: [
      { ar: 'الورشات', fr: 'Les Ateliers' },
      { ar: 'خروبة', fr: 'Caroubier' },
      { ar: 'وادي السمار', fr: 'Oued Smar' },
      { ar: 'الدار البيضاء', fr: 'Dar El Beïda' },
      { ar: 'قورصو', fr: 'Corso' },
      { ar: 'تيجلابين', fr: 'Tidjelabine' },
    ],
  },
  {
    lineTitle: {
      ar: 'محور الشرق والهضاب (آغا - البويرة - برج بوعريريج - قسنطينة)',
      fr: 'Axe Est & Hauts Plateaux (Agha - Bouira - BBA - Constantine)',
    },
    documentedStops: [
      { ar: 'أغا', fr: 'Agha' },
      { ar: 'الثنية', fr: 'Thénia' },
      { ar: 'الأخضرية', fr: 'Lakhdaria' },
      { ar: 'البويرة', fr: 'Bouira' },
      { ar: 'المنصورة', fr: 'Mansourah' },
      { ar: 'برج بوعريريج', fr: 'Bordj Bou Arréridj' },
      { ar: 'سطيف', fr: 'Sétif' },
      { ar: 'قسنطينة', fr: 'Constantine' },
    ],
    diagramOnlyHalts: [
      { ar: 'قادرية', fr: 'Kadiria' },
      { ar: 'عمر محطة', fr: 'Omar Gare' },
      { ar: 'بشيلول', fr: 'Bechloul' },
      { ar: 'العجيبية', fr: 'El Adjiba' },
      { ar: 'العشير', fr: 'El Achir' },
      { ar: 'العلمة', fr: 'El Eulma' },
    ],
  },
];
