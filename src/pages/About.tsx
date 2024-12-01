import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-brand-text mb-8">
              Created by an expert in care
            </h1>
            
            <div className="space-y-8 font-avenir text-lg text-brand-text">
              <p>
                With over 20 years of clinical experience, Dr. Kerklaan has helped countless patients manage common issues like pain, stress, and poor sleep. This hands-on experience is the inspiration behind Dr. Kerklaan Therapeutics—a pioneering wellness brand designed to address the exact problems people saw him for in his clinic.
              </p>
              
              <div className="aspect-[16/9] bg-gray-50 rounded-lg overflow-hidden mb-8">
                <img
                  src="https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNGVHR2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--65cba314801bbd50f869a963d952d703000d5e87/dr-kerklaan.jpg"
                  alt="Dr. Kerklaan at a product showcase event"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p>
                Proudly Canadian and launched in 2017, our wellness products are purpose-built formulas targeting relief and better sleep, powered by plant-based cannabinoids. We make wellness solutions that help you <strong>Live Better</strong> and <strong>Feel Better</strong>.
              </p>
              
              <p>
                But we didn't stop there. Our advanced absorption technology—backed by 15 years of foundational university research — naturally enhances our products' effects, helping your body absorb more, at a faster rate, with a more predictable onset.
              </p>

              <p>
                Looking for better sleep? Need relief? We're proud to be the products customers consistently choose and confidently recommend to family and friends. Because, when it comes to your health and wellness, we believe in effective solutions you can trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}