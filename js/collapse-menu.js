const menuButton = document.getElementById("collapsible");
const menu = document.getElementById("nav-menu");

const menuStyle = menu.style


function switchMenu(){
    if(menu.classList.contains('nav-off')){
        menu.classList.remove('nav-off')
        menuButton.src = "assets/general-icons/cross-icon.png"
    } else{
        menu.classList.add('nav-off')
        menuButton.src = "assets/general-icons/menu-icon.png"
    }
    
}



