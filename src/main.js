// guardamos elementos
let menuTop = document.getElementById('menu-top');
let menuBottom = document.getElementById('menu-bottom');


// elementos de cards con botón /////////////////////////////////////

//cards
let dribbleContainer = document.getElementById('dribble-container');
let codepenContainer = document.getElementById('codepen-container');

//btn
let dribbleBtn = document.getElementById('dribble-btn');
let codepenBtn = document.getElementById('codepen-btn');

// texto btn 
let dribbleBtnText  = document.getElementById('dribble-btn-text');
let codepenBtnText  = document.getElementById('dribble-btn-text');

//texto 
let dribbleDescription = document.getElementById('dribble-description');
let codepenDescription = document.getElementById('codepen-description');

//icon
let dribbleIcon = document.getElementById('dribble-icon');
let codepenIcon = document.getElementById('codepen-icon');


// Función para cambiar de color a card cuando hay hover 

//variable para cambiar estados de hover
let hover = false;

// hover
dribbleBtn.addEventListener("mouseover", () => {
  // cambia variable a true
  hover = true;
  // llama la función
  changeDribbleColor();
});

// cursor sale del elemento
dribbleBtn.addEventListener("mouseleave", () => {
  // cambia variable a false
  hover = false;
  // llama la función
  changeDribbleColor();
  
});

// función para cambiar colores en base al estado del hover
function changeDribbleColor() {
  // si hover es true cambiar colores
  if(hover === true) {
    dribbleContainer.style.background="#0179FE";
    dribbleBtnText.style.color="#0179FE";
    dribbleBtn.style.background="#ffffff";
    dribbleBtn.style.boxShadow="0px 1px 12px 0px rgba(0, 0, 0, 0.20)";
    dribbleDescription.style.color= "#ffffff";
    dribbleIcon.style.backgroundImage= 'url(../assets/arrow-blue.png)';
  } else {
    // regresar a los estilos del principio
    dribbleContainer.removeAttribute('style');
    dribbleBtnText.removeAttribute('style');
    dribbleBtn.removeAttribute('style');
    dribbleBtn.removeAttribute('style');
    dribbleDescription.removeAttribute('style');
    dribbleIcon.removeAttribute('style');
  }
}

// función para manejar la visibilidad de los menús
// function changeMenus() {
//   if (window.innerWidth <= 740) {
//     menuTop.style.display = 'none';
//     menuBottom.style.display = '';
//   } else {
//     menuTop.style.display = '';
//     menuBottom.style.display = 'none';
//   }
// }

// llamar función al cargar página 
// changeMenus();