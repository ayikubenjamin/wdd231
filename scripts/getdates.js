const theDate = new Date()
const year = document.querySelector('#currentyear')
year.innerHTML = `©${theDate.getFullYear()}, Benjamin Ayiku, Accra Ghana`

const lastModified = document.querySelector('#lastmodified')
lastModified.innerHTML = `Last Modified : ${theDate.toLocaleString("en-Us")}`