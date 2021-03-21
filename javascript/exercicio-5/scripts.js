// Buscando e contato dados de array
/*
    Baseado no array de livros por categoria abaiox, faça os seguintes desafios:
        * Contar o número de categorias e o número de livros em cada categoria
        * Contar o número de autores
        * Mostrar Livros do autor Augusto Cury
        * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'Os segredos da mente milionária',
                author: 'T. Harv Eker',
            },
            {
                title: 'O homem mais rico da Babilônia',
                author: 'George S. Clason',
            },
            {
                title: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lechter',
            },
        ],
    },
    {
        category: 'Inteligência Emocional',
        books: [
            {
                title: 'Você é insubstituível',
                author: 'Augusto Cury',
            },
            {
                title: 'Ansiedade - Como enfrentar o mal do século',
                author: 'Augusto Cury',
            },
            {
                title: 'Os 7 hábitos das pessoas altamente eficazes',
                author: 'Stephen R. Covey',
            },
        ],
    },
];

const totalCategories = booksByCategory.length; //contagem de total de caterogias
console.log(`O total de categorias é: ${totalCategories}`);

//contagem de total de livros por categoria
for(let category of booksByCategory){
    console.log('Total de livros da categoria: ' + category.category);
    console.log(`O total de livros por categoria é: ${category.books.length}`);
}

function countAuthors(){
    let authors = []; //criamos um novo array para os autores

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author);
            }
        }
    }

    console.log(`O total de autores dos livros é: ${authors.length}`)
}

countAuthors();

function booksOfAuthor(author){
    let books = []; //criamos um novo array para os livros

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.title);
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(', ')}`) //ajustando separação do novo array
}

booksOfAuthor('Augusto Cury');