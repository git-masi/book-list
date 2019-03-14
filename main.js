class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UserInterface {
  addBook(book) {
    const ROW = document.createElement('tr');
    ROW.innerHTML = 
    `
    \t<td>${book.title}</td>
    \t<td>${book.author}</td>
    \t<td>${book.isbn}</td>
    \t<td><i class="material-icons sm delete">indeterminate_check_box</i></td>
    `
    document.getElementById('book-list').appendChild(ROW);
  }

  showError() {
    const ERROR = document.getElementById('error');
    ERROR.classList.remove('hide');
    setTimeout(()=>ERROR.classList.add('hide'), 3600);
  }

  clearInput(title, author, isbn) {
    title.value = '';
    author.value = '';
    isbn.value = '';
  }

  removeBook(e) {
    e.parentElement.parentElement.remove();
  }
}

// ===============
// EVENT LISTENERS
// ===============

// Load books from local storage
document.addEventListener("DOMContentLoaded", ()=> Storage.displayBooks());

// Add book
document.querySelector('#input-area [type="submit"]').addEventListener('click', (e)=> {
  const TITLE = document.getElementById('book-title'),
        AUTHOR = document.getElementById('author'),
        ISBN = document.getElementById('isbn');
  // validate HTML inputs
  if(!TITLE.checkValidity() || !AUTHOR.checkValidity() || !ISBN.checkValidity()) {
    const UI = new UserInterface();
    UI.showError();
    return
  };
  // create book and update UI
  const BOOK = new Book(TITLE.value, AUTHOR.value, ISBN.value);
  const UI = new UserInterface();
  UI.addBook(BOOK);
  UI.clearInput(TITLE, AUTHOR, ISBN);

  Storage.addBook(BOOK);

  e.preventDefault();
});

// Remove book
document.getElementById('book-list').addEventListener('click', function(e){
  let eTarget = e.target.closest('.delete');
  if(!eTarget) return;
  
  const UI = new UserInterface();
  UI.removeBook(eTarget);

  Storage.removeBook(eTarget.parentElement.previousElementSibling.textContent);
});

// =============
// Local storage
// =============

class Storage {
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static displayBooks() {
    const books = Storage.getBooks();
    books.forEach((book)=>{
      const UI = new UserInterface;
      UI.addBook(book);
    })
  }

  static addBook(book) {
    const books = Storage.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
  
  static removeBook(isbn) {
    const books = Storage.getBooks();
    books.forEach((book, index)=>{
      if(book.isbn === isbn){
        books.splice(index, 1);
      }
    })
    localStorage.setItem('books', JSON.stringify(books));    
  }
}