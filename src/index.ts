class Book {
    name: string;
    genre: string;
    pageAmount: number;
    constructor(name: string, genre: string, pageAmount: number) {
        this.name = name;
        this.genre = genre;
        this.pageAmount = pageAmount;
    }
}
const books = [
    new Book("Властелин Колец", "Фентази", 500),
    new Book("Гарри Поттер", "Фентази", 300),
    new Book("Игра Пристолов", "Фентази", 500),
];

const findSuitableBook = (genre: string, pagesLimit: number, multiplayer: boolean = true): Book => {
    const findAlgoritm = (book: Book) => {
        return book.genre === genre && book.pageAmount <= pagesLimit;
    };
    if (multiplayer) {
        return books.filter(findAlgoritm);
    } else return books.find(findAlgoritm);
};


console.log(findSuitableBook("Фентази", 500));