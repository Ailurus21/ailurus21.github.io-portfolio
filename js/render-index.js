/* ==================================================================
   JUDIT ALCÁZAR — PORTFOLIO
   js/render-index.js

   Coge los datos de js/projects.js y genera las tarjetas dentro de
   cada cuadrícula de index.html (#grid-webs, #grid-logos, etc.).
   No hace falta tocar este archivo para editar textos: eso se hace
   en js/projects.js.
   ================================================================== */

function cardHTML(p){
  const badge = p.status ? `<span class="badge">${p.status}</span>` : "";
  const tags = p.tags.map(t => `<li>${t}</li>`).join("");
  const mainImg = p.images && p.images[0] ? p.images[0] : "";

  return `
    <a class="card" href="project.html?slug=${p.slug}">
      <div class="card__img-wrap">
        <img class="card__img" src="img/${mainImg}" alt="${p.title}"
             onerror="this.onerror=null;this.classList.add('img--missing');this.removeAttribute('src');">
        <span class="card__tape"></span>
      </div>
      <div class="card__body">
        <p class="card__meta">${p.meta} ${badge}</p>
        <h3 class="card__title">${p.title}</h3>
        <p class="card__text">${p.summary}</p>
        <ul class="card__tags">${tags}</ul>
      </div>
    </a>
  `;
}

function renderGrid(containerId, category){
  const el = document.getElementById(containerId);
  if (!el) return;
  const items = PROJECTS.filter(p => p.category === category);
  el.innerHTML = items.map(cardHTML).join("");
}

renderGrid("grid-webs", "webs");
renderGrid("grid-logos", "logos");
renderGrid("grid-editorial", "editorial");
renderGrid("grid-altres", "altres");
