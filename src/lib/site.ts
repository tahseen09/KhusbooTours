export const PHONE_DISPLAY = '+91 94388 36765';
export const WHATSAPP_NUMBER = '919438836765';

export function whatsappLink(message = 'Hi Khusboo Tours, I want to plan a trip.') {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function withBase(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export function formatPrice(rupees: number) {
  return `₹${rupees.toLocaleString('en-IN')}`;
}
