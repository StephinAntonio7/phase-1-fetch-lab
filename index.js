function fetchBooks (){
    return fetch ("https://anapioficeandfire.com/api/books")
    // translating the response to the database. Response is being translated to something you can read
    .then((resp) => resp.json())
    // Takes readable info (json) passes it to the function renderBooks so it shows on HTML
    .then((json) => renderBooks (json))
  }

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
