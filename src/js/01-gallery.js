import { galleryItems } from "./gallery-items.js";
// Change code below this line
// Funkcja przekazana jako drugi argument zostanie wykonana, gdy tylko całe drzewo DOM zostanie wczytane i sparsowane.
document.addEventListener("DOMContentLoaded", function () {
  // Pobieram element DOM o klasie "gallery" i przypisuję go do zmiennej gallery.
  const gallery = document.querySelector(".gallery");

  // Funkcja poniżej generuje kod HTML dla elementów galerii.
  // Wykorzystuję pętlę forEach(), aby przeiterować po tablicy galleryItems i dla każdego elementu galerii generuję kod HTML.
  function generateGalleryItemsMarkup() {
    let markup = "";
    galleryItems.forEach(function (item) {
      markup += `
          <div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
              <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}">
            </a>
          </div>
        `;
    });
    return markup;
  }
  // Ustawiam zawartość HTML dla elementu gallery na wygenerowany kod HTML, który jest zwracany przez funkcję generateGalleryItemsMarkup().
  // W ten sposób elementy galerii są renderowane na stronie.
  gallery.innerHTML = generateGalleryItemsMarkup();

  // Dodaje obsługę zdarzenia kliknięcia na element galerii. Kiedy kliknięcie nastąpi, wywoływana jest funkcja obsługująca zdarzenie.
  // Funkcja ta sprawdza, czy kliknięty element ma klasę "gallery__image". Jeśli tak, tworzy nowe okno modalne za pomocą biblioteki basicLightbox i wyświetla go, używając metody .show().
  // W przeciwnym razie, jeśli kliknięty element nie ma klasy "gallery__image", funkcja obsługująca zdarzenie kończy działanie, nie otwierając okna modalnego.
  gallery.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.classList.contains("gallery__image")) {
      const instance = basicLightbox.create(`
          <img src="${event.target.dataset.source}" width="800" height="600">
        `);
      instance.show();
    }
  });
});
console.log(galleryItems);
