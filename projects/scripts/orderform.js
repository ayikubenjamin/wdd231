import { fetchdata } from './booksdisplay.js'

fetchdata()
  .then(books =>{
    const selectProduct = document.querySelector("#productoptions")

    books.forEach(book => {
        const option = document.createElement('option')
        option.value = `${book.booktitle} by ${book.author}`
        option.textContent = `${book.booktitle} by ${book.author}`
        selectProduct.appendChild(option)
    })
  });


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("timestamp").value = new Date().toLocaleString();
});





