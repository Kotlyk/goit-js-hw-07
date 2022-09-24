import { galleryItems } from './gallery-items.js';
// Change code below this line


const galaryList = document.querySelector(".gallery");


const imageNew = galleryItems
  .map(
    (galleryItems) =>
      `<div class="gallery__item">
      <a class="gallery__link" href=${galleryItems.original}>
    <img
      class="gallery__image"
      src=${galleryItems.preview}
      data-source=${galleryItems.original}
      alt=${galleryItems.description}
    />
  </a>
  </div>`
  )
  .join("");

const render = () => {
  galaryList.innerHTML = '';
  galaryList.insertAdjacentHTML("beforeend", imageNew);
};

render();

const onClick = (evt) => {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) return;
  const origImg = evt.target.dataset.source;
 
  const instance = basicLightbox.create(`
    <img class="gallery__image" src=${origImg}>
`);

  instance.show();
  instance
    .element()
    .addEventListener("click", instance.close);
};

galaryList.addEventListener('click', onClick)
  
