// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UserInterface() {}

// Access book list element
UserInterface.prototype.bookList = document.getElementById('book-list');

// Add book to list
UserInterface.prototype.addToList = function(book){
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
UserInterface.prototype.clearInput = function(title, author, isbn) {
  title.value = '';
  author.value = '';
  isbn.value = '';
};

// Show error message
function showError() {
  const ERROR = document.getElementById('error');
  ERROR.classList.remove('hide');
  setTimeout(()=>ERROR.classList.add('hide'), 3600);
}

// Delete book
UserInterface.prototype.deleteBook = function(e){
  e.parentElement.parentElement.remove();
}

// Submit button, event listener, add book
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
  const UI = new UserInterface();
  UI.addToList(BOOK);
  UI.clearInput(TITLE, AUTHOR, ISBN);

  e.preventDefault();
});

// Minus icon, event listener, remove book
document.getElementById('book-list').addEventListener('click', function(e){
  let eTarget = e.target.closest('.delete');
  if(!eTarget) return;
  
  const UI = new UserInterface();
  UI.deleteBook(eTarget);
});