const menuAdicional = document.querySelector('.navbar-email')
menuAdicional.addEventListener('click', activarMenu)
const menudesktop = document.querySelector('.desktop-menu')

function activarMenu(){
    menudesktop.classList.toggle('inactive');
}
