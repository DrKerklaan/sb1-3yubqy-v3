import Product from './Product';

const products = [
  {
    id: '1',
    name: 'rest. THC:CBN Gummies',
    imageUrl: "https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMWVhR2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--ddec5ecea093420dca37ded19f272bc01c45e2b4/dr-kerklaan-therapeutics-rest-thc-cbn-sleep-gummies.png"
  },
  {
    id: '2',
    name: 'relief. THC:CBD Gummies',
    imageUrl: "https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeDZER2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--d294f157a9dad80f1990d6aa91f8512995cfac59/dr-kerklaan-therapeutics-product-placeholder.png"
  },
  {
    id: '3',
    name: 'relief. THC:CBD Transdermal Cream',
    imageUrl: "https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeWVjR2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--9bf796c55c612734679e0ec688ec03b6c2e76c78/dr-kerklaan-therapeutics-relief-thc-cbd-transdermal-cream.png"
  },
  {
    id: '4',
    name: 'relief. THC:CBD Stick',
    imageUrl: "https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMm1kR2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--950163c6744cec9ef92cb8041d05086d3efaae87/dr-kerklaan-therapeutics-relief-thc-cbd-stick.png"
  }
];

export default function ProductGrid() {
  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl text-brand-text mb-6">
            Our Products
          </h2>
          <p className="font-avenir text-base sm:text-lg text-[#211645] leading-relaxed">
            Since launching in California in 2017, it's always been our goal, as fellow Canadians, to bring our trusted wellness solutions "home" to help support your wellbeing. From relief to rest, we're here to help you feel better and live better.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}