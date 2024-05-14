// Elementos de menú ////////////////////////////////////
let menuTop = document.getElementById('menu-top');
let menuBottom = document.getElementById('menu-bottom');


// menu top
let inicioDiv = document.getElementById('inicio');
let recursosDiv = document.getElementById('recursos');
let proyectosDiv = document.getElementById('proyectos');

let inicioBtnText = document.getElementById("inicio-btn-text");
let recursosBtnText = document.getElementById("recursos-btn-text");
let proyectosBtnText = document.getElementById("proyectos-btn-text");

let inicioBtn = document.getElementById('iniciobtn');
let recursosBtn = document.getElementById('recursosbtn');
let proyectosBtn = document.getElementById('proyectosbtn');


// menu bottom
let inicioDiv2 = document.getElementById('inicio2');
let recursosDiv2 = document.getElementById('recursos2');
let proyectosDiv2 = document.getElementById('proyectos2');

let inicioBtnText2 = document.getElementById("inicio-btn-text2");
let recursosBtnText2 = document.getElementById("recursos-btn-text2");
let proyectosBtnText2 = document.getElementById("proyectos-btn-text2");

let inicioBtn2 = document.getElementById('iniciobtn2');
let recursosBtn2 = document.getElementById('recursosbtn2');
let proyectosBtn2 = document.getElementById('proyectosbtn2');


// iconos del menu
let linkedin = document.getElementById('linkedin');
let resume = document.getElementById('resume');
let email = document.getElementById('email');


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


// Función para hacer click and drag a las cards

let sliderDribbble = document.querySelector('.content-cards-dribbble');
sliderDribbble.scrollTop = 100;
sliderDribbble.scrollLeft = 150;

let pos = { top: 0, left: 0, x: 0, y: 0 };

