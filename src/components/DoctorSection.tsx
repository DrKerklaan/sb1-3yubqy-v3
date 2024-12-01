export default function DoctorSection() {
  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="aspect-[4/3] bg-gray-50 rounded-lg overflow-hidden order-2 md:order-1">
            <img
              src="https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBL1hLSFE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--bd4af7ef75e62af4c3d25c0ee818148d22621c9c/dr-kerklaan-therapeutics-Dr.%20Andrew%20Kerklaan%20headshot%20-%20Dr%20Kerklaan%20Therapeutics%20pain%20relief.jpeg"
              alt="Dr. Andrew Kerklaan - Founder of Dr. Kerklaan Therapeutics"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 1 1%22%2F%3E';
                target.classList.add('bg-gray-100');
                target.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                const span = document.createElement('span');
                span.className = 'text-gray-400 font-avenir';
                span.textContent = 'Dr. Kerklaan Image';
                target.parentElement?.appendChild(span);
              }}
            />
          </div>

          <div className="max-w-xl order-1 md:order-2">
            <blockquote className="text-brand-text">
              <p className="font-playfair text-lg sm:text-xl md:text-2xl leading-relaxed mb-4">
                "Everyone desires better health. Our products are based on my 20 years of clinical care, helping people find effective, natural solutions for life's everyday challenges."
              </p>
              <footer className="font-avenir text-base sm:text-lg">
                – Dr. K
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}