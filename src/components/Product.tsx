import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductDescription, getProductSlug } from '../utils/productUtils';
import ProductIcon from './ProductIcon';

interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
}

export default function Product({ id, name, imageUrl }: ProductProps) {
  const [imageError, setImageError] = useState(false);
  const description = getProductDescription(id);
  const productSlug = getProductSlug(id);

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col">
      <Link 
        to={`/products/${productSlug}`}
        className="block"
        onClick={() => window.scrollTo(0, 0)}
      >
        <div className="aspect-square bg-gray-50 overflow-hidden relative p-4 group">
          <ProductIcon name={name} id={id} />
          {!imageError ? (
            <img
              src={imageUrl}
              alt={`Dr. Kerklaan Therapeutics - ${name}`}
              className="w-full h-full object-contain object-center transition-transform duration-300 ease-in-out group-hover:scale-110"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <span className="text-sm">Image not available</span>
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className={`font-playfair text-lg font-semibold ${id === '1' ? 'text-[#4B0082]' : 'text-brand-red'} text-center mb-2`}>
          {name}
        </h3>
        <p className="text-sm text-brand-text text-center mb-6 line-clamp-2">
          {description}
        </p>
        <div className="mt-auto flex justify-center">
          <Link
            to={`/products/${productSlug}`}
            className="font-avenir inline-block bg-white border border-brand-text text-brand-text px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
            onClick={() => window.scrollTo(0, 0)}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}