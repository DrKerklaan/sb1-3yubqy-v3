import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Disclosure, Transition } from '@headlessui/react';
import Layout from '../components/Layout';
import { products } from '../data/products';

type ProductContent = {
  description: string;
  flavor?: string;
  texture?: string;
  benefits: string[];
  howItWorks: string;
  usage: string[];
  bottomText: string;
}

type ProductContentMap = {
  [key: string]: ProductContent;
}

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = id ? products[id] : null;
  const [imageError, setImageError] = useState(false);

  if (!product || !id) {
    return <Navigate to="/" replace />;
  }

  const productContent: ProductContentMap = {
    'rest-gummies': {
      description: "Take time to unwind and set the stage for a restful sleep with Dr. Kerklaan Therapeutics' rest. Rapid THC:CBN Gummies. Perfectly formulated for nighttime use, these gummies help you relax and drift into a peaceful night's sleep.",
      flavor: "A subtle hint of blackberry flavour that soothes your senses and sets the stage for a peaceful slumber.",
      benefits: [
        "Supports Relaxation - Helps you to unwind and calm at the end of the day",
        "Promotes Restful Sleep - Ideal for those who struggle to wind down or stay asleep",
        "Enhanced Absorption - Features advanced absorption technology for faster and more predictable effects"
      ],
      howItWorks: "Each gummy is infused with 5 mg of THC and 1.25 mg of CBN, creating a powerful bedtime blend that's designed to support your sleep routine. Backed by 15 years of foundational research at the University of Toronto, our advanced absorption technology helps your body absorb more, faster, and with greater predictability.",
      usage: [
        "New to THC? Start with half a gummy and see how you sleep and feel the next morning. Adjust as needed.",
        "Looking for quicker results? Try 1 full gummy to help you fall asleep faster and wake up refreshed, without grogginess.",
        "Need more support? Not quite there with 1 gummy? Gradually increase to 2 gummies to find your ideal dose.",
        "Pro Tip: Always wait up to 90 minutes before taking more to allow the effects to fully kick in. Take your time to discover what works best for you, and enjoy a better night's rest!"
      ],
      bottomText: "Experience Better Nights Ahead. Rest Well."
    },
    'relief-gummies': {
      description: "When discomfort strikes, reach for Dr. Kerklaan Therapeutics' relief. THC:CBD Gummies. Designed to provide quick relief, these gummies help you feel better fast and get back to doing what you love.",
      flavor: "A subtle hint of pomegranate flavour that refreshes your senses and gently supports your path to relief.",
      benefits: [
        "Quick Relief - Fast-acting formula for when you need relief most",
        "Balanced Support - A combination of THC and CBD designed to work in harmony for optimal results",
        "Enhanced Absorption - Backed by advanced absorption technology for faster, more predictable effects"
      ],
      howItWorks: "Each gummy is infused with a precise blend of THC and CBD to help address discomfort quickly and effectively. The advanced absorption technology, developed over 15 years of research at the University of Toronto, ensures your body absorbs more, faster, with more consistent results.",
      usage: [
        "New to THC? Start with one gummy and wait up to 90 minutes to see how it works for you. Adjust as needed.",
        "Looking for quicker relief? Take 1 full gummy to help you feel better fast.",
        "Need more support? Not quite there with 1 gummy? Gradually increase to 2 gummies to find your ideal dose.",
        "Pro Tip: Always wait up to 90 minutes before taking more to allow the effects to fully kick in. Take your time to find your perfect dose and experience the relief you need!"
      ],
      bottomText: "Feel Better, Faster."
    },
    'relief-cream': {
      description: "Dr. Kerklaan Therapeutics' relief. THC:CBD Transdermal Cream is a fast-absorbing, non-greasy solution for targeted relief. Whether it's muscle aches or discomfort, this cream delivers quick, effective relief exactly where you need it, when you need it.",
      texture: "A silky-smooth, fast-absorbing cream that disappears into your skin without leaving any greasy residue.",
      benefits: [
        "Targeted Relief - Apply directly to areas in need of relief for quick, focused comfort",
        "Fast Absorption - Non-greasy formula that absorbs quickly and starts working fast",
        "Cooling Sensation - Infused with cooling Eucalyptus and Peppermint oils for a refreshing experience"
      ],
      howItWorks: "Infused with a balanced 1:1 THC:CBD blend, this cream is enhanced by advanced absorption technology for deeper, more effective penetration. Developed with over 15 years of research at the University of Toronto, it helps your skin absorb the active ingredients faster and more effectively—in a fraction of the time compared to topicals without our absorption innovation.",
      usage: [
        "Apply a generous amount to targeted areas and massage until fully absorbed.",
        "Can be used daily for fast, soothing relief."
      ],
      bottomText: "Get Back to Feeling Your Best."
    },
    'relief-stick': {
      description: "Relief on the go. Dr. Kerklaan Therapeutics' relief. THC:CBD Stick is your easy-to-use, mess-free solution for quick, targeted relief. Perfect for muscle aches or body soreness, it's designed to help you feel better wherever you are.",
      texture: "A smooth-gliding stick that provides deep penetration without any mess or residue.",
      benefits: [
        "On-the-Go Relief - Convenient stick format for mess-free, easy application",
        "Deep Targeted Relief - Designed to dig into muscles for focused comfort",
        "Fast Absorption - Quickly absorbed, leaving no greasy residue behind"
      ],
      howItWorks: "Infused with a 1:1 THC:CBD blend and cooling Eucalyptus and Peppermint oils, this stick is enhanced with advanced absorption technology to deliver relief right where you need it.",
      usage: [
        "Glide the stick over the targeted area and massage in as needed.",
        "Can be used daily for quick, targeted relief."
      ],
      bottomText: "Feel Better, Faster—Anytime, Anywhere."
    }
  };

  const content = productContent[id];

  const sections = [
    {
      title: 'Key Benefits',
      content: (
        <ul className="list-disc pl-5 space-y-2">
          {content.benefits.map((benefit, index) => (
            <li key={index} className="text-brand-text">{benefit}</li>
          ))}
        </ul>
      )
    },
    {
      title: 'How It Works',
      content: content.howItWorks
    },
    {
      title: 'How to Use',
      content: (
        <div className="space-y-4">
          {content.usage.map((instruction, index) => (
            <p key={index}>{instruction}</p>
          ))}
        </div>
      )
    }
  ];

  return (
    <Layout>
      <div className="pt-24 pb-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-start md:space-x-12">
            {/* Sticky Image Container */}
            <div className="w-full md:w-[350px] flex-shrink-0 md:sticky md:top-24">
              {!imageError ? (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full rounded-lg object-contain"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Image not available</span>
                </div>
              )}
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 mt-8 md:mt-0">
              <div className="space-y-8">
                <div>
                  <h1 className={`font-playfair text-xl ${product.color}`}>
                    {product.name}
                  </h1>
                  
                  <div className="mt-6 space-y-6">
                    <p className="font-avenir text-brand-text leading-relaxed">
                      {content.description}
                    </p>
                    
                    <div>
                      <h2 className="font-playfair text-lg text-brand-text mb-2">
                        {id.includes('gummies') ? 'Flavour:' : 'Texture:'}
                      </h2>
                      <p className="font-avenir text-brand-text leading-relaxed">
                        {id.includes('gummies') ? content.flavor : content.texture}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dropdown Sections */}
                <div className="space-y-4">
                  {sections.map((section, index) => (
                    <Disclosure key={index}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex justify-between items-center w-full px-0 py-4 text-left border-t border-gray-200">
                            <span className="font-playfair text-lg text-brand-text">
                              {section.title}
                            </span>
                            <svg
                              className={`w-5 h-5 text-brand-text transform transition-transform ${
                                open ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </Disclosure.Button>
                          <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                          >
                            <Disclosure.Panel className="px-0 py-4 font-avenir text-brand-text leading-relaxed">
                              {typeof section.content === 'string' ? (
                                <p>{section.content}</p>
                              ) : (
                                section.content
                              )}
                            </Disclosure.Panel>
                          </Transition>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text Block */}
        <div className="mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <p className="font-playfair text-2xl text-center text-brand-text">
              {content.bottomText}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}