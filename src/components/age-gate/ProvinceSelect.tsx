interface ProvinceSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const provinces = [
  { code: '', name: 'Select a province' },
  { code: 'AB', name: 'Alberta' },
  { code: 'BC', name: 'British Columbia' },
  { code: 'MB', name: 'Manitoba' },
  { code: 'NB', name: 'New Brunswick' },
  { code: 'NL', name: 'Newfoundland and Labrador' },
  { code: 'NS', name: 'Nova Scotia' },
  { code: 'NT', name: 'Northwest Territories' },
  { code: 'NU', name: 'Nunavut' },
  { code: 'ON', name: 'Ontario' },
  { code: 'PE', name: 'Prince Edward Island' },
  { code: 'QC', name: 'Quebec' },
  { code: 'SK', name: 'Saskatchewan' },
  { code: 'YT', name: 'Yukon' },
];

export default function ProvinceSelect({ value, onChange }: ProvinceSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-2 rounded-lg border border-[#4E4E4F] bg-white text-[#4E4E4F] font-avenir text-sm sm:text-base focus:outline-none"
    >
      {provinces.map((province) => (
        <option key={province.code} value={province.code}>
          {province.name}
        </option>
      ))}
    </select>
  );
}