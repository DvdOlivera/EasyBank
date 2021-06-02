document.querySelector("#hamburger").addEventListener("click", abrirYCerrarModal);
document.querySelector("#mobile-menu-close").addEventListener("click", abrirYCerrarModal);

function abrirYCerrarModal() {
    document.querySelector("#mobile-menu").classList.toggle("oculto");

}

document.querySelectorAll(".botonrequest").forEach((boton => {
    boton.addEventListener("click",ocultarFilminasparaDescargar)
}))

function ocultarFilminasparaDescargar() {
    document.querySelector("#home").classList.add("oculto");
    document.querySelector("#about").classList.add("oculto");
    document.querySelector("#contact").classList.add("oculto");
    document.querySelector("#blog").classList.add("oculto");
    
    document.querySelector("#download-app").classList.remove("oculto");
     
}

document.querySelector("#aboutbutton").addEventListener("click",ocultarFilminasparaAbout);
document.querySelector("#mobile-about").addEventListener("click",ocultarFilminasparaAbout);

function ocultarFilminasparaAbout(){
    document.querySelector("#blog").classList.add("oculto");
    document.querySelector("#home").classList.add("oculto");
    document.querySelector("#contact").classList.add("oculto");
    document.querySelector("#download-app").classList.add("oculto");

    document.querySelector("#about").classList.remove("oculto");

    document.querySelector("#mobile-menu").classList.add("oculto");
}

document.querySelector("#homebutton").addEventListener("click",ocultarFilminasparaHome);
document.querySelector("#mobile-home").addEventListener("click",ocultarFilminasparaHome);

function ocultarFilminasparaHome(){
    document.querySelector("#contact").classList.add("oculto");
    document.querySelector("#about").classList.add("oculto");
    document.querySelector("#blog").classList.add("oculto");
    document.querySelector("#download-app").classList.add("oculto");

    document.querySelector("#home").classList.remove("oculto");

    document.querySelector("#mobile-menu").classList.add("oculto");
}

document.querySelector("#blogbutton").addEventListener("click",ocultarFilminasparaBlog )
document.querySelector("#mobile-blog").addEventListener("click",ocultarFilminasparaBlog )

function ocultarFilminasparaBlog(){
  
    document.querySelector("#home").classList.add("oculto");
    document.querySelector("#contact").classList.add("oculto");
    document.querySelector("#about").classList.add("oculto");
    document.querySelector("#download-app").classList.add("oculto");

    document.querySelector("#blog").classList.remove("oculto");

    document.querySelector("#mobile-menu").classList.add("oculto");


}

document.querySelector("#contactbutton").addEventListener("click",ocultarFilminasparaContact )
document.querySelector("#mobile-contact").addEventListener("click",ocultarFilminasparaContact )

function ocultarFilminasparaContact(){
  
    document.querySelector("#home").classList.add("oculto");
    document.querySelector("#blog").classList.add("oculto");
    document.querySelector("#about").classList.add("oculto");
    document.querySelector("#download-app").classList.add("oculto");

    document.querySelector("#contact").classList.remove("oculto");

    document.querySelector("#mobile-menu").classList.add("oculto");

}












 
