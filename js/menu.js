var botaoExibir = document.querySelector(".exibe-menu");
var botaoEsconder = document.querySelector(".esconde-menu");
var menu = document.querySelector(".barra-nav");
botaoExibir.addEventListener("click", function(){
    menu.classList.add("menu-mobile");
});
botaoEsconder.addEventListener("click", function(){
    menu.classList.remove("menu-mobile");
});
