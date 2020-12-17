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
  let h3 = document.createElement('h3')
  h3.innerHTML = `the Third book from this serie is ${books[2].name} and his url is ${books[2].url}`
  data.appendChild(h3)
}
document.addEventListener('DOMContentLoaded',() => {
  fetchBooks()
})
