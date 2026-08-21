function submitForm(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const message = form.querySelector('.form-message');
  const name = new FormData(form).get('name');
  message.textContent = `Thanks, ${name}. We'll be in touch shortly.`;
  form.reset();
  return false;
}

const gallery = document.querySelector('[data-gallery]');
const galleryImage = document.querySelector('[data-gallery-image]');
const galleryCurrent = document.querySelector('[data-gallery-current]');
const galleryTotal = document.querySelector('[data-gallery-total]');
const galleryCaption = document.querySelector('[data-gallery-caption]');

if (gallery && galleryImage) {
  const photos = [
    ['https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1400&q=85', 'Exterior finish, carefully considered.'],
    ['https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1400&q=85', 'A closer look at the work.'],
    ['https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1400&q=85', 'The gloss is in the details.'],
    ['https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1400&q=85', 'Ready for the road again.']
  ];
  let activePhoto = 0;
  galleryTotal.textContent = String(photos.length).padStart(2, '0');
  const showPhoto = (index) => {
    activePhoto = (index + photos.length) % photos.length;
    galleryImage.src = photos[activePhoto][0];
    galleryImage.alt = photos[activePhoto][1];
    galleryCurrent.textContent = String(activePhoto + 1).padStart(2, '0');
    galleryCaption.textContent = photos[activePhoto][1];
  };
  document.querySelector('[data-gallery-prev]').addEventListener('click', () => showPhoto(activePhoto - 1));
  document.querySelector('[data-gallery-next]').addEventListener('click', () => showPhoto(activePhoto + 1));
  setInterval(() => showPhoto(activePhoto + 1), 6000);
}
