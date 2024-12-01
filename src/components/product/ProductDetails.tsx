interface ProductDetailsProps {
  details: string;
}

export default function ProductDetails({ details }: ProductDetailsProps) {
  return (
    <div>
      <h2 className="font-playfair text-xl font-semibold text-brand-text mb-4">
        Product Details
      </h2>
      <p className="font-avenir text-brand-text">
        {details}
      </p>
    </div>
  );
}