const btn1 = document.querySelector('#click_one');
const btn2 = document.querySelector('#click_two');
const nav = document.querySelector('.nav_item');
const theIelts = document.querySelector('.the_ielts');
const theSection = document.querySelector('.ielts_section');
const bandScore = document.querySelector('.band_score');
const blogOne = document.querySelector('#blog_one');
const blogTwo = document.querySelector('#blog_two');
const blogThree = document.querySelector('#blog_three');

loadEventListiners()


function loadEventListiners() {
    btn1.addEventListener('click', changeIcon);
    btn2.addEventListener('click', revertIcon);
    theIelts.addEventListener('click', nextpage);
    theSection.addEventListener('click', myPage);
    bandScore.addEventListener('click', furtherPage);
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

function nextpage() {
    blogOne.classList.add('ielts_content_three');
    blogOne.classList.remove('ielts_content_1');
    blogTwo.classList.add('ielts_content_two');
    blogTwo.classList.remove('ielts_content_2');
    blogTwo.classList.remove('ielts_content_three');
    blogThree.classList.add('ielts_content_two');
    blogThree.classList.remove('ielts_content_2');
    blogThree.classList.remove('ielts_content_three');

};

function myPage() {
    blogOne.classList.add('ielts_content_two');
    blogOne.classList.remove('ielts_content_three');
    blogOne.classList.remove('ielts_content_1');
    blogThree.classList.add('ielts_content_two');
    blogThree.classList.remove('ielts_content_three');
    blogThree.classList.remove('ielts_content_1');
    blogTwo.classList.add('ielts_content_three');
    blogTwo.classList.remove('ielts_content_2');
}

function furtherPage() {
    blogOne.classList.add('ielts_content_two');
    blogOne.classList.remove('ielts_content_three');
    blogOne.classList.remove('ielts_content_1');
    blogThree.classList.add('ielts_content_three');
    blogThree.classList.remove('ielts_content_3');
    blogTwo.classList.add('ielts_content_two');
    blogTwo.classList.remove('ielts_content_three');
    blogTwo.classList.remove('ielts_content_2');
}