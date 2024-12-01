export default function Newsletter() {
  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl text-brand-text mb-6 leading-tight">
            Let's stay connected—because your wellness journey matters to us.
          </h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-brand-text mb-2">First name</label>
              <input
                type="text"
                id="firstName"
                className="w-full px-4 py-3 bg-transparent border border-brand-text/30 rounded-lg focus:border-brand-text focus:ring-1 focus:ring-brand-text text-brand-text placeholder-brand-text/50"
                placeholder="Your first name"
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-brand-text mb-2">Last name</label>
              <input
                type="text"
                id="lastName"
                className="w-full px-4 py-3 bg-transparent border border-brand-text/30 rounded-lg focus:border-brand-text focus:ring-1 focus:ring-brand-text text-brand-text placeholder-brand-text/50"
                placeholder="Your last name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-brand-text mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-transparent border border-brand-text/30 rounded-lg focus:border-brand-text focus:ring-1 focus:ring-brand-text text-brand-text placeholder-brand-text/50"
                placeholder="Enter your email"
              />
            </div>
            
            <button
              type="submit"
              className="font-avenir mt-4 bg-white text-brand-text px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-colors text-base sm:text-lg border border-brand-text"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}