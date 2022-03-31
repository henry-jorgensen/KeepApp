const menuButton = document.getElementById("collapsible");
const menu = document.getElementById("nav-menu");



function switchMenu(){
    if(menu.style.display != "none"){
        menu.style.display = "none"
    }
    else if (menu.style.display == "none"){
        menu.style.display = "block"
    }
}

function switchMenuOpacity(){
    if(menu.style.opacity == "0"){
        menu.style.opacity = "1"
    }
    else if (menu.style.opacity == "1"){
        menu.style.opacity = "0"
    }
}



