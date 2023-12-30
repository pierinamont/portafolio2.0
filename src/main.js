// Elementos de menú ////////////////////////////////////
let menuTop = document.getElementById('menu-top');
let menuBottom = document.getElementById('menu-bottom');

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




// Función para cambiar de color a card cuando hay hover 

//variable para cambiar estados de hover
let dribbleHover = false;
let codepenHover = false;
let linkedinHover = false;
let resumeHover = false;
let emailHover = false;


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

// Función para cambiar de color iconos del menu 


// linkedin

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

// resume

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

// email

// cursor sale del elemento
email.addEventListener("mouseover", () => {
  // cambia variable a true
  emailHover = true;
  // llama la función
  changeMenuIconsColor();
});

// cursor sale del elemento
email.addEventListener("mouseleave", () => {
  // cambia variable a false
  emailHover = false;
  // llama la función
  changeMenuIconsColor();
  
});


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

  if(emailHover === true) {
    email.style.backgroundImage='url(../assets/email-blue.svg)';

  } else {
    // regresar a los estilos del principio
    email.removeAttribute('style');
   
  }

}




// let linkedinHover = false;
// let resumeHover = false;
// let emailHover = false;







// función para manejar la visibilidad de los menús

function changeMenus() {
  if (window.innerWidth <= 740) {
    alert('hola')
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