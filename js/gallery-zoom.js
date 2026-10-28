/* ==================================================================
   JUDIT ALCÁZAR — PORTFOLIO
   js/gallery-zoom.js

   En cualquier foto de las galerías de un proyecto (project.html,
   las que pinta project-page.js):
   1. Al hacer clic, la foto se abre grande en un visor encima de
      todo (la miniatura en sí no hace zoom, solo se abre).
   2. Dentro del visor, al pasar el cursor por la foto hace zoom
      siguiendo la posición del ratón. Se cierra con la X, haciendo
      clic fuera de la foto o pulsando Escape.

   No hace falta tocar nada de este archivo: funciona solo con
   cualquier <img> dentro de un .gallery__item, aunque la galería se
   pinte más tarde (delegación de eventos sobre document).
   ================================================================== */

(function(){

  function buildLightbox(){
    if (document.querySelector(".lightbox")) return;
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
      <button class="lightbox__close" type="button" aria-label="Cerrar">✕</button>
      <img class="lightbox__img" alt="">
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector(".lightbox__img");
    const closeBtn = lightbox.querySelector(".lightbox__close");

    const closeLightbox = () => {
      lightbox.classList.remove("is-open");
      lightboxImg.src = "";
      lightboxImg.style.transform = "";
      document.body.style.overflow = "";
    };

    // clic fuera de la foto (sobre el fondo oscuro) la cierra
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    closeBtn.addEventListener("click", closeLightbox);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
    });

    // el zoom del visor sigue al cursor: calculamos en qué % (x,y)
    // de la foto está el ratón y lo usamos como punto de origen
    // del scale() que pone el CSS al pasar el cursor (:hover)
    lightboxImg.addEventListener("mousemove", (e) => {
      const rect = lightboxImg.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      lightboxImg.style.transformOrigin = `${x}% ${y}%`;
    });
  }

  function openLightbox(img){
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = lightbox.querySelector(".lightbox__img");
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt || "";
    lightboxImg.style.transformOrigin = "50% 50%";
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function isOpenableImg(img){
    return img && img.matches(".gallery__item img") && !img.classList.contains("img--missing") && img.getAttribute("src");
  }

  document.addEventListener("click", (e) => {
    const img = e.target.closest ? e.target.closest(".gallery__item img") : null;
    if (!isOpenableImg(img)) return;
    openLightbox(img);
  });

  buildLightbox();

})();
