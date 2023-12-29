
function MenuMobile (){
    let MenuShow = document.querySelector('.ul');
    if(MenuShow.classList.contains('open')){
        MenuShow.classList.remove('open');
    }else{
        MenuShow.classList.add('open')
    }
}