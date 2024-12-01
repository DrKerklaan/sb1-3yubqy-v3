import { useState } from 'react';
import { FormData, submitToGoogleSheets } from '../utils/forms';
import Popup from './Popup';

interface ContactFormProps {
  type: 'newsletter' | 'contact';
}

export default function ContactForm({ type }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    if (type === 'newsletter') {
      if (!formData.firstName?.trim()) {
        setError('Please enter your first name');
        return false;
      }
      if (!formData.lastName?.trim()) {
        setError('Please enter your last name');
        return false;
      }
    } else {
      if (!formData.name?.trim()) {
        setError('Please enter your name');
        return false;
      }
      if (!formData.message?.trim()) {
        setError('Please enter a message');
        return false;
      }
    }

    if (!formData.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }

    setError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const success = await submitToGoogleSheets(formData);
      
      if (success) {
        setShowPopup(true);
        setFormData({
          firstName: '',
          lastName: '',
          name: '',
          email: '',
          message: '',
        });
      } else {
        setError('Failed to submit form. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setError(null);
  };

  if (type === 'newsletter') {
    return (
      <>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="text-brand-red text-sm">{error}</div>
          )}
          <div>
            <label htmlFor="firstName" className="block text-brand-text mb-2">First name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-transparent border border-brand-text/30 rounded-lg focus:border-brand-text focus:ring-1 focus:ring-brand-text text-brand-text placeholder-brand-text/50"
              placeholder="Your first name"
              required
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-brand-text mb-2">Last name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-transparent border border-brand-text/30 rounded-lg focus:border-brand-text focus:ring-1 focus:ring-brand-text text-brand-text placeholder-brand-text/50"
              placeholder="Your last name"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-brand-text mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-transparent border border-brand-text/30 rounded-lg focus:border-brand-text focus:ring-1 focus:ring-brand-text text-brand-text placeholder-brand-text/50"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="font-avenir mt-4 bg-white text-brand-text px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-colors text-base sm:text-lg border border-brand-text disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
      </>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="text-brand-red text-sm">{error}</div>
        )}
        <div>
          <label htmlFor="name" className="block text-sm text-brand-text/60 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-brand-text focus:border-brand-text"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-brand-text/60 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-brand-text focus:border-brand-text"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm text-brand-text/60 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-brand-text focus:border-brand-text"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white border border-brand-text text-brand-text px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}