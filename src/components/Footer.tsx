import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#4E4E4F] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Company Links */}
          <div>
            <h3 className="font-playfair text-white text-base font-semibold mb-3">Dr. Kerklaan Therapeutics</h3>
            <ul className="space-y-0">
              <li>
                <Link to="/about" className="font-avenir text-white/90 text-xs hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-avenir text-white/90 text-xs hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-playfair text-white text-base font-semibold mb-3">Products</h3>
            <ul className="space-y-0">
              <li>
                <Link 
                  to="/products/rest-gummies" 
                  className="font-avenir text-white/90 text-xs hover:text-white transition-colors whitespace-nowrap"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  rest. THC:CBN Gummies
                </Link>
              </li>
              <li>
                <Link 
                  to="/products/relief-gummies" 
                  className="font-avenir text-white/90 text-xs hover:text-white transition-colors whitespace-nowrap"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  relief. THC:CBD Gummies
                </Link>
              </li>
              <li>
                <Link 
                  to="/products/relief-cream" 
                  className="font-avenir text-white/90 text-xs hover:text-white transition-colors whitespace-nowrap"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  relief. THC:CBD Transdermal Cream
                </Link>
              </li>
              <li>
                <Link 
                  to="/products/relief-stick" 
                  className="font-avenir text-white/90 text-xs hover:text-white transition-colors whitespace-nowrap"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  relief. THC:CBD Stick
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-playfair text-white text-base font-semibold mb-3">Information</h3>
            <address className="not-italic space-y-0">
              <a href="mailto:hellodrk@drkerklaan.com" className="font-avenir text-white/90 text-xs hover:text-white transition-colors block">
                hellodrk@drkerklaan.com
              </a>
              <a href="tel:+18009833556" className="font-avenir text-white/90 text-xs hover:text-white transition-colors block">
                800-983-3556
              </a>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="font-avenir text-white/90 text-xs text-center">
            © {new Date().getFullYear()} Dr. Kerklaan Therapeutics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}