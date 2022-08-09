// async function pageOne() {
//     await fetch(`https://api.open5e.com/monsters/`)
// 	    .then(response => response.json())
// 	    .then(data => {
//             console.log(data);
//             const monsters = data.results.map(mon =>{
//                 return `<p>${mon.name}</p>`;
//             }).join('');
//             document.querySelector('.monster').insertAdjacentHTML('afterbegin',monsters)
//         })
// 	    .catch(err => console.error(err));
// }
// console.log(pageOne());




/*  FIND A WAY TO MAKE THESE FUNCTIONS SO THAT IT GETS easier
const nextPage = async () =>{
    return ( (response) => fetch(response.next) )
}
const jsonIt = async () =>{
    return ( (response) => response.json() )
}
 so it'll look like this:
async function pageTwoPics() {
    await fetch(`https://api.open5e.com/monsters/`)
        .then(jsonIt())
        .then(nextPage())
        .then(jsonIt())
        .then(data => {
            console.log(data);

*/

// async function pageOnePics() {
//     await fetch(`https://api.open5e.com/monsters/`)
//         .then((response) => response.json())
// 	    .then((data) => {
//             console.log(data);
//             const monsters = data.results.map(mon =>{
//                 if(mon.img_main != null){
//                 return `<div class="monster-pic" id='${mon.slug}'><img src="${mon.img_main}" alt="${mon.name}"></img><div>`;
//             }}).join('');
//             document.querySelector('.monster').insertAdjacentHTML('afterbegin',monsters)
//         })
// 	    .catch(err => console.error(err));
// }
// console.log(pageOnePics());

// async function pageTwoPics() {
//     await fetch(`https://api.open5e.com/monsters/`)
// 	    .then((response) => response.json())
//         .then((response) => fetch(response.next))
//         .then((response) => response.json())
// 	    .then(data => {
//             console.log(data);
//             const monsters = data.results.map(mon =>{
//                 if(mon.img_main != null){
//                 return `<div class="monster-pic" id='${mon.slug}'><img src="${mon.img_main}" alt="${mon.name}"></img><div>`;
//             }}).join('');
//             document.querySelector('.monster').insertAdjacentHTML('afterbegin',monsters)
//         })
// 	    .catch(err => console.error(err));
// }
// console.log(pageTwoPics());

// async function pageThreePics() {
//     await fetch(`https://api.open5e.com/monsters/`)
// 	    .then((response) => response.json())
//         .then((response) => fetch(response.next))
//         .then((response) => response.json())
//         .then((response) => fetch(response.next))
//         .then((response) => response.json())
// 	    .then(data => {
//             console.log(data);
//             const monsters = data.results.map(mon =>{
//                 if(mon.img_main != null){
//                 return `<div class="monster-pic" id='${mon.slug}'><img src="${mon.img_main}" alt="${mon.name}"></img><div>`;
//             }}).join('');
//             document.querySelector('.monster').insertAdjacentHTML('afterbegin',monsters)
//         })
// 	    .catch(err => console.error(err));
// }
// console.log(pageThreePics());

// async function pageFourPics() {
//     await fetch(`https://api.open5e.com/monsters/`)
// 	    .then((response) => response.json())
//         .then((response) => fetch(response.next))
//         .then((response) => response.json())
//         .then((response) => fetch(response.next))
//         .then((response) => response.json())
//         .then((response) => fetch(response.next))
//         .then((response) => response.json())
// 	    .then(data => {
//             console.log(data);
//             const monsters = data.results.map(mon =>{
//                 if(mon.img_main != null){
//                 return `<div class="monster-pic" id='${mon.slug}'><img src="${mon.img_main}" alt="${mon.name}"></img><div>`;
//             }}).join('');
//             document.querySelector('.monster').insertAdjacentHTML('afterbegin',monsters)
//         })
// 	    .catch(err => console.error(err));
// }
// console.log(pageFourPics());

