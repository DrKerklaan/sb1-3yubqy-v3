export interface Product {
  id: string;
  name: string;
  description: string;
  details: string;
  imageUrl: string;
  color: string;
  features: string[];
  ingredients: string[];
}

export const products: Record<string, Product> = {
  'rest-gummies': {
    id: 'rest-gummies',
    name: 'rest. THC:CBN Gummies',
    description: "Fast-acting gummies to help you unwind and drift into a restful night's sleep.",
    details: "Our rest. THC:CBN Gummies are expertly formulated to help you achieve a better night's sleep. Each gummy combines the perfect ratio of THC and CBN, working in harmony to promote relaxation and support your natural sleep cycle.",
    imageUrl: "https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMWVhR2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--ddec5ecea093420dca37ded19f272bc01c45e2b4/dr-kerklaan-therapeutics-rest-thc-cbn-sleep-gummies.png",
    color: 'text-[#4B0082]',
    features: [
      'Fast-acting formula',
      'Natural ingredients',
      'Doctor-formulated',
      'Precise dosing',
      'Consistent results'
    ],
    ingredients: [
      'THC',
      'CBN',
      'Natural flavors',
      'Organic ingredients'
    ]
  },
  'relief-gummies': {
    id: 'relief-gummies',
    name: 'relief. THC:CBD Gummies',
    description: "Quick, effective relief in a gummy to help you feel better when you need it most.",
    details: "Our relief. THC:CBD Gummies are expertly formulated to provide fast-acting relief when you need it most. Each gummy combines the perfect ratio of THC and CBD, working together to help you feel better.",
    imageUrl: "https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeDZER2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--d294f157a9dad80f1990d6aa91f8512995cfac59/dr-kerklaan-therapeutics-product-placeholder.png",
    color: 'text-brand-red',
    features: [
      'Fast-acting formula',
      'Natural ingredients',
      'Doctor-formulated',
      'Precise dosing',
      'Consistent results'
    ],
    ingredients: [
      'THC',
      'CBD',
      'Natural flavors',
      'Organic ingredients'
    ]
  },
  'relief-cream': {
    id: 'relief-cream',
    name: 'relief. THC:CBD Transdermal Cream',
    description: "A fast-absorbing, non-greasy cream that targets discomfort and helps you feel better, faster.",
    details: "Our relief. THC:CBD Transdermal Cream is expertly formulated to provide targeted relief where you need it most.",
    imageUrl: "https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeWVjR2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--9bf796c55c612734679e0ec688ec03b6c2e76c78/dr-kerklaan-therapeutics-relief-thc-cbd-transdermal-cream.png",
    color: 'text-brand-red',
    features: [
      'Fast-absorbing formula',
      'Non-greasy',
      'Doctor-formulated',
      'Targeted relief',
      'Enhanced delivery system'
    ],
    ingredients: [
      'THC',
      'CBD',
      'Natural ingredients',
      'Essential oils'
    ]
  },
  'relief-stick': {
    id: 'relief-stick',
    name: 'relief. THC:CBD Stick',
    description: "A convenient mess-free stick designed to dig into muscles for targeted, on-the-go relief.",
    details: "Our relief. THC:CBD Stick is expertly formulated to provide targeted relief where you need it most.",
    imageUrl: "https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMm1kR2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--950163c6744cec9ef92cb8041d05086d3efaae87/dr-kerklaan-therapeutics-relief-thc-cbd-stick.png",
    color: 'text-brand-red',
    features: [
      'Convenient application',
      'Mess-free',
      'Doctor-formulated',
      'Targeted relief',
      'Enhanced delivery system'
    ],
    ingredients: [
      'THC',
      'CBD',
      'Natural ingredients',
      'Essential oils'
    ]
  }
};