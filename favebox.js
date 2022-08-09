const btnGrp = '.btn-group';
const fav = '.fav'
const opener = 'open';
const openFavs = document.querySelector(btnGrp);
const favsBar = document.getElementById('fav');

const favBox = document.getElementById('fav-box');
const monTitle = 'monster-title';
const favMons = '#fav-box .monster-pic'
const monQuerAll = document.querySelectorAll(monTitle);

openFavs.addEventListener('click', function() {
    if(!favsBar.className.includes(opener)){
        favsBar.classList.add(opener);
    } else {
        favsBar.classList.remove(opener);
    }
})



  
