import about from "./sections/about-section.js"
import home from "./sections/home-section.js"
import contact from "./sections/contact-section.js"
import blog from "./sections/blog-section.js"
import download from "./sections/download-section.js"


export function addInitialEventListeners() {
    document.querySelector("#aboutbutton").addEventListener("click",incrustarAbout);
    document.querySelector("#homebutton").addEventListener("click",incrustarHome);
    document.querySelector("#contactbutton").addEventListener("click",incrustarContact);
    document.querySelector("#blogbutton").addEventListener("click",incrustarBlog);
    document.querySelectorAll(".botonrequest").forEach((boton => {
        boton.addEventListener("click",IncrustarDownload)
    }));
    document.querySelector("#mobile-home").addEventListener("click",incrustarHome);
    document.querySelector("#mobile-about").addEventListener("click",incrustarAbout);
    document.querySelector("#mobile-contact").addEventListener("click",incrustarContact);
    document.querySelector("#mobile-blog").addEventListener("click",incrustarBlog);
    
    

}

function IncrustarDownload(){
    document.querySelector("#page-content").innerHTML = download;

}

function incrustarAbout() {  
   
    document.querySelector("#page-content").innerHTML = about;

}

function incrustarHome() {  
   
    document.querySelector("#page-content").innerHTML = home;

}

function incrustarContact() {  
   
    document.querySelector("#page-content").innerHTML = contact;

}

function incrustarBlog() {  
   
    document.querySelector("#page-content").innerHTML = blog;

}
