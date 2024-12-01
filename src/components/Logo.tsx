import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  const [imageError, setImageError] = useState(false);
  
  return (
    <Link to="/" className="h-16 flex items-center">
      {!imageError ? (
        <img 
          src="https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNXlaR2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--aa6e563b79dc17d9d572bc570cf760e23836709f/Dr%20Kerklaan%20Therapeutics_Logotype_1000px.png"
          alt="Dr. Kerklaan Therapeutics" 
          className="h-[144px] w-auto object-contain"
          onError={() => setImageError(true)}
          loading="eager"
        />
      ) : (
        <span className="font-playfair text-xl font-semibold text-brand-text">
          Dr. Kerklaan
        </span>
      )}
    </Link>
  );
}