window.onload = inicio;
let mostrar = false;

let e;
function inicio() {
    document.querySelector(".burguer").onclick=burguer;
    e=document.querySelector(".enlaces");
}

function burguer() {

    if (mostrar) {
        e.classList.remove("aparecer")
        e.classList.add("desaparecer")
    } else {
        e.classList.add("aparecer")
        e.classList.remove("desaparecer")
    }


    e.classList.add("enlaces_mq");
    for (let k = 0; k < document.querySelectorAll("nav a").length; k++) {
        document.querySelectorAll("nav a")[k].classList.add("nav_mq");
    }

    mostrar=!mostrar;
    
}