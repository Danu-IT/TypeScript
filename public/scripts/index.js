import { Book } from './book.js';
// const findSuitableBook = (genre: string, pagesLimit: number, multiplayer: boolean = true): Book | Book[] => {
//     const findAlgoritm = (book: Book) => {
//         return book.genre === genre && book.pageAmount <= pagesLimit;
//     };
//     if (multiplayer) {
//         return books.filter(findAlgoritm);
//     } else return books.find(findAlgoritm);
// };
// const recomendedBook = findSuitableBook('Фентази', 500)
// if (recomendedBook instanceof Book) console.log(recomendedBook.name)
// else console.log(recomendedBook[1].name)
// console.log(findSuitableBook("Фентази", 500, true));
// const book = new Book('Harry Potter', 'фентази', 500);
// console.log(book.genre.toUpperCase(), book.price.toFixed(2))
let genre = 'fantasy';
let price = 980;
const reviews = [['s']];
// const book = new Book('Harry Potter', 'фентази', 500);
// const serialez = (value: unknown) => {
//     if (value === null) return value + ''
//     if (value instanceof Book) return `${value.name}, ${value.price}, ${value.genre}`;
// }
// console.log(serialez(book))
const book = new Book('Harry Potter', genre, price, reviews);
console.log(book);
