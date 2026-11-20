import { Language } from './types';

// ==========================================
// 1. TAFQEET / NUMBER TO WORDS (DZD & CENTIMES)
// ==========================================

const AR_ONES = ['', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة'];
const AR_TEENS = ['عشرة', 'أحد عشر', 'اثنا عشر', 'ثلاثة عشر', 'أربعة عشر', 'خمسة عشر', 'ستة عشر', 'سبعة عشر', 'ثمانية عشر', 'تسعة عشر'];
const AR_TENS = ['', 'عشرة', 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'];
const AR_HUNDREDS = ['', 'مائة', 'مئتان', 'ثلاثمائة', 'أربعمائة', 'خمسمائة', 'ستمائة', 'سبعمائة', 'ثمانمائة', 'تسعمائة'];

function convertHundredsAr(n: number): string {
  let str = '';
  const c = Math.floor(n / 100);
  const r = n % 100;
  if (c > 0) str += AR_HUNDREDS[c];
  if (r > 0) {
    if (str) str += ' و';
    if (r < 10) {
      str += AR_ONES[r];
    } else if (r < 20) {
      str += AR_TEENS[r - 10];
    } else {
      const u = r % 10;
      const d = Math.floor(r / 10);
      if (u > 0) {
        str += AR_ONES[u] + ' و' + AR_TENS[d];
      } else {
        str += AR_TENS[d];
      }
    }
  }
  return str;
}

export function tafqeetArabic(amount: number): string {
  if (amount === 0) return 'صفر دينار جزائري';
  const integerPart = Math.floor(amount);
  const decimalPart = Math.round((amount - integerPart) * 100);

  if (integerPart > 999999999) {
    return `${amount.toLocaleString('fr-DZ')} دينار جزائري`;
  }

  let words = '';
  const millions = Math.floor(integerPart / 1000000);
  const thousands = Math.floor((integerPart % 1000000) / 1000);
  const remainder = integerPart % 1000;

  if (millions > 0) {
    if (millions === 1) words += 'مليون';
    else if (millions === 2) words += 'مليونان';
    else if (millions >= 3 && millions <= 10) words += `${convertHundredsAr(millions)} ملايين`;
    else words += `${convertHundredsAr(millions)} مليون`;
  }

  if (thousands > 0) {
    if (words) words += ' و';
    if (thousands === 1) words += 'ألف';
    else if (thousands === 2) words += 'ألفان';
    else if (thousands >= 3 && thousands <= 10) words += `${convertHundredsAr(thousands)} آلاف`;
    else words += `${convertHundredsAr(thousands)} ألف`;
  }

  if (remainder > 0) {
    if (words) words += ' و';
    words += convertHundredsAr(remainder);
  }

  let result = `فقط ${words} دينار جزائري`;

  if (decimalPart > 0) {
    result += ` و${convertHundredsAr(decimalPart)} سنتيما`;
  }

  result += ' لا غير';
  return result;
}

// French Number to words
const FR_UNITS = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
const FR_TEENS = ['dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
const FR_TENS = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingts', 'quatre-vingt-dix'];

function convertChunkFr(n: number): string {
  let s = '';
  const h = Math.floor(n / 100);
  const r = n % 100;
  if (h > 0) {
    if (h === 1) s += 'cent';
    else s += FR_UNITS[h] + ' cent';
  }
  if (r > 0) {
    if (s) s += ' ';
    if (r < 10) s += FR_UNITS[r];
    else if (r < 20) s += FR_TEENS[r - 10];
    else if (r < 70) {
      const u = r % 10;
      const t = Math.floor(r / 10);
      s += FR_TENS[t] + (u === 1 ? ' et un' : u > 1 ? '-' + FR_UNITS[u] : '');
    } else if (r < 80) {
      const rem = r - 60;
      s += 'soixante' + (rem === 11 ? ' et onze' : '-' + FR_TEENS[rem - 10]);
    } else {
      const rem = r - 80;
      s += 'quatre-vingt' + (rem > 0 ? (rem < 10 ? '-' + FR_UNITS[rem] : '-' + FR_TEENS[rem - 10]) : 's');
    }
  }
  return s;
}

export function numberToWordsFrench(amount: number): string {
  if (amount === 0) return 'Zéro dinar algérien';
  const integerPart = Math.floor(amount);
  const decimalPart = Math.round((amount - integerPart) * 100);

  let parts: string[] = [];
  const millions = Math.floor(integerPart / 1000000);
  const thousands = Math.floor((integerPart % 1000000) / 1000);
  const remainder = integerPart % 1000;

  if (millions > 0) {
    parts.push(millions === 1 ? 'un million' : `${convertChunkFr(millions)} millions`);
  }
  if (thousands > 0) {
    parts.push(thousands === 1 ? 'mille' : `${convertChunkFr(thousands)} mille`);
  }
  if (remainder > 0) {
    parts.push(convertChunkFr(remainder));
  }

  let text = parts.join(' ');
  // Capitalize first letter
  text = text.charAt(0).toUpperCase() + text.slice(1);
  text += ' dinars algériens';

  if (decimalPart > 0) {
    text += ` et ${convertChunkFr(decimalPart)} centimes`;
  }
  return text;
}

// ==========================================
// 2. ALGERIAN SALARY CALCULATOR (CNAS 9% & IRG BAREME)
// ==========================================

export interface SalaryCalculationResult {
  baseSalary: number;
  grossSalary: number; // Salaire Brut
  cnasDeduction: number; // 9%
  taxableSalary: number; // Salaire Imposable
  irgRaw: number;
  irgAbatement: number;
  irgNet: number;
  netSalary: number; // Salaire Net à payer
}

export function calculateAlgerianSalary({
  baseSalary,
  bonuses = 0,
  allowances = 0,
}: {
  baseSalary: number;
  bonuses?: number;
  allowances?: number;
}): SalaryCalculationResult {
  const grossSalary = baseSalary + bonuses + allowances;
  const cnasDeduction = Math.round(grossSalary * 0.09);
  const taxableSalary = grossSalary - cnasDeduction;

  // Algerian Progressive IRG Scale (Loi de Finances)
  let irgRaw = 0;
  if (taxableSalary <= 20000) {
    irgRaw = 0;
  } else {
    // Tranche 1: 0 to 20,000 -> 0%
    // Tranche 2: 20,001 to 40,000 -> 23%
    if (taxableSalary > 20000) {
      const t2 = Math.min(taxableSalary, 40000) - 20000;
      irgRaw += t2 * 0.23;
    }
    // Tranche 3: 40,001 to 80,000 -> 27%
    if (taxableSalary > 40000) {
      const t3 = Math.min(taxableSalary, 80000) - 40000;
      irgRaw += t3 * 0.27;
    }
    // Tranche 4: 80,001 to 160,000 -> 30%
    if (taxableSalary > 80000) {
      const t4 = Math.min(taxableSalary, 160000) - 80000;
      irgRaw += t4 * 0.30;
    }
    // Tranche 5: 160,001 to 320,000 -> 33%
    if (taxableSalary > 160000) {
      const t5 = Math.min(taxableSalary, 320000) - 160000;
      irgRaw += t5 * 0.33;
    }
    // Tranche 6: > 320,000 -> 35%
    if (taxableSalary > 320000) {
      const t6 = taxableSalary - 320000;
      irgRaw += t6 * 0.35;
    }
  }

  // Legal abatements:
  // Salaires < 30,000 DZD sont totalement exonérés d'IRG
  let irgNet = 0;
  let irgAbatement = 0;

  if (taxableSalary <= 30000) {
    irgNet = 0;
    irgAbatement = irgRaw;
  } else if (taxableSalary <= 35000) {
    // Abattement spécifique dégressif
    const abattementPrincipal = Math.min(Math.max(irgRaw * 0.40, 1000), 1500);
    const difference = 35000 - taxableSalary;
    const abattementSupplementaire = difference * 0.27;
    irgAbatement = Math.min(irgRaw, abattementPrincipal + abattementSupplementaire);
    irgNet = Math.max(0, Math.round(irgRaw - irgAbatement));
  } else {
    // Abattement légal général de 40% (min 1,000 DZD, max 1,500 DZD)
    irgAbatement = Math.min(Math.max(Math.round(irgRaw * 0.40), 1000), 1500);
    irgNet = Math.max(0, Math.round(irgRaw - irgAbatement));
  }

  const netSalary = Math.round(taxableSalary - irgNet);

  return {
    baseSalary,
    grossSalary,
    cnasDeduction,
    taxableSalary,
    irgRaw: Math.round(irgRaw),
    irgAbatement: Math.round(irgAbatement),
    irgNet,
    netSalary,
  };
}

// ==========================================
// 3. SONELGAZ BILL CALCULATOR (ELECTRICITY & GAS)
// ==========================================

export interface SonelgazBillResult {
  elecKwh: number;
  gasTherms: number;
  elecTranches: { tranche: number; kwh: number; rate: number; amount: number; tvaRate: number }[];
  gasTranches: { tranche: number; therms: number; rate: number; amount: number; tvaRate: number }[];
  totalElecHt: number;
  totalGasHt: number;
  fixedElecFee: number;
  fixedGasFee: number;
  tva9: number;
  tva19: number;
  stampDuty: number;
  grandTotal: number;
}

export function calculateSonelgazBill(elecKwh: number, gasTherms: number): SonelgazBillResult {
  // Electricity Tranches (Sonelgaz Tarif 54M)
  // T1: 0 - 125 kWh @ 1.7787 (TVA 9%)
  // T2: 126 - 250 kWh @ 4.1789 (TVA 9%)
  // T3: 251 - 399 kWh @ 4.8109 (TVA 19%)
  // T4: >= 400 kWh @ 5.4799 (TVA 19%)
  const elecTranches = [];
  let remElec = elecKwh;

  const eT1 = Math.min(remElec, 125);
  elecTranches.push({ tranche: 1, kwh: eT1, rate: 1.7787, amount: eT1 * 1.7787, tvaRate: 0.09 });
  remElec -= eT1;

  const eT2 = Math.min(Math.max(0, remElec), 125);
  elecTranches.push({ tranche: 2, kwh: eT2, rate: 4.1789, amount: eT2 * 4.1789, tvaRate: 0.09 });
  remElec -= eT2;

  const eT3 = Math.min(Math.max(0, remElec), 150);
  elecTranches.push({ tranche: 3, kwh: eT3, rate: 4.8109, amount: eT3 * 4.8109, tvaRate: 0.19 });
  remElec -= eT3;

  const eT4 = Math.max(0, remElec);
  elecTranches.push({ tranche: 4, kwh: eT4, rate: 5.4799, amount: eT4 * 5.4799, tvaRate: 0.19 });

  // Gas Tranches (Tarif 23M)
  // T1: 0 - 1125 Th @ 0.1682 (TVA 9%)
  // T2: 1126 - 2500 Th @ 0.3245 (TVA 9%)
  // T3: 2501 - 7500 Th @ 0.4005 (TVA 19%)
  // T4: >= 7501 Th @ 0.4599 (TVA 19%)
  const gasTranches = [];
  let remGas = gasTherms;

  const gT1 = Math.min(remGas, 1125);
  gasTranches.push({ tranche: 1, therms: gT1, rate: 0.1682, amount: gT1 * 0.1682, tvaRate: 0.09 });
  remGas -= gT1;

  const gT2 = Math.min(Math.max(0, remGas), 1375);
  gasTranches.push({ tranche: 2, therms: gT2, rate: 0.3245, amount: gT2 * 0.3245, tvaRate: 0.09 });
  remGas -= gT2;

  const gT3 = Math.min(Math.max(0, remGas), 5000);
  gasTranches.push({ tranche: 3, therms: gT3, rate: 0.4005, amount: gT3 * 0.4005, tvaRate: 0.19 });
  remGas -= gT3;

  const gT4 = Math.max(0, remGas);
  gasTranches.push({ tranche: 4, therms: gT4, rate: 0.4599, amount: gT4 * 0.4599, tvaRate: 0.19 });

  const totalElecHt = elecTranches.reduce((sum, t) => sum + t.amount, 0);
  const totalGasHt = gasTranches.reduce((sum, t) => sum + t.amount, 0);

  const fixedElecFee = 90.50; // Prime fixe électricité
  const fixedGasFee = 85.00; // Prime fixe gaz

  // TVA calculation
  let tva9Base = (elecTranches[0].amount + elecTranches[1].amount) + (gasTranches[0].amount + gasTranches[1].amount) + fixedElecFee + fixedGasFee;
  let tva19Base = (elecTranches[2].amount + elecTranches[3].amount) + (gasTranches[2].amount + gasTranches[3].amount);

  const tva9 = tva9Base * 0.09;
  const tva19 = tva19Base * 0.19;
  const stampDuty = 40.00; // Droit de timbre

  const grandTotal = Math.round((totalElecHt + totalGasHt + fixedElecFee + fixedGasFee + tva9 + tva19 + stampDuty) * 100) / 100;

  return {
    elecKwh,
    gasTherms,
    elecTranches,
    gasTranches,
    totalElecHt: Math.round(totalElecHt * 100) / 100,
    totalGasHt: Math.round(totalGasHt * 100) / 100,
    fixedElecFee,
    fixedGasFee,
    tva9: Math.round(tva9 * 100) / 100,
    tva19: Math.round(tva19 * 100) / 100,
    stampDuty,
    grandTotal,
  };
}

// ==========================================
// 4. CURRENCY RATES & CONVERTER (BANK VS SQUARE)
// ==========================================

export interface CurrencyRate {
  code: string;
  name: { ar: string; fr: string };
  officialBuy: number;
  officialSell: number;
  squareBuy: number;
  squareSell: number;
  symbol: string;
}

export const ALGERIAN_CURRENCIES: CurrencyRate[] = [
  { code: 'EUR', name: { ar: 'يورو أوروبي', fr: 'Euro' }, officialBuy: 144.20, officialSell: 144.25, squareBuy: 247.00, squareSell: 249.00, symbol: '€' },
  { code: 'USD', name: { ar: 'دولار أمريكي', fr: 'Dollar Américain' }, officialBuy: 133.50, officialSell: 133.55, squareBuy: 228.00, squareSell: 230.00, symbol: '$' },
  { code: 'GBP', name: { ar: 'جنيه إسترليني', fr: 'Livre Sterling' }, officialBuy: 172.10, officialSell: 172.18, squareBuy: 288.00, squareSell: 292.00, symbol: '£' },
  { code: 'CAD', name: { ar: 'دولار كندي', fr: 'Dollar Canadien' }, officialBuy: 96.80, officialSell: 96.85, squareBuy: 162.00, squareSell: 164.00, symbol: 'C$' },
  { code: 'SAR', name: { ar: 'ريال سعودي', fr: 'Riyal Saoudien' }, officialBuy: 35.60, officialSell: 35.62, squareBuy: 60.50, squareSell: 61.20, symbol: 'SAR' },
  { code: 'AED', name: { ar: 'درهم إماراتي', fr: 'Dirham Émirati' }, officialBuy: 36.35, officialSell: 36.38, squareBuy: 61.80, squareSell: 62.50, symbol: 'AED' },
  { code: 'TRY', name: { ar: 'ليرة تركية', fr: 'Livre Turque' }, officialBuy: 3.85, officialSell: 3.88, squareBuy: 6.20, squareSell: 6.50, symbol: '₺' },
  { code: 'CHF', name: { ar: 'فرنك سويسري', fr: 'Franc Suisse' }, officialBuy: 153.20, officialSell: 153.30, squareBuy: 254.00, squareSell: 257.00, symbol: 'CHF' },
];

export function convertAlgerianCurrency(
  amount: number,
  currencyCode: string,
  direction: 'from_dzd' | 'to_dzd',
  marketType: 'official' | 'square'
): { result: number; rate: number } {
  const currency = ALGERIAN_CURRENCIES.find((c) => c.code === currencyCode) || ALGERIAN_CURRENCIES[0];
  const rate = marketType === 'official' ? currency.officialSell : currency.squareSell;

  if (direction === 'to_dzd') {
    return { result: Math.round(amount * rate * 100) / 100, rate };
  } else {
    return { result: Math.round((amount / rate) * 100) / 100, rate };
  }
}

// ==========================================
// 5. WILAYAS DISTANCES & FUEL CALCULATOR
// ==========================================

export interface WilayaDistance {
  code: number;
  name: { ar: string; fr: string };
  distFromAlgiers: number;
}

export const ALGERIA_MAIN_WILAYAS: WilayaDistance[] = [
  { code: 16, name: { ar: 'الجزائر العاصمة', fr: 'Alger' }, distFromAlgiers: 0 },
  { code: 9, name: { ar: 'البليدة', fr: 'Blida' }, distFromAlgiers: 48 },
  { code: 35, name: { ar: 'بومرداس', fr: 'Boumerdès' }, distFromAlgiers: 50 },
  { code: 42, name: { ar: 'تيبازة', fr: 'Tipasa' }, distFromAlgiers: 70 },
  { code: 15, name: { ar: 'تيزي وزو', fr: 'Tizi Ouzou' }, distFromAlgiers: 100 },
  { code: 10, name: { ar: 'البويرة', fr: 'Bouira' }, distFromAlgiers: 120 },
  { code: 26, name: { ar: 'المدية', fr: 'Médéa' }, distFromAlgiers: 88 },
  { code: 6, name: { ar: 'بجاية', fr: 'Béjaïa' }, distFromAlgiers: 245 },
  { code: 19, name: { ar: 'سطيف', fr: 'Sétif' }, distFromAlgiers: 300 },
  { code: 25, name: { ar: 'قسنطينة', fr: 'Constantine' }, distFromAlgiers: 390 },
  { code: 23, name: { ar: 'عنابة', fr: 'Annaba' }, distFromAlgiers: 560 },
  { code: 31, name: { ar: 'وهران', fr: 'Oran' }, distFromAlgiers: 415 },
  { code: 13, name: { ar: 'تلمسان', fr: 'Tlemcen' }, distFromAlgiers: 520 },
  { code: 22, name: { ar: 'سيدي بلعباس', fr: 'Sidi Bel Abbès' }, distFromAlgiers: 440 },
  { code: 27, name: { ar: 'مستغانم', fr: 'Mostaganem' }, distFromAlgiers: 340 },
  { code: 2, name: { ar: 'الشلف', fr: 'Chlef' }, distFromAlgiers: 210 },
  { code: 7, name: { ar: 'بسكرة', fr: 'Biskra' }, distFromAlgiers: 400 },
  { code: 30, name: { ar: 'ورقلة', fr: 'Ouargla' }, distFromAlgiers: 780 },
  { code: 47, name: { ar: 'غرداية', fr: 'Ghardaïa' }, distFromAlgiers: 600 },
  { code: 8, name: { ar: 'بشار', fr: 'Béchar' }, distFromAlgiers: 960 },
  { code: 11, name: { ar: 'تمنراست', fr: 'Tamanrasset' }, distFromAlgiers: 1950 },
];

export const FUEL_PRICES_DZD = {
  gpl: { name: { ar: 'سيرغاز (GPL/C)', fr: 'GPL/C' }, pricePerLiter: 9.00 },
  gasoil: { name: { ar: 'مازوت (Gasoil)', fr: 'Gasoil' }, pricePerLiter: 29.01 },
  sansPlomb: { name: { ar: 'بنزين بدون رصاص (Essence)', fr: 'Sans Plomb' }, pricePerLiter: 45.62 },
};

// ==========================================
// 6. QIBLA DEGREES FOR ALGERIAN WILAYAS (58 WILAYAS)
// ==========================================

export interface WilayaQibla {
  code: number;
  name: { ar: string; fr: string };
  angle: number; // Angle in degrees from North
}

export const QIBLA_WILAYAS: WilayaQibla[] = [
  { code: 1, name: { ar: 'أدرار', fr: 'Adrar' }, angle: 89 },
  { code: 2, name: { ar: 'الشلف', fr: 'Chlef' }, angle: 105 },
  { code: 3, name: { ar: 'الأغواط', fr: 'Laghouat' }, angle: 104 },
  { code: 4, name: { ar: 'أم البواقي', fr: 'Oum El Bouaghi' }, angle: 114 },
  { code: 5, name: { ar: 'باتنة', fr: 'Batna' }, angle: 112 },
  { code: 6, name: { ar: 'بجاية', fr: 'Béjaïa' }, angle: 110 },
  { code: 7, name: { ar: 'بسكرة', fr: 'Biskra' }, angle: 110 },
  { code: 8, name: { ar: 'بشار', fr: 'Béchar' }, angle: 95 },
  { code: 9, name: { ar: 'البليدة', fr: 'Blida' }, angle: 107 },
  { code: 10, name: { ar: 'البويرة', fr: 'Bouira' }, angle: 108 },
  { code: 11, name: { ar: 'تمنراست', fr: 'Tamanrasset' }, angle: 78 },
  { code: 12, name: { ar: 'تبسة', fr: 'Tébessa' }, angle: 116 },
  { code: 13, name: { ar: 'تلمسان', fr: 'Tlemcen' }, angle: 100 },
  { code: 14, name: { ar: 'تيارت', fr: 'Tiaret' }, angle: 103 },
  { code: 15, name: { ar: 'تيزي وزو', fr: 'Tizi Ouzou' }, angle: 108 },
  { code: 16, name: { ar: 'الجزائر العاصمة', fr: 'Alger' }, angle: 107 },
  { code: 17, name: { ar: 'الجلفة', fr: 'Djelfa' }, angle: 105 },
  { code: 18, name: { ar: 'جيجل', fr: 'Jijel' }, angle: 112 },
  { code: 19, name: { ar: 'سطيف', fr: 'Sétif' }, angle: 111 },
  { code: 20, name: { ar: 'سعيدة', fr: 'Saïda' }, angle: 101 },
  { code: 21, name: { ar: 'سكيكدة', fr: 'Skikda' }, angle: 114 },
  { code: 22, name: { ar: 'سيدي بلعباس', fr: 'Sidi Bel Abbès' }, angle: 101 },
  { code: 23, name: { ar: 'عنابة', fr: 'Annaba' }, angle: 116 },
  { code: 24, name: { ar: 'قالمة', fr: 'Guelma' }, angle: 115 },
  { code: 25, name: { ar: 'قسنطينة', fr: 'Constantine' }, angle: 113 },
  { code: 26, name: { ar: 'المدية', fr: 'Médéa' }, angle: 106 },
  { code: 27, name: { ar: 'مستغانم', fr: 'Mostaganem' }, angle: 103 },
  { code: 28, name: { ar: 'المسيلة', fr: 'M\'Sila' }, angle: 109 },
  { code: 29, name: { ar: 'معسكر', fr: 'Mascara' }, angle: 102 },
  { code: 30, name: { ar: 'ورقلة', fr: 'Ouargla' }, angle: 103 },
  { code: 31, name: { ar: 'وهران', fr: 'Oran' }, angle: 102 },
  { code: 32, name: { ar: 'البيض', fr: 'El Bayadh' }, angle: 100 },
  { code: 33, name: { ar: 'إليزي', fr: 'Illizi' }, angle: 88 },
  { code: 34, name: { ar: 'برج بوعريريج', fr: 'BBA' }, angle: 110 },
  { code: 35, name: { ar: 'بومرداس', fr: 'Boumerdès' }, angle: 108 },
  { code: 36, name: { ar: 'الطارف', fr: 'El Tarf' }, angle: 117 },
  { code: 37, name: { ar: 'تندوف', fr: 'Tindouf' }, angle: 89 },
  { code: 38, name: { ar: 'تسمسيلت', fr: 'Tissemsilt' }, angle: 104 },
  { code: 39, name: { ar: 'الوادي', fr: 'El Oued' }, angle: 109 },
  { code: 40, name: { ar: 'خنشلة', fr: 'Khenchela' }, angle: 114 },
  { code: 41, name: { ar: 'سوق أهراس', fr: 'Souk Ahras' }, angle: 116 },
  { code: 42, name: { ar: 'تيبازة', fr: 'Tipasa' }, angle: 106 },
  { code: 43, name: { ar: 'ميلة', fr: 'Mila' }, angle: 113 },
  { code: 44, name: { ar: 'عين الدفلى', fr: 'Aïn Defla' }, angle: 105 },
  { code: 45, name: { ar: 'النعامة', fr: 'Naâma' }, angle: 98 },
  { code: 46, name: { ar: 'عين تموشنت', fr: 'Aïn Témouchent' }, angle: 101 },
  { code: 47, name: { ar: 'غرداية', fr: 'Ghardaïa' }, angle: 102 },
  { code: 48, name: { ar: 'غليزان', fr: 'Relizane' }, angle: 103 },
  { code: 49, name: { ar: 'تيميمون', fr: 'Timimoun' }, angle: 92 },
  { code: 50, name: { ar: 'برج باجي مختار', fr: 'Bordj Badji Mokhtar' }, angle: 74 },
  { code: 51, name: { ar: 'أولاد جلال', fr: 'Ouled Djellal' }, angle: 108 },
  { code: 52, name: { ar: 'بني عباس', fr: 'Béni Abbès' }, angle: 93 },
  { code: 53, name: { ar: 'إن صالح', fr: 'In Salah' }, angle: 86 },
  { code: 54, name: { ar: 'إن قزام', fr: 'In Guezzam' }, angle: 73 },
  { code: 55, name: { ar: 'تقرت', fr: 'Touggourt' }, angle: 106 },
  { code: 56, name: { ar: 'جانت', fr: 'Djanet' }, angle: 83 },
  { code: 57, name: { ar: 'المغير', fr: 'El M\'Ghair' }, angle: 108 },
  { code: 58, name: { ar: 'المنيعة', fr: 'El Meniaa' }, angle: 97 },
];
