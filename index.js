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
}

function fetchCharacter(){
  return fetch('https://anapioficeandfire.com/api/characters').then(resp => resp.json()).then(data => {
    console.log(data)
    renderCharactersNumb(data)})
}

function renderCharactersNumb(character){
  let data = document.getElementById('specific-data')
  // let thirdBook = document.createElement('h3')
  // thirdBook.innerHTML = `the Third book from this serie is ${books[2].name}`
  // data.appendChild(thirdBook)
  character.forEach(char => {
    let characterNb = document.createElement('h3')
    characterNb.innerHTML = `the 1031st character is ${character[1031].name}`
    data.appendChild(characterNb)
  })
}
document.addEventListener('DOMContentLoaded',() => {
  fetchBooks()
  fetchCharacter()
})
