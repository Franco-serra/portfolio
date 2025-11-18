document.addEventListener("DOMContentLoaded", () => {
  let container = document.getElementById('project-card');
  let btnToggle = document.getElementById('menu-toggle');
  let sidebar = document.getElementById('sidebar');
  let boton = document.getElementById('modo-btn');
  let body = document.body;

let projects = [
  {
    nombre: 'E-commerce Shopping',
    imagen: './assets/img/shopping-1.png', 
    descripcion: 'Tienda online completa con carrito de compras, sistema de filtros y diseño responsive. Implementa funcionalidades de e-commerce moderno.',
    tecnologias: ["html", "css", "js"],
    repositorio: "https://github.com/Franco-serra/entrega3-Serra",
    url: "https://franco-serra.github.io/entrega3-Serra/"
  },
  {
    nombre: 'Gestor De Alumnos y Cursos',
    imagen: './assets/img/login-students.png',
    descripcion: 'Sistema de gestión académica con autenticación, CRUD de estudiantes y cursos, panel administrativo y base de datos en tiempo real.',
    tecnologias: ["html", "css", "typescript", "angular"],
    repositorio: 'https://github.com/Franco-serra/angular-coder-entrega-final',
    url: 'https://angular-students-app.vercel.app/'
  },]


  projects.forEach(p => {
    const card = document.createElement('div');
    card.className = "project-card";

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
  <div class="project-content">
    <div class="project-badge">Web App</div>
    <h3 class="project-title">${p.nombre}</h3>
    <p class="project-description">${p.descripcion}</p>
    
    <div class="features-grid">
      <div class="feature">
        <span class="feature-icon">🚀</span>
        <span>Moderno</span>
      </div>
      <div class="feature">
        <span class="feature-icon">📱</span>
        <span>Responsive</span>
      </div>
      <div class="feature">
        <span class="feature-icon">⚡</span>
        <span>Performance</span>
      </div>
      <div class="feature">
        <span class="feature-icon">🔧</span>
        <span>Maintainable</span>
      </div>
    </div>
  </div>
  
  <div class="tech-stack">
    ${p.tecnologias.map(tech => 
      `<span class="tech-tag">${tech.toUpperCase()}</span>`
    ).join('')}
  </div>
  
  <div class="project-links">
    <a href="${p.url}" target="_blank" class="btn-demo">
      <i class="fas fa-external-link-alt"></i>
      Live Demo
    </a>
    <a href="${p.repositorio}" target="_blank" class="btn-code">
      <i class="fab fa-github"></i>
      Code
    </a>
  </div>
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

  if (localStorage.getItem('modo') === 'oscuro') {
    body.classList.add('dark-mode');
  }

  boton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    let modo = body.classList.contains('dark-mode') ? 'oscuro' : 'claro';
    localStorage.setItem('modo', modo);
  });
});
