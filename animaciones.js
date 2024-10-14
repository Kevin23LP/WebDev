const navbar = document.querySelector('.Navboxmenu');
const linknav = document.querySelector('.navlinks');
const activarlinknosotros = document.querySelector('.linknosotros')
const navmenuaction = document.querySelector('.navlinksbox');
const navmenuicon = document.querySelector('.navmenu');

window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
        navbar.classList.add('navmenuon');
        linknav.classList.add('navlinksonscroll');
       
    }else{
        navbar.classList.remove('navmenuon');
        linknav.classList.remove('navlinksonscroll');
        
    }
})




navmenuicon.addEventListener('click', (e) => {
    if(navmenuicon.click){
        navmenuaction.classList.toggle('mobilenavmenuocultar');
    }
    else if(!navmenuicon.contains(e.target)) {
        navmenuaction.classList.remove('mobilenavmenuocultar');
    }
})

window.addEventListener('touch', () => {

    if (window.touch) {
        navmenuaction.classList.remove('mobilenavmenuocultar');
        
    }
})