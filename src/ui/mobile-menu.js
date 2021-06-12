
export function addMobileEventListeners(){

    document.querySelector("#hamburger").addEventListener("click", abrirYCerrarModal);
    document.querySelector("#mobile-menu-close").addEventListener("click", abrirYCerrarModal); 
    document.querySelectorAll(".mobile-menu-link").forEach(element => {    
        element.addEventListener("click",abrirYCerrarModal);
    }); 
    
}


function abrirYCerrarModal() {
    document.querySelector("#mobile-menu").classList.toggle("oculto");
}







