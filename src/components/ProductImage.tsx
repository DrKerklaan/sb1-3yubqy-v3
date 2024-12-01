interface ProductImageProps {
  imageUrl: string;
  name: string;
}

export default function ProductImage({ imageUrl, name }: ProductImageProps) {
  return (
    <div className="aspect-square bg-gray-50 rounded-lg p-8">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-contain"
      />
    </div>
  );
}