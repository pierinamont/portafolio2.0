// guardamos elementos
let menuTop = document.getElementById('menu-top');
let menuBottom = document.getElementById('menu-bottom');

// función para manejar la visibilidad de los menús
function changeMenus() {
  if (window.innerWidth <= 740) {
    menuTop.style.display = 'none';
    menuBottom.style.display = '';
  } else {
    menuTop.style.display = '';
    menuBottom.style.display = 'none';
  }
}

// llamar función al cargar página 
changeMenus();

