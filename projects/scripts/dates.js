const currentyear = document.querySelector('#currentyear')
const lastmodified = document.querySelector('#lastmodified')
const today = new Date()
const datetime = today.toLocaleString("en-Us")
currentyear.innerHTML = today.getFullYear()
lastmodified.innerHTML = `Last Modified : ${datetime}`



const hamburger = document.querySelector('#nav-button');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
});
