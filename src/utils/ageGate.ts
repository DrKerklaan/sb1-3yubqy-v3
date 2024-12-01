const AGE_VERIFICATION_KEY = 'age_verified';

export function setAgeVerification(): void {
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 30);
  localStorage.setItem(AGE_VERIFICATION_KEY, expiryDate.toISOString());
}

export function getAgeVerification(): boolean {
  const verified = localStorage.getItem(AGE_VERIFICATION_KEY);
  if (!verified) return false;

  const expiryDate = new Date(verified);
  const now = new Date();

  return now < expiryDate;
}