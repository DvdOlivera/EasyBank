import about from "./sections/about-section.js"
import home from "./sections/home-section.js"
import contact from "./sections/contact-section.js"
import blog from "./sections/blog-section.js"
import download from "./sections/download-section.js"


export function addInitialEventListeners() {
    document.querySelector("#aboutbutton").addEventListener("click",manejarSeleccion);
    document.querySelector("#homebutton").addEventListener("click",manejarSeleccion);
    document.querySelector("#contactbutton").addEventListener("click",manejarSeleccion);
    document.querySelector("#blogbutton").addEventListener("click",manejarSeleccion);
    document.querySelectorAll(".botonrequest").forEach((boton => {
        boton.addEventListener("click",manejarSeleccion)
    }));
    document.querySelector("#mobile-home").addEventListener("click",manejarSeleccion);
    document.querySelector("#mobile-about").addEventListener("click",manejarSeleccion);
    document.querySelector("#mobile-contact").addEventListener("click",manejarSeleccion);
    document.querySelector("#mobile-blog").addEventListener("click",manejarSeleccion);
    
    

}
function manejarSeleccion(e){
    let keyword = e.target.dataset.seccion;

    if(keyword === "home"){
        incrustarSeccion(home)
    };
    
    if(keyword === "about"){
        incrustarSeccion(about)
    };

    if(keyword === "download"){
        incrustarSeccion(download)
    };
    
    if(keyword === "contact"){
        incrustarSeccion(contact)
    };

    if(keyword === "blog"){
        incrustarSeccion(blog)
    };


}

export function incrustarSeccion(seccion){
   
    document.querySelector("#page-content").innerHTML = seccion;

};

