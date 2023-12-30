const ul = document.querySelector('.ul');
const closer = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.menu-mobile');


openMenu.addEventListener('click',show);
closer.addEventListener('click',close);


function show(){
    ul.style.display = 'flex';
    ul.style.top = '0';
}

function close(){
    ul.style.top = '-100%';
}




