function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
}

function addBook(library, book) {
  let genre = book.genre;
  let correctShelf = library.shelves.genre;
  correctShelf = [];
  correctShelf.push(book);
}

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};
