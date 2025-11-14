const theDate = new Date()
const year = document.querySelector('#currentyear')
year.innerHTML = `©${theDate.getFullYear()}, Accra Chamber of Commerce`

const lastModified = document.querySelector('#lastmodified')
lastModified.innerHTML = `Last Modified : ${theDate.toLocaleString("en-Us")}`



const hamburger = document.querySelector('#nav-button');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
});