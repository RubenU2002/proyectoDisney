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

    const lista = document.querySelector("#desplegable");
    const nodosClaseDesplegable = document.querySelectorAll(".sub_desplegable");
    nodosClaseDesplegable.forEach(e =>{
        e.classList.add("desaparecer");
    });
    lista.addEventListener('click',(e)=>{
        if(e.target.parentNode.id =="peliculas" || e.target.parentNode.id =="disney+" || e.target.parentNode.id =="viajes" || e.target.parentNode.id =="tv" || e.target.parentNode.id =="mas"){
            nodosClaseDesplegable.forEach(e1 =>{
                if(e1!=e.target.parentNode.nextSibling.nextSibling){
                    e1.classList.add("desaparecer");
                }
            });
            e.preventDefault(); 
            e.target.parentNode.nextSibling.nextSibling.classList.toggle("desaparecer");
        }
    });
});

