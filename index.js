// index.js

// Called automatically when index.html loads
function fetchBooks() {
  // Return the fetch so the test suite can “see” it
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json()) // turn JSON text into a JS object
    .then((books) => renderBooks(books)); // send data to renderBooks
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const p = document.createElement("p");
    p.textContent = book.name;
    main.appendChild(p);
  });
}

fetchBooks();
