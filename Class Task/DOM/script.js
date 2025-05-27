const bookList = document.querySelector('#book-list ul');
bookList.addEventListener('click', (e) => {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        bookList.removeChild(li);
    }
});

const addForm = document.forms['add-book'];
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    if (value !== '') {
      const li = document.createElement('li');
      li.textContent = value;
      const deleteBtn = document.createElement('span');
      deleteBtn.textContent = 'delete';
      deleteBtn.className = 'delete';
      li.appendChild(deleteBtn);
      bookList.appendChild(li);
      addForm.querySelector('input[type="text"]').value = '';
    }
});

const searchInput = document.querySelector('#page-banner input');

searchInput.addEventListener('input', function() {
  const filter = this.value.toLowerCase();
  const bookItems = document.querySelectorAll('#book-list li');
  bookItems.forEach(item => {
    const bookName = item.firstChild.textContent.toLowerCase();
    item.style.display = bookName.includes(filter) ? '' : 'none';
  });
});