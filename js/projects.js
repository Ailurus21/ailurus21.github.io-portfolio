/* ==================================================================
   JUDIT ALCÁZAR — PORTFOLIO
   js/projects.js

   AQUÍ ES DONDE EDITAS LOS PROYECTOS.
   Cada objeto de esta lista alimenta DOS cosas a la vez:
     1) la tarjeta en la cuadrícula de index.html
     2) su página de detalle (project.html?slug=...)

   Para añadir un proyecto nuevo: copia un bloque {…} entero, cambia
   "slug" (sin espacios ni acentos) y el resto de campos.
   Para quitar uno: borra el bloque entero.

   Imágenes: colócalas en la carpeta img/ con el nombre que indiques
   en "images". Si el archivo no existe todavía, se muestra
   automáticamente un placeholder rayado — no hace falta hacer nada más.

   Campo "live": la URL real de la web (solo en proyectos "webs").
   Si está vacío (""), el botón "Ver la web" no se muestra.

   Los 11 proyectos marcados con la etiqueta "Por completar" son webs
   que me diste por enlace pero de las que no tengo descripción del
   proyecto (sector, reto, herramientas...). Edita su "intro" y
   "paragraphs" con la info real y borra esa etiqueta de "tags".
   ================================================================== */

const PROJECTS = [

  /* ================= WEBS ================= */
  {
    slug: "web-decoralex",
    category: "webs",
    meta: "Reformas · Logo + Web",
    title: "Decoralex",
    summary: "Identidad y web completa para una empresa de reformas. Mi primer proyecto de principio a fin.",
    tags: ["WordPress", "Kadence", "SEO"],
    images: ["decoralex-1.jpg", "decoralex-2.jpg", "decoralex-3.jpg"],
    live: "https://decoralex.es/",
    intro: "El primer proyecto que hice de principio a fin en Empiezapori: un logotipo nuevo y la web completa para una empresa de reformas y pintura.",
    paragraphs: [
      "El reto era transmitir confianza y profesionalidad desde el primer vistazo. Partí de un rodillo de pintura como símbolo principal y construí alrededor una identidad sencilla, con azules que refuerzan la sensación de seguridad.",
      "En la web, hecha con WordPress y Kadence, me encargué de toda la estructura de contenidos, la maquetación responsive y la optimización SEO on-page: títulos, descripciones, palabras clave y organización de los encabezados."
    ]
  },
  {
    slug: "web-palau-del-born",
    category: "webs",
    meta: "Restauración · Branding + Web",
    title: "Palau del Born",
    summary: "Identidad visual completa —logo, manual de estilo, cartas y web— para un restaurante con ADN mediterráneo.",
    tags: ["Branding", "WordPress", "Manual de estilo"],
    images: ["palau-del-born-1.jpg", "palau-del-born-2.jpg", "palau-del-born-3.jpg"],
    live: "https://palaudelborn.com/",
    intro: "Un proyecto de marca completo para un restaurante: logotipo, manual de estilo, cartas y web, todo pensado como un mismo sistema visual.",
    paragraphs: [
      "El logotipo juega con una tipografía clásica y verdes suaves que transmiten calidad y cercanía. Documenté todos los usos —versión horizontal, positivo/negativo, área de seguridad— en un manual de estilo corporativo.",
      "Con esa base, diseñé las cartas (impresa y digital) y la web con WordPress y Kadence, manteniendo siempre la misma línea gráfica en todos los soportes."
    ]
  },
  {
    slug: "web-daniela",
    category: "webs",
    meta: "Editorial personal · Web",
    title: "Daniela Martín Hidalgo",
    summary: "Web minimalista para una escritora y traductora, con la tipografía y el espacio en blanco como protagonistas.",
    tags: ["WordPress", "HTML/CSS"],
    images: ["daniela-1.jpg", "daniela-2.jpg", "daniela-3.jpg"],
    live: "https://dmartinhidalgo.com/",
    intro: "Web para una escritora, poeta y traductora, pensada para dar todo el protagonismo a sus textos.",
    paragraphs: [
      "Opté por un diseño limpio y minimalista, con mucho espacio en blanco y una jerarquía tipográfica clara, evitando cualquier distracción visual innecesaria.",
      "Este fue el primer proyecto en el que combiné WordPress con pequeñas personalizaciones en HTML y CSS, para ajustar detalles que las herramientas visuales no permitían resolver."
    ]
  },
  {
    slug: "web-jgarcia",
    category: "webs",
    meta: "Carpintería · Logo + Web",
    title: "J. García Decoración",
    summary: "Logotipo inspirado en las vetas de la madera y una web cálida para un taller de carpintería artesanal.",
    tags: ["Branding", "WordPress"],
    images: ["jgarcia-1.jpg", "jgarcia-2.jpg", "jgarcia-3.jpg"],
    live: "https://jgarciadecoracion.com/",
    intro: "Identidad y web para una empresa de carpintería y ebanistería con una larga trayectoria en el sector.",
    paragraphs: [
      "El logotipo reinterpreta gráficamente las vetas naturales de la madera, conectando la marca con la materia prima con la que trabaja la empresa cada día.",
      "En la web prioricé una estética cálida y una navegación sencilla, organizando los servicios —carpintería a medida, mobiliario, decoración de interiores— con claridad."
    ]
  },
  {
    slug: "web-inner-edge",
    category: "webs",
    meta: "Interiorismo · Logo + Web",
    title: "Inner Edge Studio",
    summary: "Identidad sobria y portfolio digital para un estudio de interiorismo y arquitectura.",
    tags: ["Branding", "WordPress"],
    images: ["inner-edge-1.jpg", "inner-edge-2.jpg", "inner-edge-3.jpg"],
    live: "https://inneredgestudio.es/",
    intro: "Un estudio de interiorismo y arquitectura necesitaba una presencia digital que funcionara, sobre todo, como portfolio visual.",
    paragraphs: [
      "Antes de la web diseñé también el logotipo: un monograma que superpone las letras «I» y «E» en una tipografía serif elegante, rematado con «STUDIO» debajo en caja alta. Funciona tanto en negro como en blanco según el fondo.",
      "La web se construyó alrededor de los proyectos del estudio: una navegación limpia que deja que las fotografías y la composición hagan el trabajo de convencer."
    ]
  },
  {
    slug: "web-porta-de-meia",
    category: "webs",
    meta: "Proyecto agrario · Logo + Web",
    title: "Porta de Meià",
    summary: "Marca y web para un proyecto familiar que recupera el aceite y el vino al pie del Montsec.",
    tags: ["Branding", "WordPress"],
    images: ["porta-de-meia-1.jpg", "porta-de-meia-2.jpg", "porta-de-meia-3.jpg"],
    live: "https://portademeia.cat/",
    intro: "Un proyecto agrario familiar en Vilanova de Meià que recupera cultivos tradicionales de aceite y vino, con una fuerte vinculación al territorio.",
    paragraphs: [
      "El logotipo reproduce una puerta con arco románico que esconde, dentro, la silueta de las montañas del Montsec: arquitectura y paisaje fundidos en un solo símbolo.",
      "La web tenía que contar una historia —la recuperación de la tierra familiar— y no solo vender un producto, así que trabajé mucho la narrativa visual y el ritmo de los contenidos."
    ]
  },
  {
    slug: "web-ucar-iure",
    category: "webs",
    meta: "Derecho civil · Rediseño web",
    title: "Ucar Iure",
    summary: "Rediseño de un despacho de abogadas: nueva arquitectura de contenidos y más claridad.",
    tags: ["UX", "WordPress", "SEO"],
    images: ["ucar-iure-1.jpg", "ucar-iure-2.jpg", "ucar-iure-3.jpg"],
    live: "https://www.ucariure.com/",
    intro: "Rediseño completo de la web de un despacho de abogadas especializado en derecho civil y familiar.",
    paragraphs: [
      "Repensé la arquitectura de la información para que los distintos servicios —herencias, familia, reclamaciones— fueran fáciles de encontrar y entender de un vistazo.",
      "A nivel visual, aposté por una estética limpia y seria que reforzara la confianza, trabajando también el SEO para mejorar su visibilidad en un sector muy competitivo."
    ]
  },
  {
    slug: "web-camping",
    category: "webs",
    meta: "Turismo · Web + Banner",
    title: "Camping Playa Parazuelos",
    summary: "Rediseño en equipo de un camping en primera línea de mar, con web y banner de gran formato.",
    tags: ["WordPress", "Publicidad"],
    images: ["camping-1.jpg", "camping-2.jpg", "camping-3.jpg"],
    live: "https://campingplayaparazuelos.com/",
    intro: "Proyecto hecho en equipo con Sergio: rediseño de la web de un camping situado en un entorno natural protegido, más un banner publicitario para autopista.",
    sections: [
      {
        images: ["camping-1.jpg", "camping-2.jpg", "camping-3.jpg"],
        text: "En la web trabajé la reorganización de las tipologías de parcela y servicios, priorizando la usabilidad en un site pensado sobre todo para gestionar reservas."
      },
      {
        images: ["camping-valla-1.jpg"],
        singleImage: true,
        text: "Banner de gran formato para soportes exteriores, con la foto aérea del camping junto al mar como elemento principal. Al ser un soporte que se lee en segundos y a distancia, prioricé un mensaje muy corto y un contraste alto entre el bloque de texto y la fotografía, con los iconos de servicios (parcelas, autocaravanas, electricidad, mascotas) como apoyo visual rápido, y preparé el archivo final a la medida y resolución exigidas por la imprenta."
      }
    ]
  },
  {
    slug: "web-vanessa",
    category: "webs",
    meta: "Coaching ejecutivo · Web",
    title: "Vanessa del Peral",
    summary: "Web corporativa para una profesional del coaching y el desarrollo organizacional.",
    tags: ["WordPress", "UX"],
    images: ["vanessa-1.jpg", "vanessa-2.jpg", "vanessa-3.jpg"],
    live: "https://vanessadelperal.com/",
    intro: "Web para una profesional del coaching ejecutivo, pensada para hablarle a directivos y empresas.",
    paragraphs: [
      "Estructuré los contenidos alrededor de sus distintos servicios —coaching ejecutivo, de equipos, transformación organizacional— con una estética minimalista y corporativa.",
      "La prioridad era la claridad: que cualquier empresa interesada entendiera en pocos segundos qué ofrecía y cómo contactar."
    ]
  },
  {
    slug: "web-dona-i-empresa",
    category: "webs",
    meta: "Asociación · Rediseño web",
    title: "Dona i Empresa",
    summary: "Reorganización completa de una web con mucho contenido disperso, ahora en bloques dinámicos.",
    tags: ["WordPress", "Gestión de contenidos"],
    images: ["dona-i-empresa-3.jpg", "dona-i-empresa-1.jpg", "dona-i-empresa-2.jpg"],
    live: "https://donaiempresa.cat/",
    intro: "Rediseño de la web de una asociación de Sant Just Desvern que da apoyo a mujeres emprendedoras y profesionales.",
    paragraphs: [
      "El reto principal era la cantidad y variedad de contenido: noticias, agenda, fichas de socias... Trabajé con bloques dinámicos y reutilizables para hacerlo todo más fácil de gestionar.",
      "El resultado es una web mucho más ordenada, que el equipo de la asociación puede actualizar sin depender de conocimientos técnicos avanzados."
    ]
  },
  {
    slug: "web-afrimar",
    category: "webs",
    meta: "Mantenimiento de comunidades · Web",
    title: "Afrimar",
    summary: "Web para una empresa familiar de mantenimiento de comunidades, con más de 30 años de oficio.",
    tags: ["WordPress", "SEO"],
    images: ["afrimar-1.jpg", "afrimar-2.jpg", "afrimar-3.jpg"],
    live: "https://afrimar.cat/",
    intro: "Carta de presentación digital para una empresa familiar dedicada al mantenimiento integral de comunidades de vecinos en Barcelona.",
    paragraphs: [
      "Organicé sus numerosos servicios técnicos —instalaciones, mantenimiento, certificaciones— de forma clara y jerárquica, priorizando una lectura rápida.",
      "El tono visual buscaba transmitir confianza y cercanía: valores centrales de una empresa con un carácter muy familiar."
    ]
  },
  {
    slug: "web-solidanca",
    category: "webs",
    meta: "Entidad social · Web",
    title: "Memoria digital Solidança",
    summary: "Una memoria anual en papel transformada en experiencia web interactiva.",
    tags: ["WordPress", "Editorial digital"],
    images: ["solidanca-3.jpg", "solidanca-1.jpg", "solidanca-2.jpg"],
    live: "https://solidanca.cat/memoria-2025/",
    intro: "Transformación de la memoria anual de una entidad de inserción sociolaboral en un formato web dinámico y visual.",
    paragraphs: [
      "El reto era convertir una gran cantidad de información institucional —datos, proyectos, impacto social— en una navegación ligera y comprensible.",
      "Trabajé mucho la jerarquía visual de los bloques de contenido para que la lectura fuera progresiva, sin perder el rigor de los datos originales."
    ]
  },
  {
    slug: "web-nuria",
    category: "webs",
    meta: "Yoga y bienestar · Web + Tienda",
    title: "Núria Chalamanch",
    summary: "Migración a WordPress con suscripciones de yoga online vía WooCommerce.",
    tags: ["WordPress", "WooCommerce"],
    images: ["nuria-3.jpg", "nuria-1.jpg", "nuria-2.jpg"],
    live: "https://nuriachalamanch.com/",
    intro: "Migración a WordPress de la web de una profesional del yoga, manteniendo su identidad visual.",
    paragraphs: [
      "Más allá de la migración, implementé un sistema de suscripciones a clases de yoga online con WooCommerce, con acceso privado a contenido exclusivo para socias.",
      "Es el proyecto que más lejos me ha llevado a nivel técnico: gestión de usuarias, grupos privados e integraciones dentro de WordPress."
    ]
  },
  {
    slug: "web-santjustimpulsa",
    category: "webs",
    meta: "Promoción económica · Web",
    title: "Sant Just Impulsa",
    summary: "Web institucional para una iniciativa municipal de promoción económica y dinamización local.",
    tags: ["WordPress", "Identidad institucional"],
    images: ["santjustimpulsa-1.jpg", "santjustimpulsa-2.jpg", "santjustimpulsa-3.jpg"],
    live: "https://santjustimpulsa.cat/",
    intro: "Diseño y desarrollo de la web de Sant Just Impulsa, la iniciativa de promoción económica y dinamización local del municipio, con la que también he colaborado en piezas promocionales impresas.",
    sections: [
      {
        images: ["santjustimpulsa-1.jpg", "santjustimpulsa-2.jpg", "santjustimpulsa-3.jpg"],
        text: "Construí una web en WordPress pensada para dar visibilidad a los recursos, ayudas y actividades dirigidas al tejido comercial y empresarial local de Sant Just Desvern, con una estructura de contenidos clara y fácil de mantener."
      },
      {
        images: ["santjustimpulsa-flyers-1.jpg"],
        singleImage: true,
        text: "Dos flyers para informar a empresas que quieren hacerse socias, con los beneficios de pertenecer a la red; y a posibles promotores o patrocinadores, con las distintas opciones de colaboración."
      },
      {
        images: ["sjimpulsa-fenix-1.jpg", "sjimpulsa-fenix-3.jpg", "sjimpulsa-fenix-2.jpg"],
        row: true,
        text: "Material gráfico diseñado para la jornada «Informe Fènix», una charla sobre el futuro económico de Catalunya que promocionaron."
      }
    ]
  },
  {
    slug: "web-audiocerver",
    category: "webs",
    meta: "Material escolar y audiovisual · Catálogo web",
    title: "Audiocerver",
    summary: "Catálogo web de material escolar y audiovisual, con lista de productos para pedir presupuesto.",
    tags: ["WordPress", "Catálogo de producto"],
    images: ["audiocerver-1.jpg", "audiocerver-2.jpg", "audiocerver-3.jpg"],
    live: "https://audiocerver.cat/",
    intro: "Audiocerver vende material escolar y audiovisual a través de un catálogo online. La web anterior apenas funcionaba, así que la rehice de cero.",
    paragraphs: [
      "Construí un catálogo de producto en WordPress a modo de tienda, pero sin venta ni pago directo: cada ficha permite añadir el artículo a una lista de productos deseados.",
      "Cuando el cliente termina su selección, el dueño recibe esa lista y le envía un presupuesto a medida, en vez de pasar por un proceso de compra online al uso."
    ]
  },
  {
    slug: "web-virens",
    category: "webs",
    meta: "Web",
    title: "Virens",
    summary: "Diseño y desarrollo de la web corporativa de Virens.",
    tags: ["WordPress"],
    images: ["virens-3.jpg", "virens-1.jpg", "virens-2.jpg"],
    live: "https://virens.es/",
    intro: "Diseño y desarrollo de la web corporativa de Virens, construida en WordPress con una estructura de contenidos clara y una navegación sencilla.",
    paragraphs: [
      "Me encargué de la maquetación responsive y de la organización de la información para facilitar la lectura en cualquier dispositivo."
    ]
  },
  {
    slug: "web-simplecae",
    category: "webs",
    meta: "Coordinación de seguridad · Web",
    title: "Simple CAE",
    summary: "Diseño y desarrollo web para un servicio de coordinación de actividades empresariales.",
    tags: ["WordPress"],
    images: ["simplecae-3.jpg", "simplecae-1.jpg", "simplecae-2.jpg"],
    live: "https://simplecae.com/",
    intro: "Web para Simple CAE, un servicio especializado en coordinación de actividades empresariales, con una estructura pensada para explicar con claridad un servicio técnico.",
    paragraphs: [
      "Desarrollé el sitio en WordPress priorizando una comunicación directa de los servicios, sin perder un tono profesional y de confianza."
    ]
  },
  {
    slug: "web-attikum",
    category: "webs",
    meta: "Inversión · Web",
    title: "Attikum Capital",
    summary: "Diseño y desarrollo web para una firma de inversión.",
    tags: ["WordPress"],
    images: ["attikum-3.jpg", "attikum-1.jpg", "attikum-2.jpg"],
    live: "https://attikumcapital.com/",
    intro: "Web para Attikum Capital, una firma de inversión, con una estética sobria y corporativa acorde al sector financiero.",
    paragraphs: [
      "Desarrollé el sitio en WordPress cuidando la jerarquía visual y la credibilidad de la marca, dos aspectos clave en un proyecto de este tipo."
    ]
  },

  /* ================= LOGOTIPOS ================= */
  {
    slug: "logo-decoralex",
    category: "logos",
    meta: "Reformas · Identidad visual",
    title: "Decoralex",
    summary: "Rodillo de pintura convertido en símbolo. Azul, contundente y fácil de leer a cualquier tamaño.",
    tags: ["Branding"],
    images: ["logo-decoralex-1.png"],
    intro: "El símbolo principal de este logotipo es un rodillo de pintura, un elemento directamente reconocible del sector de las reformas.",
    paragraphs: [
      "Trabajé una tipografía de trazo contundente, fácil de leer, y una gama de azules que transmite confianza y profesionalidad.",
      "Se pensó desde el principio para funcionar bien en cualquier formato y soporte, tanto digital como impreso."
    ]
  },
  {
    slug: "logo-palau-del-born",
    category: "logos",
    meta: "Restauración · Identidad visual",
    title: "Palau del Born",
    summary: "Tipografía clásica y verdes suaves para un restaurante con carácter propio.",
    tags: ["Branding", "Manual de estilo"],
    images: ["logo-palau-1.png"],
    intro: "Una composición tipográfica como elemento principal, con una estética clásica y refinada.",
    paragraphs: [
      "Los verdes suaves y los colores neutros aportan calma y elegancia, coherentes con el ambiente del restaurante.",
      "Desarrollé también una versión horizontal y distintas variantes cromáticas, recogidas en un manual de estilo completo."
    ]
  },
  {
    slug: "logo-inner-edge",
    category: "logos",
    meta: "Interiorismo · Identidad visual",
    title: "Inner Edge Studio",
    summary: "Monograma tipográfico «IE» para un estudio de interiorismo, elegante y atemporal.",
    tags: ["Branding"],
    images: ["logo-inner-edge-1.png"],
    intro: "Identidad construida a partir de un enfoque tipográfico contemporáneo y muy depurado.",
    paragraphs: [
      "Trabajé un monograma que superpone las letras «I» y «E» en una tipografía serif de trazo elegante, acompañado de «STUDIO» en caja alta. Funciona tanto en negro como en blanco, según el soporte."
    ]
  },
  {
    slug: "logo-mmc",
    category: "logos",
    meta: "Industria · Identidad visual",
    title: "MMC Montajes",
    summary: "Iniciales construidas en volumen para una empresa de montajes industriales.",
    tags: ["Branding"],
    images: ["logo-mmc-1.png"],
    intro: "Un logotipo construido geométricamente a partir de las iniciales «MMC», pensado para una empresa de montajes industriales.",
    paragraphs: [
      "El trabajo de volumen y perspectiva evoca conceptos como estructura y solidez; el gris oscuro refuerza la percepción de seguridad y profesionalidad."
    ]
  },
  {
    slug: "logo-porta-de-meia",
    category: "logos",
    meta: "Proyecto agrario · Identidad visual",
    title: "Porta de Meià",
    summary: "Una puerta con arco románico esconde la silueta de las montañas del Montsec.",
    tags: ["Branding"],
    images: ["logo-porta-meia-1.png"],
    intro: "Un símbolo construido sobre un concepto muy directo: una puerta con arco románico que contiene, dentro, el paisaje del Montsec.",
    paragraphs: [
      "Las iniciales «PDM» aparecen integradas como segundo nivel de lectura, aportando contundencia visual sin perder el concepto territorial."
    ]
  },
  {
    slug: "logo-jgarcia",
    category: "logos",
    meta: "Carpintería · Identidad visual",
    title: "J. García",
    summary: "Vetas de madera reinterpretadas como marca para un taller de carpintería.",
    tags: ["Branding"],
    images: ["logo-jgarcia-1.png"],
    intro: "Logotipo inspirado directamente en la materia prima con la que trabaja la empresa: la madera.",
    paragraphs: [
      "Las vetas naturales se convierten en líneas orgánicas que evocan textura y movimiento, en una composición minimalista y muy aplicable."
    ]
  },
  {
    slug: "logo-attikum",
    category: "logos",
    meta: "Inversión · Identidad visual",
    title: "Attikum Capital",
    summary: "Símbolo de barras ascendentes para una firma de inversión.",
    tags: ["Branding"],
    images: ["logo-attikum-1.png"],
    intro: "Identidad para una firma de inversión, con un símbolo que remite directamente al sector.",
    paragraphs: [
      "El icono combina un punto y tres barras de altura creciente —a modo de gráfico en subida— que forman una «A» abstracta, en azul corporativo, acompañada de la palabra «ATTIKUM» en caja alta."
    ]
  },

  /* ================= EDITORIAL ================= */
  {
    slug: "ed-imar",
    category: "editorial",
    meta: "Sector industrial · Catálogo",
    title: "Imar",
    summary: "Catálogo corporativo para un fabricante de máquinas envasadoras activo desde 1957.",
    tags: ["Maquetación", "Diseño industrial"],
    images: ["imar-1.jpg", "imar-2.jpg", "imar-3.jpg"],
    row: true,
    intro: "Catálogo comercial y técnico para la primera empresa española dedicada exclusivamente a máquinas envasadoras automáticas.",
    paragraphs: [
      "Estructuré los contenidos —máquinas, formatos de envase, especificaciones técnicas— con una retícula clara pensada para un público profesional.",
      "Tipografías sans-serif y colores sobrios refuerzan una imagen técnica y de confianza, alineada con el sector industrial de la marca."
    ]
  },
  {
    slug: "ed-chocolate-passion",
    category: "editorial",
    meta: "Alimentación premium · Catálogo",
    title: "Chocolate Passion",
    summary: "Catálogo de la colección «San Valentín, Pascua y Primavera 2026».",
    tags: ["Maquetación", "Diseño editorial"],
    images: ["chocolate-cataleg-1.jpg"],
    singleImage: true,
    intro: "Catálogo comercial para la colección de temporada de una marca de chocolate premium vinculada a Ludomar Group.",
    paragraphs: [
      "Maqueté el catálogo de productos de primavera, dando todo el protagonismo al producto con una línea gráfica cálida y aspiracional propia del sector gourmet.",
      "La cubierta lleva un acabado con reserva UVI, pensado desde la maquetación para reforzar el carácter premium de la pieza impresa."
    ]
  },
  {
    slug: "ed-dental-surgi-import",
    category: "editorial",
    meta: "Sector dental · Flyers",
    title: "Dental Surgi Import",
    summary: "Flyers comerciales y promocionales para un distribuidor de material e implantes dentales.",
    tags: ["Maquetación", "Diseño promocional"],
    images: ["dental-surgi-import-1.jpg"],
    singleImage: true,
    intro: "Serie de flyers promocionales para Dental Surgi Import, distribuidor de material e implantes dentales, pensados para ferias del sector y campañas puntuales de oferta.",
    paragraphs: [
      "Trabajé una retícula clara que da protagonismo al producto —implantes, instrumental, packaging— sobre la paleta corporativa en azules y turquesas.",
      "Cada flyer combina la información técnica (presentaciones, referencias, condiciones de la oferta) con una jerarquía visual que permite leer el precio y la promoción de un vistazo."
    ]
  },
  {
    slug: "ed-snack55-menus",
    category: "editorial",
    meta: "Restauración · Cartas",
    title: "Snack 55",
    summary: "Diseño de las cartas del restaurante, en catalán, castellano e inglés, más la carta de cócteles.",
    tags: ["Maquetación", "Diseño editorial"],
    images: ["snack55-menu-1.jpg", "snack55-menus-colores.jpg", "snack55-cocktails-1.jpg"],
    intro: "Diseño de las cartas de Snack 55: el menú del restaurante en tres idiomas —catalán, castellano e inglés— y una carta de cócteles aparte.",
    sections: [
      {
        images: ["snack55-menu-1.jpg", "snack55-menus-colores.jpg", "snack55-cocktails-1.jpg"],
        row: true,
        text: "Para la carta principal trabajé una retícula clara con secciones bien diferenciadas (hamburguesas, burritos, bocadillos, ensaladas...), pensada para que fuera fácil de leer tanto en mesa como para encargar en barra. Cada versión de idioma lleva además su propia combinación de colores —verde y rojo para catalán, rojo y azul para castellano, turquesa y amarillo para inglés— para poder identificar de un vistazo cuál es cuál, sin tener que leer el texto. La carta de cócteles sigue la misma línea gráfica que las de comida, pero con su propia portada ilustrada, pensada como una pieza independiente que se puede pedir aparte."
      }
    ]
  },

  /* ================= OTROS (packaging & flyers) ================= */
  {
    slug: "alt-chocolate-passion-packaging",
    category: "altres",
    meta: "Alimentación · Packaging",
    title: "Chocolate Passion — Trufas de cacao",
    summary: "Envase para la campaña del Día de la Madre, con faja roja y corazones dorados.",
    tags: ["Packaging", "Preparación de artes finales"],
    images: ["packaging-1.jpg"],
    singleImage: true,
    live: "https://chocolatepassion.eu/novedades/ludomar-trufas-cacao",
    intro: "Diseño del envase de unas trufas de cacao para la campaña del Día de la Madre.",
    paragraphs: [
      "Una bandeja marrón oscuro como base, una faja roja con corazones dorados estampados y una reserva UVI para un acabado metalizado que refuerza la sensación premium.",
      "Organicé toda la información obligatoria —ingredientes, valor nutricional, reciclaje— dentro de la faja, sin restar protagonismo visual a la marca."
    ]
  },
  {
    slug: "alt-flyers",
    category: "altres",
    meta: "Restauración · Flyer",
    title: "Poca Solta",
    summary: "Flyer para anunciar la apertura del segundo local del restaurante.",
    tags: ["Diseño promocional", "Imprenta"],
    images: ["flyers-1.jpg"],
    singleImage: true,
    intro: "Pieza promocional de pequeño formato para anunciar la apertura del segundo local del restaurante Poca Solta.",
    paragraphs: [
      "Un diseño directo y vistoso, pensado para repartirse en mano y para redes sociales, con la nueva dirección y la fecha de apertura como protagonistas."
    ]
  }

];
