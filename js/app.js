import { abrirMenu, botonCerrar, cerrarMenu } from "./menu_hamburguesa.js";
import {imgsLoad} from "./lazyload.js"
import {  seleccionarEnsalada, seleccionarPasta, seleccionarPizza, seleccionarPostre, seleccionarTodo } from "./seleccionDeMenu.js";

addEventListener("DOMContentLoaded",(e)=>{
    abrirMenu();
    cerrarMenu();
    botonCerrar();
    imgsLoad();
    seleccionarPasta();
    seleccionarPostre();
    seleccionarPizza();
    seleccionarEnsalada();
    seleccionarTodo();
});

