/*
const car1 = {name:"Audi", model:"A4"}
const car2 = {name:"Volvo", model:"XC90"}
const car3 = {name:"Ford", model:"Fusion"}
*/

const myLibrary = []

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    /* this.info = function(){
        return(`${this.title} by ${this.author}, ${this.pages}, ${this.read}`)
    } */
}

function addBooktoLibrary(title, author, pages, read){
    let book = new Book(title,author,pages,read);
        return myLibrary.push(book); 
}

function displayLibrary(){
    for(i=0; i < myLibrary.length ; i++)
        for(key in myLibrary[i]){
            document.getElementById('title').textContent = myLibrary[i].title;
            document.getElementById('author').textContent = myLibrary[i].author;
            document.getElementById('pages').textContent = myLibrary[i].pages;
            document.getElementById('read').textContent = myLibrary[i].read;
        }
}



/*
addBooktoLibrary('Fool Moon', 'Jim Butcher', '300', 'yes')
addBooktoLibrary('Way of Kings', 'Brando Sando', '1100', 'yes')
addBooktoLibrary('Hobbit', 'JRRT', '295', 'yes')
*/



