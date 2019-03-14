const DOM_TITLE = document.getElementById('book-title'),
      DOM_AUTHOR = document.getElementById('author'),
      DOM_ISBN = document.getElementById('isbn'),
      DOM_SUBMIT = document.querySelector('#input-area [type="submit"]'), 
      DOM_TABLE_BODY = document.querySelector('#table-area table tbody')

// Submit Button -- event listener
DOM_SUBMIT.addEventListener('click', (e)=> {
  if(!DOM_TITLE.checkValidity() || !DOM_AUTHOR.checkValidity() || !DOM_ISBN.checkValidity()) return;
  newBook(); 
  e.preventDefault();
});

// Add new book
function newBook() {
  const TABLE_ENTRY = document.createElement('tr'),
        ENTRY_TITLE = document.createElement('td'),
        ENTRY_AUTHOR = document.createElement('td'),
        ENTRY_ISBN = document.createElement('td'),
        ENTRY_DELETE = document.createElement('td'),
        DELETE_ICON = document.createElement('i')
  
  ENTRY_TITLE.textContent = DOM_TITLE.value;
  ENTRY_AUTHOR.textContent = DOM_AUTHOR.value;
  ENTRY_ISBN.textContent = DOM_ISBN.value;

  DELETE_ICON.classList.add('material-icons', 'sm');
  DELETE_ICON.textContent = 'indeterminate_check_box';
  ENTRY_DELETE.appendChild(DELETE_ICON);

  TABLE_ENTRY.appendChild(ENTRY_TITLE);
  TABLE_ENTRY.appendChild(ENTRY_AUTHOR);
  TABLE_ENTRY.appendChild(ENTRY_ISBN);
  TABLE_ENTRY.appendChild(ENTRY_DELETE);
  
  DOM_TABLE_BODY.appendChild(TABLE_ENTRY);
}