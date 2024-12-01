import { getProductBgColor } from '../utils/productUtils';

interface ProductIconProps {
  name: string;
  id: string;
}

export default function ProductIcon({ name, id }: ProductIconProps) {
  const firstWord = name.split('.')[0];
  const bgColorClass = getProductBgColor(id);
  
  return (
    <div className={`absolute top-6 left-6 z-10 ${bgColorClass} rounded-full w-9 h-9 flex items-center justify-center shadow-sm`}>
      <span className="font-playfair text-xs font-semibold text-white">
        {firstWord}
      </span>
    </div>
  );
}