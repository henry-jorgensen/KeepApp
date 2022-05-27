

const menuButton = document.getElementById("collapsible");
const menu = document.getElementById("nav-menu");

const menuStyle = menu.style


function switchMenu(){
    if(menu.classList.contains('nav-off')){
        menu.classList.remove('nav-off')
    } else{
        menu.classList.add('nav-off')
    }
    
}

$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});