// async function pageFivePics() {
//     await fetch(`https://api.open5e.com/monsters/`)
// 	    .then((response) => response.json())
//         .then((response) => fetch(response.next))
//         .then((response) => response.json())
//         .then((response) => fetch(response.next))
//         .then((response) => response.json())
//         .then((response) => fetch(response.next))
//         .then((response) => response.json())
//         .then((response) => fetch(response.next))
//         .then((response) => response.json())
// 	    .then(data => {
//             console.log(data);
//             const monsters = data.results.map(mon =>{
//                 if(mon.img_main != null){
//                 return `<div class="monster-pic" id='${mon.slug}'><img src="${mon.img_main}" alt="${mon.name}"></img><div>`;
//             }}).join('');
//             document.querySelector('.monster').insertAdjacentHTML('afterbegin',monsters)
//         })
//         // WHY ARE THEY COMING OUT NESTED
// 	    .catch(err => console.error(err));
// }
// console.log(pageFivePics());

// async function pageSixPics() {
//     await fetch(`https://api.open5e.com/monsters/`)
// 	    .then((response) => response.json())
//         .then((response) => fetch(response.next))
//         .then((response) => response.json())
//         .then((response) => fetch(response.next))
//         .then((response) => response.json())
//         .then((response) => fetch(response.next))
//         .then((response) => response.json())
//         .then((response) => fetch(response.next))
//         .then((response) => response.json())
//         .then((response) => fetch(response.next))
//         .then((response) => response.json())
// 	    .then(data => {
//             console.log(data);
//     const monsters = data.results.map(mon =>{
//         if(mon.img_main != null){
//         return `<div class="monster-pic" id='${mon.slug}'><img src="${mon.img_main}" alt="${mon.name}"></img><div>`;
//     }}).join('');
//     document.querySelector('.monster').insertAdjacentHTML('afterbegin',monsters)
// })
// .catch(err => console.error(err));
// }
// console.log(pageSixPics());

async function allPagesPics() {
    const p1 = fetch(`https://api.open5e.com/monsters/`);
    const p2 = fetch(`https://api.open5e.com/monsters/?page=2`);
    const p3 = fetch(`https://api.open5e.com/monsters/?page=3`);
    const p4 = fetch(`https://api.open5e.com/monsters/?page=4`);
    const p5 = fetch(`https://api.open5e.com/monsters/?page=5`);
    const p6 = fetch(`https://api.open5e.com/monsters/?page=6`);
    const p7 = fetch(`https://api.open5e.com/monsters/?page=7`);
    /* No IMGS 
    const p8 = fetch(`https://api.open5e.com/monsters/?page=8`);
    const p9 = fetch(`https://api.open5e.com/monsters/?page=9`);
    const p10 = fetch(`https://api.open5e.com/monsters/?page=10`);
    const p11 = fetch(`https://api.open5e.com/monsters/?page=11`);
    const p12 = fetch(`https://api.open5e.com/monsters/?page=12`);
    const p13 = fetch(`https://api.open5e.com/monsters/?page=13`); */
    const p14 = fetch(`https://api.open5e.com/monsters/?page=14`);
    /* No IMGS
    const p15 = fetch(`https://api.open5e.com/monsters/?page=15`);
    const p16 = fetch(`https://api.open5e.com/monsters/?page=16`);
    const p17 = fetch(`https://api.open5e.com/monsters/?page=17`);
    const p18 = fetch(`https://api.open5e.com/monsters/?page=18`);
    const p19 = fetch(`https://api.open5e.com/monsters/?page=19`);
    const p20 = fetch(`https://api.open5e.com/monsters/?page=20`);
    const p21 = fetch(`https://api.open5e.com/monsters/?page=21`);*/
    const p22 = fetch(`https://api.open5e.com/monsters/?page=22`);
    /* No IMGS 
    const p23 = fetch(`https://api.open5e.com/monsters/?page=23`);
    const p24 = fetch(`https://api.open5e.com/monsters/?page=24`);
    const p25 = fetch(`https://api.open5e.com/monsters/?page=25`);
    const p26 = fetch(`https://api.open5e.com/monsters/?page=26`);
    const p27 = fetch(`https://api.open5e.com/monsters/?page=27`);
    const p28 = fetch(`https://api.open5e.com/monsters/?page=28`);
    const p29 = fetch(`https://api.open5e.com/monsters/?page=29`);
    const p30 = fetch(`https://api.open5e.com/monsters/?page=30`);*/
    const total = await Promise.all([p1, p2, p3, p4, p5, p6, p7, p14, p22]);
    //  p8, p9, p10, p11,p12, p13, p15, p16, p17, p18, p19, p20, p21, , p23, p24, p25, p26, p27, p28, p29, p30
    const dndPromises = total.map(r => r.json());
    const [page1, page2, page3, page4, page5, page6, page7, page14, page22] = await Promise.all(dndPromises);
    //  page8, page9, page10, page11, page12, page13,  page15, page16, page17, page18, page19, page20, page21,  page23, page24, page25, page26, page27, page28, page29, page30]

    console.log(page1, page2, page3, page4, page5, page6, page7, page14, page22);
};
// page8, page9, page10, page11, page12, page13,  page15, page16, page17, page18, page19, page20, page21,  page23, page24, page25, page26, page27, page28, page29, page30
allPagesPics();

