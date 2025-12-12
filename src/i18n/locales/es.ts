export const es = {
  "nav.home": "Inicio",
  "nav.about": "Sobre mí",
  "nav.projects": "Proyectos",
  "nav.contact": "Contacto",
  "footer.developedBy": "Desarrollado por WanderleeDev 2025",
  "hero.description": "Desarrollador web mostrando proyectos y habilidades.",
  "form.name": "Nombre",
  "form.name.placeholder": "Tu nombre",
  "form.email": "Correo electrónico",
  "form.email.placeholder": "tu@email.com",
  "form.subject": "Asunto",
  "form.subject.placeholder": "Consulta sobre proyecto",
  "form.message": "Mensaje",
  "form.message.placeholder": "Cuéntame sobre tu proyecto...",
  "form.submit": "Enviar Mensaje",

  skills: [
    {
      title: "Mi Stack",
      techs: [
        { color: "#13AA52", icon: "devicon:mongodb" },
        { color: "#9e9e9e", icon: "devicon:express" },
        { color: "#DD0031", icon: "devicon:angular" },
        { color: "#339933", icon: "devicon:nodejs" },
      ],
    },
    {
      title: "Frontend",
      techs: [
        { color: "#E44D26", icon: "devicon:html5" },
        { color: "#4884B7", icon: "devicon:css3" },
        { color: "#F0DB4F", icon: "devicon:javascript" },
        { color: "#007ACC", icon: "devicon:typescript" },
        { color: "#00d8ff", icon: "devicon:react" },
        { color: "#9e9e9e", icon: "devicon:nextjs" },
        { color: "#ff5d01", icon: "devicon:astro" },
        { color: "#CC6699", icon: "devicon:sass" },
        { color: "#06B6D4", icon: "devicon:tailwindcss" },
        { color: "#d2227d", icon: "devicon:ngrx" },
      ],
    },
    {
      title: "Backend",
      techs: [
        { color: "#ffc331", icon: "devicon:python" },
        { color: "#009688", icon: "devicon:fastapi" },
        { color: "#E0234E", icon: "devicon:nestjs" },
        { color: "#ED8B00", icon: "devicon:java" },
        { color: "#6DB33F", icon: "devicon:spring" },
      ],
    },
    {
      title: "Otros",
      techs: [
        { color: "#42b883", icon: "devicon:vuejs" },
        { color: "#00DC82", icon: "devicon:nuxtjs" },
        { color: "#8C38EF", icon: "devicon:bootstrap" },
      ],
    },
    {
      title: "Herramientas",
      techs: [
        { color: "#F05032", icon: "devicon:git" },
        { color: "#9e9e9e", icon: "devicon:github" },
        { color: "#2496ED", icon: "devicon:docker" },
        { color: "#0079BF", icon: "devicon:trello" },
      ],
    },
  ],

  projects: [
    {
      title: "Ecommerce",
      description:
        "Ecommerce con sistema de autenticación, carrito de compras, notificaciones y uso de local storage",
      problem:
        "Los usuarios necesitaban una experiencia de compra fluida con persistencia de datos del carrito y notificaciones en tiempo real para actualizaciones de pedidos.",
      solution:
        "Construí una plataforma de ecommerce completa con Angular, implementando autenticación JWT, local storage para persistencia del carrito y un sistema de notificaciones para el seguimiento de pedidos.",
      impact:
        "Creé una experiencia de compra intuitiva con un proceso de pago un 40% más rápido y mejor retención de usuarios a través de la funcionalidad de carrito persistente.",
      demo_url: "https://clior.vercel.app/",
      technologies: ["angular", "sass", "typeScript", "flowbite"],
      image:
        "https://res.cloudinary.com/dy8gpozi6/image/upload/v1765154110/clior_biw8pq.webp",
      label: "ver demo ecommerce",
    },
    {
      title: "Ubuntu desktop",
      description:
        "Copia funcional del escritorio de Ubuntu 22.0.4, calendario, terminal, editor de código entre otros",
      problem:
        "Demostrar gestión de estado compleja y arquitectura de componentes en un escenario de aplicación del mundo real.",
      solution:
        "Recreé el entorno de escritorio de Ubuntu usando Angular y NgRx para gestión de estado, implementando componentes funcionales de terminal, calendario y editor de código.",
      impact:
        "Mostró habilidades avanzadas en Angular y patrones de gestión de estado, demostrando capacidad para construir aplicaciones complejas e interactivas.",
      demo_url: "https://github.com/",
      technologies: ["angular", "tailwindCss", "typeScript", "ngrx"],
      image:
        "https://res.cloudinary.com/dy8gpozi6/image/upload/v1765154111/ubuntu_e1zsgq.webp",
      label: "ver demo ubuntu",
    },
    {
      title: "Retro Blog",
      description:
        "Desarrollado con la librería Nes CSS, presenta pequeños blogs de contenido estático y usa animaciones de scroll CSS",
      problem:
        "Crear una experiencia de blog atractiva con estética retro única mientras se mantiene el rendimiento web moderno.",
      solution:
        "Aproveché Astro para generación de sitios estáticos y Nes CSS para estilo retro, implementando animaciones de scroll CSS para una experiencia de lectura interactiva.",
      impact:
        "Logré una puntuación Lighthouse de 95+ con identidad visual única, demostrando capacidad para mezclar creatividad con rendimiento.",
      demo_url: "https://retro-blog-two.vercel.app/",
      technologies: ["astro", "css", "typeScript"],
      image:
        "https://res.cloudinary.com/dy8gpozi6/image/upload/v1765154110/retro_blog_fejpmv.webp",
      label: "ver demo retro blog",
    },
    {
      title: "Switch 2 Clone",
      description:
        "Desarrollado usando unidades de viewport para lograr un diseño responsive a mayor escala",
      problem:
        "Crear un clon responsive pixel-perfect de la landing page de Nintendo Switch 2 en todos los tamaños de dispositivo.",
      solution:
        "Utilicé Vue 3 y Tailwind CSS con unidades de viewport para escalado fluido, asegurando experiencia visual consistente en dispositivos.",
      impact:
        "Entregué un diseño responsive que escala perfectamente desde móviles hasta pantallas 4K, mostrando habilidades avanzadas de CSS y diseño responsive.",
      demo_url: "https://dainty-pika-231bcd.netlify.app/",
      technologies: ["vue", "tailwindCss", "typeScript"],
      image:
        "https://res.cloudinary.com/dy8gpozi6/image/upload/v1765154111/nintendo_shots_b0pr6w.webp",
      label: "ver demo switch 2 clone",
    },
  ],

  extraProjects: [
    {
      title: "Angular Projects",
      icon: "Angular",
      description: "Algunos de mis proyectos hechos con Angular.",
      link: "https://entry-page-angular.vercel.app/",
    },
    {
      title: "React Projects",
      icon: "React",
      link: "https://react-showcase-three.vercel.app/",
      description: "Algunos de mis proyectos hechos con React y Nextjs.",
    },
    {
      title: "Vue Projects",
      icon: "Vuejs",
      link: "https://vue-showcase-8bg.pages.dev/",
      description: "Algunos de mis proyectos hechos con Vue.",
    },
  ],

  navLinks: [
    {
      name: "skills",
      icon: "ri:code-s-slash-line",
      label: "Habilidades",
    },
    {
      name: "projects",
      icon: "ri:folder-2-line",
      label: "Proyectos",
    },
    {
      name: "extras",
      icon: "ri:archive-2-line",
      label: "Extras",
    },
    {
      name: "contact",
      icon: "ri:mail-line",
      label: "Contacto",
    },
  ],
};
