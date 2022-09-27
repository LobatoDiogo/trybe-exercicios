const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

//         -- EXERCICIO 1

function formatedBookNames() {
    return books.map((elemento) => `${elemento.name} - ${elemento.genre} - ${elemento.author.name}`);
}
console.log(formatedBookNames());

//         -- EXERCICIO 2 

function nameAndAge() {
    return books.map((book) => (
        {
            age: book.releaseYear - book.author.birthYear,
            author: book.author.name,
        }
    )).sort((prop1, prop2) => prop1.age - prop2.age);
};
console.log(nameAndAge());

//          -- EXERCICIO 3

function fantasyOrScienceFiction() {
    return books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
}
console.log(fantasyOrScienceFiction());

//          -- EXERCICIO 4

function oldBooksOrdered() {
    return books.filter((book) => (book.releaseYear < 1962)).sort((book1, book2) => book1.releaseYear - book2.releaseYear);

}
console.log(oldBooksOrdered());

//          -- EXERCICIO 5

function fantasyOrScienceFictionAuthors() {
    return books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
        .map((elemento) => elemento.author.name).sort();
}
console.log(fantasyOrScienceFictionAuthors());

//          -- EXERCICIO 6

function oldBooks() {
    return books.filter((book) => (book.releaseYear < 1962))
        .map((elemento) => elemento.name);

}
console.log(oldBooks());