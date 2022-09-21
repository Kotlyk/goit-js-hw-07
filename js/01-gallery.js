import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galaryList = document.querySelector(".gallery");

const imageNew = galleryItems
  .map(
    (image) =>
      `<a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${galleryItems.preview}"
      data-source="large-image.jpg"
      alt="${galleryItems.discription}"
    />
  </a>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", imageNew);


galaryList.addEventListener('click', onClick);
