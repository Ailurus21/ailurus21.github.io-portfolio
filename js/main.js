/* ==================================================================
   JUDIT ALCÁZAR — PORTFOLIO
   js/main.js

   Dos efectos pequeños:
   1) Trazo de tinta que sigue el cursor y se va desvaneciendo (canvas).
   2) Aparición suave de las tarjetas de proyecto al hacer scroll.

   Todo comentado para que sea fácil retocar números (velocidad,
   duración, grosor del trazo...) sin tener que entender todo el archivo.
   ================================================================== */

(function inkTrail(){
  const canvas = document.getElementById('ink-canvas');
  if (!canvas) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches; // móvil/táctil
  if (prefersReducedMotion || isCoarsePointer) return; // no dibujamos el trazo en móvil ni si el usuario lo ha desactivado

  const ctx = canvas.getContext('2d');

  /* ---- configuración rápida: cambia estos valores a tu gusto ---- */
  const TRAIL_LIFETIME_MS = 650;   // cuánto tarda un punto en desaparecer
  const MAX_POINTS        = 60;    // puntos máximos en el trazo (rendimiento)
  const LINE_WIDTH        = 2.1;   // grosor del trazo, en px
  const LINE_COLOR        = '22, 21, 15'; // RGB del negro "tinta" (--ink)
  const JITTER            = 0.6;   // pequeña vibración "a mano"

  let points = []; // {x, y, t}

  function resize(){
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  }
  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('pointermove', (e) => {
    const jitterX = (Math.random() - 0.5) * JITTER;
    const jitterY = (Math.random() - 0.5) * JITTER;
    points.push({ x: e.clientX + jitterX, y: e.clientY + jitterY, t: performance.now() });
    if (points.length > MAX_POINTS) points.shift();
  });

  function draw(){
    const now = performance.now();
    // quita los puntos demasiado viejos
    points = points.filter(p => now - p.t < TRAIL_LIFETIME_MS);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 1; i < points.length; i++){
      const a = points[i - 1];
      const b = points[i];
      const age = now - b.t;
      const life = 1 - age / TRAIL_LIFETIME_MS; // 1 = nuevo, 0 = a punto de desaparecer
      if (life <= 0) continue;

      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = `rgba(${LINE_COLOR}, ${life * 0.85})`;
      ctx.lineWidth = LINE_WIDTH * (0.5 + life * 0.5);
      ctx.lineCap = 'round';
      ctx.stroke();
    }

    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();


/* ------------------------------------------------------------------
   Aparición suave de las tarjetas al hacer scroll
   ------------------------------------------------------------------ */
(function revealOnScroll(){
  const cards = document.querySelectorAll('.card');
  if (!cards.length) return;

  cards.forEach(c => {
    c.style.opacity = 0;
    c.style.transform = 'translateY(16px)';
    c.style.transition = 'opacity .5s ease, transform .5s ease';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(c => observer.observe(c));
})();
