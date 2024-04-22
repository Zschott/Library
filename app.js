
const content = document.querySelector('#content')
const newBookBtn = document.getElementById('doStuff')
const removeButton = document.getElementById('remove')

let book1 = {title: "Way of Kings", author: 'Brandon Sanderson', pages: '1100', readStatus:'Read'}
let book2 = {title:'Fool Moon', author:'Jim Buthcer', pages:'350', readStatus:'Read'}

const myLibrary = [book1, book2]

function Book(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}



function stageNewBook(){
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const readStatus = document.getElementById('readStatus').value 
    return new Book(title, author, pages, readStatus)
}

function addBooktoLibrary(event){
    event.preventDefault()
    const newBook = stageNewBook()
    myLibrary.push(newBook)
    displayLibrary()
}

function displayLibrary(){
    resetCards()
    for(i=0; i < myLibrary.length ; i++)
       createBookCard(myLibrary[i])
}

function resetCards(){
    content.textContent = ''
}

function createBookCard(book) {
    
    const content = document.querySelector('#content')
    const bookCard = document.createElement('div')
    const title = document.createElement('div')
    const author = document.createElement('div')
    const pages = document.createElement('div')
    const readStatus = document.createElement('button')
    const remove = document.createElement('button')

    title.textContent = `"${book.title}"`
    author.textContent = book.author
    pages.textContent = `${book.pages} pages`

    if(book.readStatus === "Read"){
        book.readStatus = "Read"
      } else {
        book.readStatus = " Not Read"
      }
    
    readStatus.textContent = `${book.readStatus}`
    readStatus.setAttribute('onclick', `toggleReadStatus(${myLibrary.indexOf(myLibrary[i])})`)

    
    bookCard.classList.add('card')
    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    bookCard.appendChild(readStatus)

    remove.textContent = "Remove Book"
    remove.setAttribute('onclick',`removeBook(${myLibrary.indexOf(myLibrary[i])})`)
    bookCard.appendChild(remove)

    content.appendChild(bookCard)
}


newBookBtn.addEventListener('click', addBooktoLibrary)

function toggleReadStatus(index){
    if (myLibrary[index].readStatus === "Read") {
        myLibrary[index].readStatus = "Not Read";
    } else {
        myLibrary[index].readStatus = "Read";
    }
    displayLibrary()
}

function removeBook(index){
    myLibrary.splice(index, 1)
    displayLibrary()
}

