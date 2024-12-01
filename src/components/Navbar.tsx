import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && 
          buttonRef.current && 
          !menuRef.current.contains(event.target as Node) && 
          !buttonRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsProductsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 200);
  };

  const handleProductClick = () => {
    setIsProductsOpen(false);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed w-full top-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-text p-2 -mr-2"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <div className="hidden sm:flex sm:space-x-8">
            <div className="relative group">
              <button
                ref={buttonRef}
                className="font-avenir text-brand-text hover:opacity-80 px-3 py-2 text-sm font-medium transition-opacity inline-flex items-center"
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Products
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                ref={menuRef}
                className={`absolute left-0 mt-0 w-64 bg-white rounded-lg shadow-lg py-4 transition-all duration-200 ${
                  isProductsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="px-4 mb-3">
                  <h3 className="font-playfair text-sm font-semibold text-brand-text">Edibles</h3>
                  <div className="mt-2 pl-2">
                    <Link 
                      to="/products/rest-gummies" 
                      className="block py-1.5 text-sm text-[#4B0082] hover:opacity-80 font-playfair"
                      onClick={handleProductClick}
                    >
                      rest. THC:CBN Gummies
                    </Link>
                    <Link 
                      to="/products/relief-gummies" 
                      className="block py-1.5 text-sm text-brand-red hover:opacity-80 font-playfair"
                      onClick={handleProductClick}
                    >
                      relief. THC:CBD Gummies
                    </Link>
                  </div>
                </div>
                
                <div className="px-4 border-t border-gray-100 pt-3">
                  <h3 className="font-playfair text-sm font-semibold text-brand-text">Topicals</h3>
                  <div className="mt-2 pl-2">
                    <Link 
                      to="/products/relief-cream" 
                      className="block py-1.5 text-sm text-brand-red hover:opacity-80 font-playfair"
                      onClick={handleProductClick}
                    >
                      relief. THC:CBD Transdermal Cream
                    </Link>
                    <Link 
                      to="/products/relief-stick" 
                      className="block py-1.5 text-sm text-brand-red hover:opacity-80 font-playfair"
                      onClick={handleProductClick}
                    >
                      relief. THC:CBD Stick
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link 
              to="/about" 
              className="font-avenir text-brand-text hover:opacity-80 px-3 py-2 text-sm font-medium transition-opacity"
              onClick={() => window.scrollTo(0, 0)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="font-avenir text-brand-text hover:opacity-80 px-3 py-2 text-sm font-medium transition-opacity"
              onClick={() => window.scrollTo(0, 0)}
            >
              Contact
            </Link>
          </div>
        </div>

        {isOpen && (
          <div className="sm:hidden py-2 pb-4">
            <div className="space-y-1">
              <div className="space-y-2">
                <div className="px-4 py-2">
                  <h3 className="font-playfair text-sm font-semibold text-brand-text">Products</h3>
                </div>
                
                <div className="pl-6 space-y-2">
                  <div className="px-4 py-1">
                    <h4 className="text-xs font-medium text-brand-text/60 uppercase tracking-wider">Edibles</h4>
                  </div>
                  <Link 
                    to="/products/rest-gummies"
                    className="block px-6 py-2 text-sm text-[#4B0082] hover:opacity-80 font-playfair"
                    onClick={handleProductClick}
                  >
                    rest. THC:CBN Gummies
                  </Link>
                  <Link 
                    to="/products/relief-gummies"
                    className="block px-6 py-2 text-sm text-brand-red hover:opacity-80 font-playfair"
                    onClick={handleProductClick}
                  >
                    relief. THC:CBD Gummies
                  </Link>
                </div>
                
                <div className="pl-6 space-y-2">
                  <div className="px-4 py-1">
                    <h4 className="text-xs font-medium text-brand-text/60 uppercase tracking-wider">Topicals</h4>
                  </div>
                  <div className="space-y-2">
                    <Link 
                      to="/products/relief-cream"
                      className="block px-6 py-2 text-sm text-brand-red hover:opacity-80 font-playfair"
                      onClick={handleProductClick}
                    >
                      relief. THC:CBD Transdermal Cream
                    </Link>
                    <Link 
                      to="/products/relief-stick"
                      className="block px-6 py-2 text-sm text-brand-red hover:opacity-80 font-playfair"
                      onClick={handleProductClick}
                    >
                      relief. THC:CBD Stick
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/about" 
                className="font-avenir text-brand-text hover:bg-gray-50 px-4 py-3 text-base font-medium block transition-colors rounded-md"
                onClick={handleProductClick}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="font-avenir text-brand-text hover:bg-gray-50 px-4 py-3 text-base font-medium block transition-colors rounded-md"
                onClick={handleProductClick}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}