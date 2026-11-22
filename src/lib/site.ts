export const PHONE_DISPLAY = '+91 94388 36765';
export const WHATSAPP_NUMBER = '919438836765';
export const BOOKING_URL = 'https://fleetmanager.pythonanywhere.com/tickets/khusboo-tours/tours/';

export function whatsappLink(message = 'Hi Khusboo Tours, I want to plan a trip.') {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function tourMessage(name: string, nights: string) {
  return `Hi Khusboo Tours, I am interested in the ${name} tour (${nights}). Please share the dates and price.`;
}

export function reserveBusMessage(type?: string) {
  const bus = type ? `a bus (${type})` : 'a bus';
  return `Hi Khusboo Tours, I want to reserve ${bus}.\nRoute: \nDate: \nPassengers: `;
}

export function withBase(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
