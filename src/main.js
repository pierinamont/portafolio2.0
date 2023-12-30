// guardamos elementos
let menuTop = document.getElementById('menu-top');
let menuBottom = document.getElementById('menu-bottom');


// elementos de cards con botón ////////////////////////////////////

//cards
let dribbleContainer = document.getElementById('dribble-container');
let codepenContainer = document.getElementById('codepen-container');

//btn
let dribbleBtn = document.getElementById('dribble-btn');
let codepenBtn = document.getElementById('codepen-btn');

// texto btn 
let dribbleBtnText  = document.getElementById('dribble-btn-text');
let codepenBtnText  = document.getElementById('codepen-btn-text');

//texto 
let dribbleDescription = document.getElementById('dribble-description');
let codepenDescription = document.getElementById('codepen-description');

// texto 
let githubLink = document.getElementById('github-link')
let codepentext = document.getElementById('codepen-text')

//icon
let dribbleIcon = document.getElementById('dribble-icon');
let codepenIcon = document.getElementById('codepen-icon');




// Función para cambiar de color a card cuando hay hover 

//variable para cambiar estados de hover
let dribbleHover = false;

// hover
dribbleBtn.addEventListener("mouseover", () => {
  // cambia variable a true
  dribbleHover = true;
  // llama la función
  changeDribbleColor();
});

// cursor sale del elemento
dribbleBtn.addEventListener("mouseleave", () => {
  // cambia variable a false
  dribbleHover = false;
  // llama la función
  changeDribbleColor();
  
});

// función para cambiar colores en base al estado del hover
function changeDribbleColor() {
  // si hover es true cambiar colores
  if(dribbleHover === true) {
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


// Función para cambiar de color a card cuando hay hover 

//variable para cambiar estados de hover
let codepenHover = false;

// hover
codepenBtn.addEventListener("mouseover", () => {
  // cambia variable a true
  codepenHover = true;
  // llama la función
  changeCodepenColor();
});

// cursor sale del elemento
codepenBtn.addEventListener("mouseleave", () => {
  // cambia variable a false
  codepenHover = false;
  // llama la función
  changeCodepenColor();
});


// función para cambiar colores en base al estado del hover
function changeCodepenColor() {
  // si hover es true cambiar colores
  if(codepenHover === true) {
    codepenContainer.style.background="#0179FE";
    codepenBtnText.style.color="#0179FE";
    codepenBtn.style.background= "#ffffff";
    githubLink.style.color = "#ffffff";
    codepentext.style.color = "#ffffff";
    codepenBtn.style.boxShadow="0px 1px 12px 0px rgba(0, 0, 0, 0.20)";
    codepenDescription.style.color= "#ffffff";
    codepenIcon.style.backgroundImage= 'url(../assets/arrow-blue.png)';
  } else {
    // regresar a los estilos del principio
    codepenContainer.removeAttribute('style');
    codepenBtnText.removeAttribute('style');
    codepenBtn.removeAttribute('style');
    codepenBtn.removeAttribute('style');
    codepenDescription.removeAttribute('style');
    codepenIcon.removeAttribute('style');
    githubLink.removeAttribute('style');
    codepentext.removeAttribute('style');
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