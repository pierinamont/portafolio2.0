// guardamos elementos
let menuTop = document.getElementById('menu-top');
let menuBottom = document.getElementById('menu-bottom');


// elementos de cards con botón

//cards
let dribbleContainer = document.getElementById('dribble-container');
let codepenContainer = document.getElementById('codepen-container');

//btn
let dribbleBtn = document.getElementById('dribble-btn');
let codepenBtn = document.getElementById('codepen-btn');

// texto btn 
let proyectoBtn  = document.getElementById('proyecto-btn');

//texto 
let dribbleDescription = document.getElementById('dribble-description');
let codepenDescription = document.getElementById('codepen-description');

//icon
let dribbleIcon = document.getElementById('dribble-icon');
let codepenIcon = document.getElementById('codepen-icon');


// Función para cambiar de color a card cuando hay hover 
let hover = false;

dribbleBtn.addEventListener("mouseover", () => {
  // alert('event')
  hover = true;
  changeDribbleColor();
  
});

function changeDribbleColor() {
  if(hover === true) {
    dribbleContainer.style.background="#0179FE";
    proyectoBtn.style.color="#0179FE";
    dribbleBtn.style.background="#ffffff";
    dribbleBtn.style.boxShadow="0px 1px 12px 0px rgba(0, 0, 0, 0.20)";
    dribbleDescription.style.color= "#ffffff";
    dribbleIcon.style.backgroundImage= 'url(../assets/arrow-blue.png)';
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