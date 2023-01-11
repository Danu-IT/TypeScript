class Book {
  constructor(name, genre, pageAmount) {
    this.name = name;
    this.genre = genre;
    this.pageAmount = pageAmount;
  }
}
const books = [
  new Book("Властелин Колец", "Фентази", 500),
  new Book("Гарри Поттер", "Фентази", 300),
  new Book("Игра Пристолов", "Фентази", 400),
];

const findSuitableBook = (genre, pagesLimit, multiplayer) => {
  const findAlgoritm = (book) => {
    return book.genre === genre && book.pageAmount <= pagesLimit;
  };
  if (multiplayer) {
    return books.filter(findAlgoritm);
  } else return books.find(findAlgoritm);
};

console.log(findSuitableBook("Фентази", 450, false));
