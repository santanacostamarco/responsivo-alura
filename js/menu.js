var botaoExibir = document.querySelector(".exibe-menu");
var botaoEsconder = document.querySelector(".esconde-menu");
var menu = document.querySelector(".nav-overlay");
// botaoExibir.addEventListener("click", function(){
//     menu.classList.add("menu-mobile");
// });
// botaoEsconder.addEventListener("click", function(){
//     menu.classList.remove("menu-mobile");
// });
document.querySelector('.exibe-menu').onclick = function() {
    document.documentElement.classList.add('menu-mobile');
};

document.querySelector('.esconde-menu').onclick = function() {
    document.documentElement.classList.remove('menu-mobile');
};

