require('./styles/app.css');
const UI = require('./UI');

document.addEventListener('DOMContentLoaded', e => {
    UI.renderBooks();
});

document.getElementById('book-form')
    .addEventListener('submit', e => {
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;
        const image = document.getElementById('image').files;
        
        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('isbn', isbn);
        formData.append('image', image[0]);
    
        UI.addNewBook(formData);
        UI.renderMessage('New Books Added', 'success', 3000);
        e.preventDefault();
    });

document.getElementById('books-cards')
    .addEventListener('click', e => {
        if (e.target.classList.contains('delete')) {
            UI.deleteBook(e.target.getAttribute('_id'));
            UI.renderMessage('New Books Deleted', 'danger', 2000);
        };

        e.preventDefault();
    })