const allPages = ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page14', 'page22'];
// 'page8', 'page9', 'page10', 'page11', 'page12', 'page13', 
// 'page15', 'page16', 'page17', 'page18', 'page19', 'page20', 'page21',
// 'page23', 'page24', 'page25', 'page26', 'page27', 'page28', 'page29', 'page30'


const getData = async (pages) => {
    const promises = pages.map(page => {
        let pgNum = page.slice(4);
        console.log(pgNum);
        fetch(`https://api.open5e.com/monsters/?page=${pgNum}`)
            .then(r => r.json())
            .then(res => {
                const monsters = res.results.map(mon => {
                    if (mon.img_main != null) {
                        console.log(mon.name);
                        //
                        return `<div class="monster-pic" id='${mon.slug}'>
                                        <h2 class="monster-title"> ${mon.name} </h2>
                                        <img src="${mon.img_main}" alt="${mon.name}"></img>
                                        <h3 class="hit-pts">Hit Points: ${mon.hit_points}</h3>
                                        <h3 class="type">Type: ${mon.type}</h3>
                                        <div class="stats-box">
                                            <ul class="stats">
                                                <li>Strength: ${mon.strength}</li>
                                                <li>Dexterity: ${mon.dexterity}</li>
                                                <li>Constitution: ${mon.constitution}</li>
                                                <li>Wisdom: ${mon.wisdom}</li>
                                                <li>Intelligence: ${mon.intelligence}</li>
                                                <li>Charisma: ${mon.charisma}</li>
                                            </ul>
                                        </div>
                                    </div> <br>`;
                    }
                }).join('');
                const favMons = res.results.map(mon => {
                    if (mon.img_main != null) {
                        return `<div class="monster-pic">
                        <h2 class="monster-title"> ${mon.name} </h2>
                        <img src="${mon.img_main}" alt="${mon.name}"></img>
                        </div>`}
                }).join('');
                document.querySelector('#monsterid').insertAdjacentHTML('afterbegin', monsters);
                document.querySelector('#fav-box').insertAdjacentHTML('afterbegin', favMons)
            })
            .then(ful => {
                const monTitle = '.monster-title';
                const monQuerAll = document.querySelectorAll(monTitle);
                const favBox = document.getElementById('fav-box');
                const favBoxMons = document.que
                const favMons = '#fav-box .monster-pic'
                monQuerAll.forEach(mon => {
                    mon.addEventListener('click', function () {
                        const x = this.parentElement;
                        let tempTitle = document.querySelector(`${this.innerHTML}`)
                        if(!favMons.includes(tempTitle) && !favMons.classList.includes(fav)){
                            favMons.classList.add(fav);
                        } else {
                            this.classList.remove(fav);
                        }
                    })
                })
            })
            .catch(err => console.error(err));
    });
    const accounts = await Promise.all(promises);
    console.log(accounts);
}
getData(allPages)



// For favorites bar: add event listener to wait for click on  title/ picture of monster, then
//add favorite class to it and remove monster pic class,
// use id of monster name/slug to hook into it and have fav box build in top /on side