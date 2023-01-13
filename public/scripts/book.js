export class Book {
    constructor(name, genre, price, reviews) {
        this.name = name;
        this.genre = genre;
        this.price = price;
        if (reviews)
            this.reviews = reviews;
        else
            reviews = [];
    }
}
