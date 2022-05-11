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
  let correctShelf = library.shelves[genre];
  correctShelf.push(book);
}

function checkoutBook(library, title, shelf) {
  let correctShelf = library.shelves[shelf];
  for (let i = 0; i < correctShelf.length; i++) {
    const element = correctShelf[i];
    if (element.title === title) {
      let index = correctShelf.indexOf(title);
      correctShelf.splice(index, 1);
      return `You have now checked out ${title} from the ${library.name}`;
    }
  }
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
};
