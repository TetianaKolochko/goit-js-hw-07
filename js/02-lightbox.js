import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');

const cardMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', cardMarkup); 

function createGallery(galleryItems) {
          return galleryItems.map(({ preview, original, description }) => {
          return `<div class="gallery__item">
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="" title="${description}"
  />
</a>
</div>`;
      
              
 }).join('');
};


galleryContainer.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
  
    if (!e.target.classList.contains('gallery__image')) {
        return
    }
    e.preventDefault();
}
let gallerySlids = new SimpleLightbox('.gallery a',
    {
        captionDelay: 250,
    });