const mouseDownHandler = function (e) {
    pos = {
        // The current scroll
        left: sliderDribbble.scrollLeft,
        top: sliderDribbble.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};
const mouseMoveHandler = function (e) {
  // How far the mouse has been moved
  const dx = e.clientX - pos.x;
  const dy = e.clientY - pos.y;

  // Scroll the element
  sliderDribbble.scrollTop = pos.top - dy;
  sliderDribbble.scrollLeft = pos.left - dx;
};

const mouseUpHandler = function () {
  document.removeEventListener('mousemove', mouseMoveHandler);
  document.removeEventListener('mouseup', mouseUpHandler);

  sliderDribbble.style.cursor = 'grab';
  sliderDribbble.style.removeProperty('user-select');
};




// Función para cambiar de color a card cuando hay hover 

//variable para cambiar estados de hover
let dribbleHover = false;
let codepenHover = false;
let linkedinHover = false;
let resumeHover = false;
// let emailHover = false;


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
    dribbleBtnText.style.fontWeight="600";
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
    codepenBtnText.style.fontWeight="600";
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



// Función para cambiar de color iconos del menu  

// linkedin ////////////////////////////////////

linkedin.addEventListener("mouseover", () => {
  // cambia variable a true
  linkedinHover = true;
  // llama la función
  changeMenuIconsColor();
});


// cursor sale del elemento
linkedin.addEventListener("mouseleave", () => {
  // cambia variable a false
  linkedinHover = false;
  // llama la función
  changeMenuIconsColor();
  
});

// resume ////////////////////////////////////

// cursor sale del elemento
resume.addEventListener("mouseover", () => {
  // cambia variable a true
  resumeHover = true;
  // llama la función
  changeMenuIconsColor();
});

// cursor sale del elemento
resume.addEventListener("mouseleave", () => {
  // cambia variable a false
  resumeHover = false;
  // llama la función
  changeMenuIconsColor();
  
});

// email ////////////////////////////////////

// // cursor sale del elemento
// email.addEventListener("mouseover", () => {
//   // cambia variable a true
//   emailHover = true;
//   // llama la función
//   changeMenuIconsColor();
// });

// // cursor sale del elemento
// email.addEventListener("mouseleave", () => {
//   // cambia variable a false
//   emailHover = false;
//   // llama la función
//   changeMenuIconsColor();
  
// });


// función para cambiar color de iconos 
function changeMenuIconsColor() {

  // si hover es true cambiar colores

  // linkedin
  if(linkedinHover === true) {
    linkedin.style.backgroundImage='url(../assets/linkedin-blue.svg)';

  } else {
    // regresar a los estilos del principio
    linkedin.removeAttribute('style');
   
  }

  // resume
  if(resumeHover === true) {
    resume.style.backgroundImage='url(../assets/resume-blue.svg)';

  } else {
    // regresar a los estilos del principio
    resume.removeAttribute('style');
   
  }

  // email 

  // if(emailHover === true) {
  //   email.style.backgroundImage='url(../assets/email-blue.svg)';

  // } else {
  //   // regresar a los estilos del principio
  //   email.removeAttribute('style');
   
  // }

}


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

//llamar función al cargar página 
changeMenus();
window.addEventListener('resize', changeMenus);



// Función para poner inicio como default ////////////////////////////////////

// falta corregir que al cargar la página la vista se redireccione a la sección de inicio
let inicioDefaultSelected = true

if(inicioDefaultSelected === true) {
  // menu top
  inicioDiv.style.backgroundColor="#0179FE";
  inicioBtnText.style.color="White"

  // menu bottom
  inicioDiv2.style.backgroundColor="#0179FE";
  inicioBtnText2.style.color="White"

} else {

  // menu top
  inicioDiv.removeAttribute('style');
  inicioBtnText.removeAttribute('style');

  // menu bottom
  inicioDiv2.removeAttribute('style');
  inicioBtnText2.removeAttribute('style');

}

// Función para seleccionar menú ////////////////////////////////////
function menuOptionSelected(e) {

  inicioDefaultSelected = false;
  
  // guardar opción seleccionada
  let optionSelected = e.currentTarget.getAttribute("href");

    //Colorear botón seleccionado

    // Al presionar inicio
    if(optionSelected === '#' + 'inicio-section' ) {

      // menu top
      inicioDiv.style.backgroundColor="#0179FE";
      inicioBtnText.style.color="White"

      // menu bottom
      inicioDiv2.style.backgroundColor="#0179FE";
      inicioBtnText2.style.color="White"

    } else {

      // menu top
      inicioDiv.removeAttribute('style');
      inicioBtnText.removeAttribute('style');

      // menu bottom
      inicioDiv2.removeAttribute('style');
      inicioBtnText2.removeAttribute('style');

    }
    // Al presionar recursos

    if(optionSelected === '#' + 'recursos-section') {

      // menu top
      recursosDiv.style.backgroundColor="#0179FE";
      recursosBtnText.style.color="White"

      // menu bottom
      recursosDiv2.style.backgroundColor="#0179FE";
      recursosBtnText2.style.color="White"

    } else {

      // menu top
      recursosDiv.removeAttribute('style');
      recursosBtnText.removeAttribute('style');

      // menu bottom
      recursosDiv2.removeAttribute('style');
      recursosBtnText2.removeAttribute('style');

    }

    // Al presionar proyectos

    if(optionSelected === '#' + 'proyectos-section') {

      // menu top
      proyectosDiv.style.backgroundColor="#0179FE";
      proyectosBtnText.style.color="White"

      // menu bottom
      proyectosDiv2.style.backgroundColor="#0179FE";
      proyectosBtnText2.style.color="White"

    } else {

      // menu top
      proyectosDiv.removeAttribute('style');
      proyectosBtnText.removeAttribute('style');

      // menu bottom
      proyectosDiv2.removeAttribute('style');
      proyectosBtnText2.removeAttribute('style');
    }
}

inicioBtn.addEventListener('click', menuOptionSelected)
recursosBtn.addEventListener('click', menuOptionSelected)
proyectosBtn.addEventListener('click', menuOptionSelected)
inicioBtn2.addEventListener('click', menuOptionSelected)
recursosBtn2.addEventListener('click', menuOptionSelected)
proyectosBtn2.addEventListener('click', menuOptionSelected)


// Función para mostrar MENSAJES OCULTOS ////////////////////////////////////

// Elementos de menú ////////////////////////////////////
// let coffeeBtn = document.getElementById('coffee');
// let runningBtn = document.getElementById('running');
// let codeDesignBtn = document.getElementById('codeDesign');
// let figmaDesignBtn = document.getElementById('figmaDesign');
// let gamesBtn = document.getElementById('games');

// let messagesContainer = document.getElementById('messages-container');

// // Oculta contenedor de mensajes
// messagesContainer.style.display = 'none'

// // let hiddenMessage = document.getElementsByClassName('hiddenMessage');
// let hiddenMessage = document.querySelectorAll('.text-container p');



// function showHiddeMessage(e) {

// // Obtener id de los botones de iconos
// let getId = e.currentTarget.getAttribute("id");

// // Variable para guardar el elemento seleccionado
// let hiddenMessageSelected = ''

// // recorrer todos los elementos p
// for(let i = 0; i < hiddenMessage.length; i++ ) {
  
//   // si el elemento tiene un clasname = al id seleccionado
//   if(hiddenMessage[i].className == getId + 'Message') {

//     // Guarda elemento seleccionado en la variable
//     hiddenMessageSelected = hiddenMessage[i]
//   } 
// }

// // Si es el primer click al id y su clase es igual a id + message,
// // que se muestre el mensaje 
// messagesContainer.style.display = 'block'


// console.log(hiddenMessageSelected)

// }

// coffeeBtn.addEventListener("click", showHiddeMessage);
// runningBtn.addEventListener("click", showHiddeMessage);
// codeDesignBtn.addEventListener("click", showHiddeMessage);
// figmaDesignBtn.addEventListener("click", showHiddeMessage);
// gamesBtn.addEventListener("click", showHiddeMessage);

// window.addEventListener('resize', showHiddeMessage);