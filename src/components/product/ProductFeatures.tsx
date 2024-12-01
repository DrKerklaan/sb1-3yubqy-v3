interface ProductFeaturesProps {
  features: string[];
}

export default function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <div>
      <h2 className="font-playfair text-xl font-semibold text-brand-text mb-4">
        Key Features
      </h2>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center font-avenir text-brand-text">
            <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}