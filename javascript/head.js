const head__button = document.querySelector("#head__button");

head__button.addEventListener('click',(e)=>{
    const linea1 = document.querySelector("#head__line1");
    const linea2 = document.querySelector("#head__line2");
    const desplegable = document.querySelector("#desplegable");
    const head_container = document.querySelector(".head__container");
    head_container.classList.toggle("head_border");
    desplegable.classList.toggle("desaparecer");
    head__button.classList.toggle("borde");
    linea1.classList.toggle("head_click");
    linea2.classList.toggle("head_click2");
})