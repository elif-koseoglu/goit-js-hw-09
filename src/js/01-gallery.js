import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { images } from "./images";

console.log("[gallery] script loaded");

const galleryEl = document.querySelector(".gallery");
console.log("[gallery] galleryEl:", galleryEl);

const markup = images
  .map(
    ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img class="gallery-image" src="${preview}" alt="${description}" />
        </a>
      </li>
    `
  )
  .join("");

galleryEl.innerHTML = markup;
console.log("[gallery] links count:", document.querySelectorAll(".gallery a").length);

// Tıklama gerçekten geliyor mu? (Normal linke mi gidiyor göreceğiz)
