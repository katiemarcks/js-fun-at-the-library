class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }
  greetPatron(name, isMorning) {
    if (isMorning) {
      return `Good morning, ${name}!`;
    } else {
      return `Hello, ${name}!`;
    }
  }
  findBook(title) {
    this.shelves = this.library.shelves.fantasy.concat(
      this.library.shelves.fiction,
      this.library.shelves.nonFiction
    );

    this.searchTitle = (element) => element.title === title;
    this.result = this.shelves.some(this.searchTitle);
    if (this.result === true) {
      this.book = this.shelves.find((element) => element.title === title);
      this.genre = this.book.genre;
      this.correctShelf = this.library.shelves[this.genre];

      this.index = this.correctShelf.indexOf(this.book);
      this.correctShelf.splice(this.index, 1);
      return `Yes, we have ${title}`;
    } else {
      return `Sorry, we do not have ${title}`;
    }
  }
  calculateLateFee(daysLate) {
    return Math.ceil(daysLate * 0.25);
  }
}

module.exports = Librarian;
