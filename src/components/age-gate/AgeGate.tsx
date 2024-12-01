import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import ProvinceSelect from './ProvinceSelect';
import AgeSlider from './AgeSlider';
import { setAgeVerification, getAgeVerification } from '../../utils/ageGate';

export default function AgeGate() {
  const [isOpen, setIsOpen] = useState(true);
  const [age, setAge] = useState(0);
  const [province, setProvince] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState(false);
  const [denied, setDenied] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const verified = getAgeVerification();
    if (verified) {
      setIsOpen(false);
    }
  }, []);

  const handleSubmit = () => {
    if (age >= 19 && province) {
      if (remember) {
        setAgeVerification();
      }
      setIsOpen(false);
      setError(false);
    } else {
      setError(true);
      setDenied(true);
    }
  };

  if (!isOpen) return null;

  return (
    <Dialog
      open={isOpen}
      onClose={() => {}}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-[90vw] sm:max-w-md border-2 border-[#C20006]">
          <div className="flex justify-center mb-2">
            {!imageError ? (
              <img
                src="https://stackblitz.com/storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNXlaR2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--aa6e563b79dc17d9d572bc570cf760e23836709f/Dr%20Kerklaan%20Therapeutics_Logotype_1000px.png"
                alt="Dr. Kerklaan Therapeutics"
                className="h-24 sm:h-36 object-contain"
                onError={() => setImageError(true)}
              />
            ) : (
              <span className="font-playfair text-xl font-semibold text-[#4E4E4F]">
                Dr. Kerklaan
              </span>
            )}
          </div>

          <Dialog.Title className="font-playfair text-xl sm:text-2xl text-[#4E4E4F] mb-4 text-center leading-tight">
            Please confirm you are 19 or older<br />to enter
          </Dialog.Title>

          {denied ? (
            <div className="text-center">
              <p className="font-avenir text-lg sm:text-xl text-[#4E4E4F] mb-4">Access Denied</p>
              <button
                onClick={() => {
                  setDenied(false);
                  setError(false);
                }}
                className="bg-[#C20006] text-white px-6 py-2 rounded-lg font-avenir hover:bg-opacity-90 transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : (
            <div className="space-y-4 max-w-sm mx-auto">
              <div>
                <label className="block font-avenir text-[#4E4E4F] mb-2 text-sm sm:text-base">
                  Select your age:
                </label>
                <div className="relative pb-8">
                  <AgeSlider value={age} onChange={setAge} />
                  <div 
                    className="absolute text-[#4E4E4F] font-avenir text-sm"
                    style={{
                      left: `${age}%`,
                      transform: 'translateX(-50%)',
                      bottom: '0'
                    }}
                  >
                    {age}
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-avenir text-[#4E4E4F] mb-2 text-sm sm:text-base">
                  Select your province:
                </label>
                <ProvinceSelect value={province} onChange={setProvince} />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="rounded border-[#4E4E4F] accent-[#4E4E4F] w-4 h-4 touch-manipulation"
                />
                <label htmlFor="remember" className="font-avenir text-[#4E4E4F] ml-2 text-sm sm:text-base">
                  Remember me for 30 days
                </label>
              </div>

              {error && (
                <p className="text-[#4E4E4F] font-avenir text-sm sm:text-base">
                  You must be 19 or older and select a province to enter.
                </p>
              )}

              <button
                onClick={handleSubmit}
                className="w-full bg-[#C20006] text-white px-6 py-3 rounded-lg font-avenir hover:bg-opacity-90 transition-colors text-sm sm:text-base"
              >
                Confirm Age
              </button>
            </div>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}