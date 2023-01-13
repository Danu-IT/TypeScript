export class Book {
    name: string;
    genre?: string;
    price?: number;
    reviews?: [string][];
    constructor(name: string, genre?: string, price?: number, reviews?: [string][]) {
        this.name = name;
        this.genre = genre;
        this.price = price;
        if (reviews) this.reviews = reviews
        else reviews = []
    }
}
