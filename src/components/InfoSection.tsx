export default function InfoSection() {
  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="max-w-xl">
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl text-brand-text mb-4">
              Feel Better, Faster.
            </h2>
            <p className="font-avenir text-lg text-brand-text leading-relaxed mb-4">
              Our products combine the best of nature and advanced science, carefully crafted to deliver powerful, reliable results exactly when you need them.
            </p>
            <p className="font-avenir text-lg text-brand-text leading-relaxed">
              Why is this great for you? You get faster onset, better absorption, and more predictable results to support your wellness journey.
            </p>
          </div>

          <div className="aspect-[4/3] bg-gray-50 rounded-lg overflow-hidden">
            <img
              src="/Cannabinoids.png"
              alt="Molecular structure visualization"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 1 1%22%2F%3E';
                target.classList.add('bg-gray-100');
                target.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                const span = document.createElement('span');
                span.className = 'text-gray-400 font-avenir';
                span.textContent = 'Science Image';
                target.parentElement?.appendChild(span);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}