const btn1 = document.querySelector('#click_one');
const btn2 = document.querySelector('#click_two');
const nav = document.querySelector('.nav_item');

loadEventListiners()


function loadEventListiners() {
    btn1.addEventListener('click', changeIcon);
    btn2.addEventListener('click', revertIcon);
}


function changeIcon() {
    btn1.classList.add('open2');
    nav.classList.add('nav_items');
    nav.classList.remove('nav_item');
    btn2.classList.add('close2');

};

function revertIcon() {
    btn1.classList.remove('open2');
    nav.classList.remove('nav_items');
    nav.classList.add('nav_item');
    nav.classList.remove('nav_items');
    btn2.classList.remove('close2');

}