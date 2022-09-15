// Add imports above this line
import { galleryItems } from './gallery-items';

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const pictures = galleryItems.map(({preview, original, description}) =>`<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}"
        alt="${description}"
        title="${description}" />
        </a>`).join('');

gallery.insertAdjacentHTML('afterbegin', pictures);

new SimpleLightbox(".gallery a", { captionDelay: 250 })