// index.js
import "./styles.css";
import loadHome from "./scripts/home";
import loadMenu from "./scripts/menu";
import loadAbout from "./scripts/about";

loadHome();
home.addEventListener('click',()=>{
    loadHome()      
});
menu.addEventListener('click',()=>{
    loadMenu()      
});
about.addEventListener('click',()=>{
    loadAbout()      
});
