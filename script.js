document.addEventListener("DOMContentLoaded", () => {
  let container = document.getElementById('swiper-wrapper');
  let btnToggle = document.getElementById('menu-toggle');
  let sidebar = document.getElementById('sidebar');
  let textArea = document.getElementById('auto-expand');
  let boton = document.getElementById('modo-btn');
  let body = document.body;

  let projects = [
    {nombre: 'Shopping', imagen: './assets/img/shopping-1.png', tecnologias: ["html", "css", "js"]},
    {nombre: 'Shopping', imagen: './assets/img/shopping-2.png', tecnologias: ["html", "css", "js"]},
    {nombre: 'Shopping', imagen: './assets/img/shopping-3.png', tecnologias: ["html", "css", "js"]},
    {nombre:'Gestor De Alumnos y Cursos', imagen:'./assets/img/login-students.png', tecnologias: ["html", "css","typescript","angular"],repositorio:'https://github.com/Franco-serra/angular-coder-entrega-final'},
    {nombre:'Gestor De Alumnos y Cursos', imagen:'./assets/img/dashboard-students.png', tecnologias: ["html", "css","typescript","angular"],repositorio:'https://github.com/Franco-serra/angular-coder-entrega-final'},
    {nombre:'Gestor De Alumnos y Cursos', imagen:'./assets/img/students-students.png', tecnologias: ["html", "css","typescript","angular"],repositorio:'https://github.com/Franco-serra/angular-coder-entrega-final'},
    {nombre:'Gestor De Alumnos y Cursos', imagen:'./assets/img/courses-students.png', tecnologias: ["html", "css","typescript","angular"],repositorio:'https://github.com/Franco-serra/angular-coder-entrega-final'},
    {nombre:'Gestor De Alumnos y Cursos', imagen:'./assets/img/users-students.png', tecnologias: ["html", "css","typescript","angular"], repositorio:'https://github.com/Franco-serra/angular-coder-entrega-final'}
  ];


  projects.forEach(p => {
    const card = document.createElement('div');
    card.className = "swiper-slide";

    const iconHTML = p.tecnologias.map(tech => {
      let iconClass = "";
      switch (tech) {
        case "html": iconClass = "fab fa-html5 html-icon"; break;
        case "css": iconClass = "fab fa-css3-alt css-icon"; break;
        case "sass": iconClass = "fab fa-sass sass-icon"; break;
        case "bootstrap": iconClass = "fab fa-bootstrap bootstrap-icon"; break;
        case "js": iconClass = "fab fa-js js-icon"; break;
        case "typescript": iconClass = "devicon-typescript-plain ts-icon"; break;
        case "angular": iconClass = "fab fa-angular angular-icon"; break;
        case "python": iconClass = "fab fa-python python-icon"; break;
        case "git": iconClass = "fab fa-git-alt git-icon"; break;
        case "github": iconClass = "fa-brands fa-github"; break;
        default: iconClass = ""; break;
      }
      return `<li><i class="${iconClass}" title="${tech}"></i></li>`;
    }).join('');

    card.innerHTML = `
      <img src="${p.imagen}" alt="Preview de ${p.nombre}">
      <h3>${p.nombre}</h3>
      <ul class="tech-icons">${iconHTML}</ul>
      <p>Repositorio: </p>
      <a href="${p.repositorio}" target="_blank" ><i class="fa-brands fa-github"></i></a>
    `;

    container.appendChild(card);
  });

  btnToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    btnToggle.classList.toggle('active');
  });

  document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('active');
      btnToggle.classList.remove('active');
    });
  });

  textArea.addEventListener('input', () => {
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';
  });

  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  });

  if (localStorage.getItem('modo') === 'oscuro') {
    body.classList.add('dark-mode');
  }

  boton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    let modo = body.classList.contains('dark-mode') ? 'oscuro' : 'claro';
    localStorage.setItem('modo', modo);
  });
});
