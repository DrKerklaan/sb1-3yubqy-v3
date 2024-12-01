export default function HeroSection() {
  return (
    <div className="relative min-h-[70vh] flex items-center">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 leading-tight">
              Doctor-Designed<br />
              Wellness Solutions
            </h1>
            <p className="font-avenir text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mb-6 sm:mb-8 leading-relaxed">
              Helping Canadians Live Better <em>and</em> Feel Better.
            </p>
            <a
              href="#learn-more"
              className="font-avenir inline-block bg-white text-brand-text px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-colors text-base sm:text-lg border border-brand-text"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}