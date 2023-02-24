/* 
    Baseado no Array de Livros por Categoria acima, faça os seguintes desafios
        • Contar o número de categorias
        • Contar o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Fazer uma function que irá receber o nome do autor como argumento e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
        {
            title: "Os segredos da mente milionária",
            author: "T. Harv Eker",
        },
        {
            title: "O homem mais rico da Babilônia",
            author: "George S. Clason",
        },
        {
            title: "Pai rico, pai pobre",
            author: "Robert T. Kiyosaki e Sharon L. Lechter",
        },
    ],
},

    {
        category: "Inteligência Emocional",
        books: [
        {
            title: "Você é Insubstituível",
            author: "Augusto Cury",
        },
        {
            title: "Ansiedade – Como enfrentar o mal do século",
            author: "Augusto Cury",
        },
        {
            title: "Os 7 hábitos das pessoas altamente eficazes",
            author: "Stephen R. Covey",
        },
    ],
},
];


//         • Contar o número de categorias
function countCategories(){
    let nOfCategories = booksByCategory.length;
    return nOfCategories
}
console.log(countCategories());



//         • Contar o número de livros em cada categoria
function countBooksInCategory(){
    for(let category of booksByCategory){
        console.log(`
        ${category.category}: ${category.books.length}`)
    }
}
countBooksInCategory();

