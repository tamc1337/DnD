const btnGrp = '.btn-group';
const fav = '.fav'
const open = 'open';
const openFavs = document.querySelector(btnGrp);
const favMons = document
const monPic = '.monster-pic';
const monQuerAll = document.querySelectorAll(monPic);

openFavs.addEventListener('click', function() {
    const tab = this.parentElement.parentElement;
    if(!tab.className.includes(open)){
        tab.classList.add(open);
    } else {
        tab.classList.remove(open);
    }
})

monQuerAll.addEventListener('click', function(){
    if(!this.className.includes(fav)){
        this.classList.add(fav);
    } else {
        this.classList.remove(fav);
    }
})