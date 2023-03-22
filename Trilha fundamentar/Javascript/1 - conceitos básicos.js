/*                                   FUNÇÕES

Funções são blocos de construção e são fundamentais em JavaScript ou em qualquer outra linguagem. 
Uma função é um conjunto de instruções que executa uma tarefa ou calcula
um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.
*/

function Diga_Oi(){     // Declarando a função
   console.log('Oi');   // Declarando o corpo da função 
}                       // Fechando a função
Diga_Oi();              // Invocando a função





/*                                   OBJETOS

Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome 
e um valor. Um valor de uma propriedade pode ser uma função, que é então considerada um "método". 
Compare-o com uma xícara, por exemplo. Uma xícara é um objeto, com propriedades. 
Uma xícara tem uma cor, uma forma, peso, um material de composição, etc. Da mesma forma, 
objetos em JavaScript podem ter propriedades, que definem suas características.
*/


console.log('...')
// console -> objeto
// .log    -> metódo (o ponto final é utilizado para acessar propriedades)
// ()      -> argumentos deste metódo
// Podemos dizer que é uma função do objeto ou simplesmente "método"


// Criando um objeto
const pessoa = {      // Declarando o objeto
   nome: 'Paulo',     // nome:   property name    |    "Paulo": property value
   idade: 19          // idade:  property name    |         19: property value
}
console.log(pessoa.nome);
             //|-> Primeiro chamamos o Objeto (pessoa), e depois uma de suas propriedades.





/* ------------------------------------------------------------------------------------------------- */


//                               Comentários em JS 

// Utilize-se " // " para fazer um comentário de uma única linha


/* 
Utiliza " /* " para fazer um comentário de bloco 
   Como este.. que você está lendo agora. 
*/ 
