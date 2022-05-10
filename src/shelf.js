function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.push(book);
  }
}

function unshelfBook(title, shelf) {
  let found = shelf.find((element) => element.title === title);
  let index = shelf.indexOf(found);
  shelf.splice(index, 1);
}

function listTitles(shelf) {
  let str = "";
  for (let i = 0; i < shelf.length; i++) {
    const element = shelf[i];
    if (i === shelf.length - 1) {
      str += element.title;
    } else {
      str += element.title + ", ";
    }
  }
  return str;
}

function searchShelf(shelf, title) {
  let searchTitle = (element) => element.title === title;
  return shelf.some(searchTitle);
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf,
};
