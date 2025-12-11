let books = []
export async function fetchdata() {
  const response = await fetch('./data/books.json')
  if (!response.ok){
    throw new Error(`http error ${response.status}`)
  }
  books = await response.json()
  return books
}

fetchdata()
  .then(books =>{
    const latest = books.filter(book => book.yearpublished === '2023' || book.yearpublished === '2022')

    const selling = books.filter(book => book.category === 'Fiction' && (Number(book.yearpublished) >= 2015) &&  Number(book.yearpublished) <= 2017)

    const latestAddition = document.querySelector("#latestAddition")
    const heading = document.createElement('h3')
    heading.innerHTML = `Latest Additions`
    latestAddition.appendChild(heading)

    latest.forEach(book => {
        const bookdiv = document.createElement('div')
        bookdiv.classList.add('bookcard')

        bookdiv.innerHTML = `<img src="${book.bookcoverimageurl}"><br>
                            ${book.booktitle} - ${book.author}`                 
        latestAddition.appendChild(bookdiv)
    })

    const bestselling = document.querySelector("#bestselling")
    const heading1 = document.createElement('h3')
    heading1.innerHTML = `Best Selling`
    bestselling.appendChild(heading1)

    selling.forEach(book => {
      const bookdiv = document.createElement('div')
      bookdiv.classList.add('bookcard')

      bookdiv.innerHTML = `<img src="${book.bookcoverimageurl}"><br>
                            ${book.booktitle} - ${book.author}`

      bestselling.appendChild(bookdiv)
      
    })
})

