import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');

const cardMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', cardMarkup); 

function createGallery(galleryItems) {
          return galleryItems.map(({ preview, original, description }) => {
          return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source= "${original}"
      alt="${description}"
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

  const instance = basicLightbox.create(`
   <div class="modal">
    <img src="${e.target.dataset.source}" alt = "${e.target.alt}"</div>`, {
       onShow: (instance) => {
        instance.element().querySelector('img').onclick = instance.close
    }
    })
  instance.show()
  }
  