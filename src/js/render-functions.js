import SimpleLightbox from 'simple-lightbox';
import 'simple-lightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
let lightbox = null; // Инициализируем позже

function itemTemplate(image) {
  return `<li class="gallery-item">
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}">
      </a>
      <ul class="stats">
        <li class="stats-item"><p class="stat-title">likes</p><p class="stat-value">${image.likes}</p></li>
        <li class="stats-item"><p class="stat-title">views</p><p class="stat-value">${image.views}</p></li>
        <li class="stats-item"><p class="stat-title">comments</p><p class="stat-value">${image.comments}</p></li>
        <li class="stats-item"><p class="stat-title">downloads</p><p class="stat-value">${image.downloads}</p></li>
      </ul>
    </li>`;
}

export function createGallery(images) {
  const markup = images.map(itemTemplate).join('');
  gallery.insertAdjacentHTML('beforeend', markup);

  // Создаем лайтбокс ТОЛЬКО после добавления картинок
  if (lightbox) {
    lightbox.destroy();
  }
  lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  if (loader) loader.style.display = 'block';
}

export function hideLoader() {
  if (loader) loader.style.display = 'none';
}
