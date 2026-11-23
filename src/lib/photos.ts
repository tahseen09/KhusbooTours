// Build-time only: look up a photo in src/assets/photos by its file name.
const photos = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.jpg', { eager: true });

export const photo = (name: string) => photos[`../assets/photos/${name}.jpg`].default;
