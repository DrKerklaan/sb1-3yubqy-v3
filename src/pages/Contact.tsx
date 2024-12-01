import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <div className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-16">
              <h2 className="font-playfair text-lg sm:text-xl text-brand-text mb-4">
                Have questions or need support? We're here to help!
              </h2>
              <p className="font-avenir text-lg text-brand-text leading-relaxed">
                Whether you're curious about our products, need assistance finding where to purchase our products, or just want to say hello, we'd love to hear from you. Reach out anytime!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-playfair text-xl text-brand-text mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4 font-avenir">
                  <div>
                    <p className="text-sm text-brand-text/60 mb-1">Email</p>
                    <a href="mailto:hellodrk@drkerklaan.com" className="text-lg text-brand-text hover:text-brand-text/80 transition-colors">
                      hellodrk@drkerklaan.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-brand-text/60 mb-1">Phone</p>
                    <a href="tel:+18009833556" className="text-lg text-brand-text hover:text-brand-text/80 transition-colors">
                      800-983-3556
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-playfair text-xl text-brand-text mb-6">
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-brand-text/60 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-brand-text focus:border-brand-text"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-brand-text/60 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-brand-text focus:border-brand-text"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm text-brand-text/60 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-brand-text focus:border-brand-text"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white border border-brand-text text-brand-text px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}