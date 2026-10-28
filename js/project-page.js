/* ==================================================================
   JUDIT ALCÁZAR — PORTFOLIO
   js/project-page.js

   Lee "?slug=..." de la URL, busca el proyecto en js/projects.js
   y rellena project.html con su contenido. También genera los
   enlaces de "proyecto anterior / siguiente".
   ================================================================== */

function galleryImgHTML(filename, title, i){
  return `
    <div class="gallery__item">
      <img src="img/${filename}" alt="${title} — imagen ${i + 1}"
           onerror="this.onerror=null;this.classList.add('img--missing');this.removeAttribute('src');">
    </div>
  `;
}

function renderProject(){
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const project = PROJECTS.find(p => p.slug === slug);
  const root = document.getElementById("project-root");

  if (!project){
    root.innerHTML = `
      <div class="notfound">
        <p class="section-tag">— Vaya</p>
        <h1 class="notfound__title">No encuentro este proyecto</h1>
        <p class="notfound__text">Puede que el enlace haya cambiado o que el "slug" no sea correcto.</p>
        <a class="back-link" href="index.html">← Volver al portfolio</a>
      </div>
    `;
    document.title = "Proyecto no encontrado — Judit Alcázar García";
    return;
  }

  document.title = `${project.title} — Judit Alcázar García`;

  // los nombres de sección en index.html no coinciden literalmente con
  // "category" (p. ej. category "logos" -> sección "logotips")
  const SECTION_ANCHOR = { webs: "webs", logos: "logotips", editorial: "editorial", altres: "altres" };

  const tags = project.tags.map(t => `<li>${t}</li>`).join("");
  const badge = project.status ? `<span class="badge">${project.status}</span>` : "";
  const liveLabel = project.category === "webs" ? "Ver la web ↗" : "Ver producto ↗";
  const liveButton = project.live
    ? `<a class="btn-live" href="${project.live}" target="_blank" rel="noopener">${liveLabel}</a>`
    : "";

  // La mayoría de proyectos son: una galería + un bloque de texto.
  // Algunos (p. ej. un proyecto web que incluye también piezas
  // impresas sueltas, como flyers o gráfica de un evento) necesitan
  // varios bloques "galería + texto" seguidos, en vez de una sola
  // galería arriba y todo el texto junto debajo. Para esos, el
  // proyecto define `sections: [{ images, text, singleImage }, ...]`
  // en lugar de (o además de) `images`/`paragraphs`.
  let mainContent;
  if (Array.isArray(project.sections) && project.sections.length){
    mainContent = project.sections.map(section => {
      const imgs = (section.images || [])
        .map((img, i) => galleryImgHTML(img, project.title, i))
        .join("");
      const galleryClass = `gallery ${section.row ? 'gallery--row' : section.singleImage ? 'gallery--single' : ''}`;
      const text = section.text ? `<div class="project-body"><p>${section.text}</p></div>` : "";
      return `<div class="${galleryClass}">${imgs}</div>${text}`;
    }).join("");
  } else {
    const gallery = (project.images || [])
      .map((img, i) => galleryImgHTML(img, project.title, i))
      .join("");
    const galleryClass = `gallery ${project.category === 'logos' ? 'gallery--logos' : ''} ${project.row ? 'gallery--row' : project.singleImage ? 'gallery--single' : ''}`;
    const paragraphs = project.paragraphs.map(p => `<p>${p}</p>`).join("");
    mainContent = `<div class="${galleryClass}">${gallery}</div><div class="project-body">${paragraphs}</div>`;
  }

  root.innerHTML = `
    <a class="back-link" href="index.html#${SECTION_ANCHOR[project.category] || ''}">← Volver al portfolio</a>

    <p class="section-tag">${project.meta} ${badge}</p>
    <h1 class="project-title">${project.title}</h1>
    <p class="project-intro">${project.intro}</p>
    ${liveButton}

    ${mainContent}

    <div class="project-body project-tags-wrap">
      <ul class="card__tags project-tags">${tags}</ul>
    </div>
  `;

  renderProjectNav(project);
}

function renderProjectNav(current){
  const list = PROJECTS.filter(p => p.category === current.category);
  const i = list.findIndex(p => p.slug === current.slug);
  const prev = list[(i - 1 + list.length) % list.length];
  const next = list[(i + 1) % list.length];

  const nav = document.getElementById("project-nav");
  if (!nav) return;

  nav.innerHTML = `
    <a class="project-nav__link" href="project.html?slug=${prev.slug}">
      <span>← Anterior</span>
      <strong>${prev.title}</strong>
    </a>
    <a class="project-nav__link project-nav__link--next" href="project.html?slug=${next.slug}">
      <span>Siguiente →</span>
      <strong>${next.title}</strong>
    </a>
  `;
}

renderProject();
