/*
const car1 = {name:"Audi", model:"A4"}
const car2 = {name:"Volvo", model:"XC90"}
const car3 = {name:"Ford", model:"Fusion"}
*/


const content = document.querySelector('#content')
const newBookBtn = document.getElementById('doStuff')
const removeButton = document.getElementById('remove')

let book1 = {title: "Way of Kings", author: 'Brandon Sanderson', pages: '1100', read:'yes'}
let book2 = {title:'Fool Moon', author:'Jim Buthcer', pages:'350', read:'yes'}

const myLibrary = [book1, book2]


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    /* this.info = function(){
        return(`${this.title} by ${this.author}, ${this.pages}, ${this.read}`)
    } */
}



function stageNewBook(){
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').value 
    return new Book(title, author, pages, read)
}

function addBooktoLibrary(event){
    event.preventDefault()
    const newBook = stageNewBook()
    myLibrary.push(newBook)
    displayLibrary()
}

/*function addBooktoLibrary(title, author, pages, read){
    let book = new Book(title,author,pages,read);
        return myLibrary.push(book); 
}
*/

function displayLibrary(){
    resetCards()
    for(i=0; i < myLibrary.length ; i++)
       createBookCard(myLibrary[i])
        // create data-book-number[i]

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
    const read = document.createElement('div')
    const remove = document.createElement('button')

    title.textContent = `"${book.title}"`
    author.textContent = book.author
    pages.textContent = `${book.pages} pages`
    read.textContent = `Read it? : ${book.read}`
    
    bookCard.classList.add('card')
    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    bookCard.appendChild(read)

    remove.textContent = "Remove Book"
    remove.setAttribute('onclick',`removeBook(${myLibrary.indexOf(myLibrary[i])})`)
    //remove.setAttribute('id', 'remove')
    bookCard.appendChild(remove)

    content.appendChild(bookCard)
}


newBookBtn.addEventListener('click', addBooktoLibrary)

/*
addBooktoLibrary('Fool Moon', 'Jim Butcher', '300', 'yes')
addBooktoLibrary('Way of Kings', 'Brando Sando', '1100', 'yes')
addBooktoLibrary('Hobbit', 'JRRT', '295', 'yes')
*/


/*


 for(key in myLibrary[i]){
            document.getElementById('title').textContent = myLibrary[i].title;
            document.getElementById('author').textContent = myLibrary[i].author;
            document.getElementById('pages').textContent = myLibrary[i].pages;
            document.getElementById('read').textContent = myLibrary[i].read;
        }



const testBtn = document.getElementById('test')
const tray = document.getElementById('tray')

function test(){
    const path = document.createElement('div')
    path.setAttribute('data-number','')
    tray.appendChild(path)
}

testBtn.addEventListener('click', test)
*/

//removeButton.addEventListener('click', removeBook.value)

function removeBook(index){
    myLibrary.splice(index, 1)
    displayLibrary()
}

