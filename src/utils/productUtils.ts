export const getProductSlug = (productId: string): string => {
  switch (productId) {
    case '1':
      return 'rest-gummies';
    case '2':
      return 'relief-gummies';
    case '3':
      return 'relief-cream';
    case '4':
      return 'relief-stick';
    default:
      return '';
  }
};

export const getProductColor = (productId: string): string => {
  switch (productId) {
    case '1':
      return 'text-[#211645]';
    case '2':
    case '3':
    case '4':
      return 'text-[#C20006]';
    default:
      return 'text-brand-text';
  }
};

export const getProductBgColor = (productId: string): string => {
  switch (productId) {
    case '1':
      return 'bg-[#211645]';
    case '2':
    case '3':
    case '4':
      return 'bg-[#C20006]';
    default:
      return 'bg-brand-text';
  }
};

export const getProductDescription = (productId: string): string => {
  switch (productId) {
    case '1':
      return "Fast-acting gummies to help you unwind and drift into a restful night's sleep.";
    case '2':
      return "Quick, effective relief in a gummy to help you feel better when you need it most.";
    case '3':
      return "A fast-absorbing, non-greasy cream that targets discomfort and helps you feel better, faster.";
    case '4':
      return "A convenient mess-free stick designed to dig into muscles for targeted, on-the-go relief.";
    default:
      return "";
  }
};