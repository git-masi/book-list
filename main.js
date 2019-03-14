// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function Ui() {
  this.bookList = document.getElementById('book-list');
}

// Add book to list
Ui.prototype.addToList = function(book){
  const ROW = document.createElement('tr');
  ROW.innerHTML = 
  `
  \t<td>${book.title}</td>
  \t<td>${book.author}</td>
  \t<td>${book.isbn}</td>
  \t<td><i class="material-icons sm delete">indeterminate_check_box</i></td>
  `
  this.bookList.appendChild(ROW);
};

// Clear inputs
Ui.prototype.clearInput = function(title, author, isbn) {
  title.value = '';
  author.value = '';
  isbn.value = '';
};

// Show error message
function showError() {
  const ERROR = document.getElementById('error');
  ERROR.classList.remove('hide');
  setTimeout(()=>ERROR.classList.add('hide'), 4000);
}

// Submit Button -- event listener
document.querySelector('#input-area [type="submit"]').addEventListener('click', (e)=> {
  const TITLE = document.getElementById('book-title'),
        AUTHOR = document.getElementById('author'),
        ISBN = document.getElementById('isbn');
  // validate HTML inputs
  if(!TITLE.checkValidity() || !AUTHOR.checkValidity() || !ISBN.checkValidity()) {
    showError();
    return
  };
  
  const BOOK = new Book(TITLE.value, AUTHOR.value, ISBN.value);
  const UI = new Ui();
  UI.addToList(BOOK);
  UI.clearInput(TITLE, AUTHOR, ISBN);

  e.preventDefault();
});