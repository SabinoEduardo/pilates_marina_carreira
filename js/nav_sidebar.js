var header = document.getElementById("header");
var nav = document.getElementById("nav");
var main = document.getElementById("main");
var showSideBar = false;

function toogleSidebar() {
    showSideBar = !showSideBar;
    
    if (showSideBar) {
        nav.style.marginLeft = "0vw";
        nav.style.animationName = "showSidebar";
        
    } else {
        nav.style.marginLeft = "-100vw";
        nav.style.animationName = "";
    }
}

function closeSidebar(){
    if (showSideBar){
        toogleSidebar();
    }

window.addEventListener('resize', function(event){
    if (this.screen.width > 680 && showSideBar){
        toogleSidebar();
        }
    }
    )
}