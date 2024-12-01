interface AgeSliderProps {
  value: number;
  onChange: (value: number) => void;
}

export default function AgeSlider({ value, onChange }: AgeSliderProps) {
  return (
    <div className="w-full">
      <style>
        {`
          input[type="range"] {
            -webkit-appearance: none;
            appearance: none;
            background: #4E4E4F;
            border-radius: 8px;
            height: 8px;
            margin-bottom: 8px;
            width: calc(100% - 4px);
            margin-left: 2px;
            outline: none;
          }

          input[type="range"]:focus {
            outline: none;
          }

          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            background: #4E4E4F;
            border-radius: 50%;
            cursor: pointer;
            border: 2px solid white;
          }

          input[type="range"]::-moz-range-thumb {
            width: 20px;
            height: 20px;
            background: #4E4E4F;
            border-radius: 50%;
            cursor: pointer;
            border: 2px solid white;
          }

          @media (max-width: 640px) {
            input[type="range"]::-webkit-slider-thumb {
              width: 24px;
              height: 24px;
            }
            
            input[type="range"]::-moz-range-thumb {
              width: 24px;
              height: 24px;
            }
          }
        `}
      </style>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full touch-manipulation"
      />
    </div>
  );
}