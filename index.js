function fetchBooks(){
  return fetch('https://anapioficeandfire.com/api/books').then(resp => resp.json()).then(data => renderBooks(data))
}
function renderBooks(books){
  let main = document.querySelector('main')
  books.forEach(book => {
    let booksName = document.createElement('h3')
    booksName.innerHTML = book.name
    main.appendChild(booksName)
  })
  let data = document.getElementById('specific-data')
  let thirdBook = document.createElement('h3')
  thirdBook.innerHTML = `the Third book from this serie is ${books[2].name}`
  data.appendChild(thirdBook)

  let characterNb1031 = document.createElement('h3')
  characterNb1031.innerHTML = `the 1031st character is ${books.characters[1031]}`
  data.appendChild(characterNb1031)
}
document.addEventListener('DOMContentLoaded',() => {
  fetchBooks()
})
