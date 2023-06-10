// Importuję tablicę galleryItems z pliku gallery-items.js, która zawiera dane obrazków galerii.
import { galleryItems } from "./gallery-items.js";
// Change code below this line
//Nasłuchuję zdarzenia DOMContentLoaded, które zostaje wywołane, gdy cały dokument HTML został załadowany i przetworzony.
//Pobieram element z klasą .gallery za pomocą metody document.querySelector() i przypisuję go do zmiennej gallery.
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");
  //Definiuję funkcję generateGalleryItemsMarkup(), która generuje kod HTML dla elementów galerii na podstawie danych zawartych w tablicy galleryItems.
  //Wykorzystuję pętlę forEach(), aby przeiterować przez elementy tablicy i tworzę znaczniki <a> i <img> z odpowiednimi atrybutami i wartościami.
  //Wywołuję funkcję generateGalleryItemsMarkup() i przypisuję jej wynik do zmiennej markup.
  function generateGalleryItemsMarkup() {
    let markup = "";
    galleryItems.forEach(function (item) {
      markup += `
          <a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}">
          </a>
        `;
    });
    return markup;
  }
  //Przypisuję wygenerowany kod HTML do zawartości elementu gallery za pomocą właściwości innerHTML.
  gallery.innerHTML = generateGalleryItemsMarkup();
  //Tworzę nową instancję klasy SimpleLightbox i przypisuję ją do zmiennej lightbox.
  //Podczas tworzenia instancji przekazuję selektor .gallery a jako parametr, który określa, które elementy galerii będą miały funkcjonalność lightbox.
  //Dodatkowo, konfiguruję opcje captions, captionDelay i captionPosition, które dotyczą wyświetlania napisów pod obrazkami w lightboxie.
  const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionDelay: 250,
    captionPosition: "bottom",
  });
});
// Na koniec wyświetlam zawartość tablicy galleryItems w konsoli za pomocą console.log() w celu sprawdzenia danych.
console.log(galleryItems);
