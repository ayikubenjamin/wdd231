import { fetchdata } from './booksdisplay.js'


fetchdata()
  .then(books =>{
    function displayallcollections(){
    const booksDisplay = document.querySelector('#bookDisplay')
    booksDisplay.textContent = ""
    for(let book of books){
        const bookcard = document.createElement('div')
        bookcard.classList.add('bookcard')
        bookcard.innerHTML = `<img src="${book.bookcoverimageurl}"><br>
                        ${book.booktitle} - ${book.author}`
        booksDisplay.appendChild(bookcard)
      }
    }

    displayallcollections()

    const fiction = books.filter(book => book.category === 'Fiction')
    const nonfiction = books.filter(book => book.category === 'Non-Fiction')

    function displayfiction(){
        const booksDisplay = document.querySelector('#bookDisplay')
        booksDisplay.textContent = ""
        fiction.forEach(book => {   
        const bookcard = document.createElement('div')
        bookcard.classList.add('bookcard')

        bookcard.innerHTML = `<img src="${book.bookcoverimageurl}"><br>
                            ${book.booktitle} - ${book.author}`                 
        booksDisplay.appendChild(bookcard)
    })
    }

    const fictionlink =  document.querySelector("#fiction")
    fictionlink.addEventListener("click", (Event) =>{
        Event.preventDefault()
        displayfiction()
    })


    function displaynonfiction(){
        const booksDisplay = document.querySelector('#bookDisplay')
        booksDisplay.textContent = ""
        nonfiction.forEach(book => {   
        const bookcard = document.createElement('div')
        bookcard.classList.add('bookcard')

        bookcard.innerHTML = `<img src="${book.bookcoverimageurl}"><br>
                            ${book.booktitle} - ${book.author}`                 
        booksDisplay.appendChild(bookcard)
    })
    }

    const nonfictionlink =  document.querySelector("#nonFiction")
    nonfictionlink.addEventListener("click", (Event) =>{
        Event.preventDefault()
        displaynonfiction()
    })


    const allcollectionslink =  document.querySelector("#all")
    allcollectionslink.addEventListener("click", (Event) =>{
        Event.preventDefault()
        displayallcollections()
    })

})
