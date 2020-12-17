function fetchBooks(){
  return fetch('https://anapioficeandfire.com/api/books').then(resp => resp.json()).then(data => renderBooks(data))
}
function renderBooks(books){
  let main = document.querySelector('main')
  books.forEach(book => {
    let h3 = document.createElement('h3')
    h3.innerHTML = book.name
    main.appendChild(h3)
    let data = document.getElementById('specific-data')
    let h3 = document.createElement('h3')
    h3.innerHTML = `the Third book from this serie is ${book[2]}`
    data.appendChild(h3)
  })
}
document.addEventListener('DOMContentLoaded',() => {
  fetchBooks()
})
