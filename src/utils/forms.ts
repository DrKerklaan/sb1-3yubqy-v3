export interface FormData {
  firstName?: string;
  lastName?: string;
  name?: string;
  email: string;
  message?: string;
}

const GOOGLE_SHEETS_SCRIPT_URL = 'https://script.google.com/a/macros/drkerklaan.com/s/AKfycbzzviaGjX6ik4BwuUmCCFoHic1yglE_XjIxc6yi8WQWB1aFOjWOFnO55SVxsSg94gtI/exec';

export const submitToGoogleSheets = async (formData: FormData): Promise<boolean> => {
  try {
    const params = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });

    await fetch(`${GOOGLE_SHEETS_SCRIPT_URL}?${params.toString()}`, {
      method: 'GET',
      mode: 'no-cors',
    });

    // Since we're using no-cors, we can't access the response status
    // We'll assume success if the request doesn't throw an error
    return true;
  } catch (error) {
    console.error('Error submitting form:', error);
    return false;
  }
};