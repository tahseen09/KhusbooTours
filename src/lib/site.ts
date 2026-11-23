export const PHONE_DISPLAY = '+91 94388 36765';
export const WHATSAPP_NUMBER = '919438836765';
export const BOOKING_URL = 'https://fleetmanager.pythonanywhere.com/tickets/khusboo-tours/tours/';
export const TOURS_FEED_URL = 'https://fleetmanager.pythonanywhere.com/tickets/khusboo-tours/api/tours/';

export function whatsappLink(message = 'Hi Khusboo Tours, I want to plan a trip.') {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Places we plan trips to that have no magazine article yet. The search lists them under "Plan with us".
export const EXTRA_DESTINATIONS = [
  { name: 'Netarhat', region: 'Jharkhand', aliases: ['Netarhart'] },
  { name: 'Nepal', region: 'International', aliases: ['Kathmandu', 'Pokhara'] },
];

export function tourMessage(name: string, nights?: string) {
  const length = nights ? ` (${nights})` : '';
  return `Hi Khusboo Tours, I am interested in the ${name} tour${length}. Please share the dates and price.`;
}

export function reserveBusMessage(type?: string) {
  const bus = type ? `a bus (${type})` : 'a bus';
  return `Hi Khusboo Tours, I want to reserve ${bus}.\nRoute: \nDate: \nPassengers: `;
}

export function withBase(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
