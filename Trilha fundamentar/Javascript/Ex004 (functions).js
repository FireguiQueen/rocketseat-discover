/* Quando criamos uma função, estamos dizendo que ele determiando bloco de código (escopo) deverá
ser guardado em memória, ou seja, este escopo está guardado para ser chamado futuramente.
*/






/*                                      Function declaration                                    */

// -> Começa com a palavra reservada "function"
// -> Logo após é colocado o nome da função (mas respeite a sintaxe, há algumas "limitações" para noems)
// -> Depois abrimos parentesis (), e nele podemos passar parâmetros ou não
// -> E então abrimos o corpo da função, especificando o que ela irá fazendo dentro das chaves {}
// -> E finalmente invocamos a função, utilizando seu nome e paretensis (independente de haver parâmetros ou não, é obrigatório chamar a função com parentesis)


function sayHi()        // Palavra reservada "function" + identificador (nome da função)
{                       // Abrir chaves para começar o corpo da função
    console.log('Hi');  // Corpo da função 
} 
sayHi();                // Invocando a função


// Também podemos fazer o contrário 
sayHi();    // <-- A função foi invocada antes mesmo de ser criada. Podemos fazer isto por conta do hoisting
function sayHi(){                       
    console.log('Hi');  
} 

/*                  O hoisting não funciona para function expressions

juice()                                                 <-- Não podemos chamar a função antes
const juice = function(){
    console.log('Suquinho de maçã')
}
*/

                              




/*                                      Function anonymous                                        */

// -> Uma função que não possui identificador
// -> Geralmente será utilizado numa function arrow ou expression
// -> Quando feita sozinha, precisa ser envolvida por parentesis
// -> Para chamar a função é obrigatório colocar os "()" assim que a função terminar

(function(){
    console.log('Isto é uma função anônima! Perceba que ela ela está dentro de parentesis');
})
();

// Assim que terminamos a função, a mesma já foi invocada. Por ser totalmente anônima, não podemos fazer isto.:
/*
(function(){
    console.log('Isto é uma função anônima! Perceba que ela ela está dentro de parentesis');
})
console.log('oi') 
(); <-- Precisa ser invocada antes do console.log acima
*/








/*                                      Function expression                                       */

// -> Consiste em criar uma função dentro de uma variável (const, let, var)
// -> A função pode ser anônima ou não (recomendo sempre colocar anônima)
// -> Para chamar a função, basta chamar o identificador da variável + parentesis

let sayTwoWords = function(){
    console.log('Hi');  
    console.log('Hello');  
};
sayTwoWords(); // invoque a função utilizando o nome da variável 


// Usando parâmetros
// dentro dos paretensis ficam nossos parâmetros que podem ter valores quando invocarmos a função
// esses parâmetros serão trocados por argumentos que serão dados ao invocar a função
let sayThreeWords = function(word1, word2){ 
    console.log(`${word1}, ${word2}`);
};
sayThreeWords('batata', 'feijão');
                   // |-> Colocando argumentos que serão colocados no lugar dos parâmetros 
                   /* A diferença entre parâmetros e argumentos é que os parâmetros são as 
                   variáveis definidas na declaração da função ou método, enquanto os argumentos 
                   são os valores que são passados a essas variáveis quando a função ou método é 
                   chamada. */




function sum(n1, n2){
    console.log(`A soma entre ${n1} e ${n2} é igual a: ${n1 + n2}`);
}
sum(312, 235);


// Também podemos usar variáveis
function names(name1, name2, name3){
    console.log(`
    Nome 01: ${name1}
    Nome 02: ${name2}
    Nome 03: ${name3}
    `)
}
let nm1 = 'Jack';
let nm2 = 'Marlin';
let nm3 = 'Hector';
names(nm1, nm2, nm3);







/*                                      Arrow function                                       */

// -> Pode ser utilizada junto a uma função anônima ou expression 
// -> Não há necessidade de usar parentesis quando usamos apenas um parâmetro (se não passar nenhum parâmetro, os parentesis também são obrigatórios)
// -> Não há necessidade de usar "return" e chaves {} quando iremos retornar somente uma única coisa


// Expression 
const sum_ = (x, y) => {
    console.log(x+y);
}
sum_(14, 14);


// Expression (retornando somente um único valor - as chaves não são necessárias)
const sayHello = () => console.log('Olá');
sayHello();

// Expression (retornando dois valores ou mais - as chaves são necessárias)
const sum__ = (x, y) => {
    console.log('O resultado da sua soma é.:')
    console.log(x+y);
}
sum__(14, 14);



// Anonymous
((x,y) => console.log(x+y)) 
(4,4);

// Anonymous (com apenas um parâmetro - paretensis dos PARÂMETROS NÃO são necessárias)
(FraseMotivacional => console.log(FraseMotivacional)) 
('Não falte o dia de perna na academia!')





/*                                      Callback function                                       */

// -> Muito utilizada com a arrow function
// -> É basicamente colocar uma outra função nos argumentos ao invocar a função principal

function cumprimentar(cumprimento_1, cumprimento_2){ // <-- Função principal

    // Primeiro dizemos que determinada função será ativa dentro da função principal
    // Não definimos o que a função irá fazer, o que ela irá fazer será escrito como argumento
    // Ou seja, a função é chamada dentro deste escopo, mas sua declaração é feita "lá fora"
    cumprimento_1();
    cumprimento_2();
}

// Agora passamos outras funções aqui que irão substituir os parâmetros
cumprimentar(
    () => console.log('Olá!'), // << Vírgulas são necessárias, pois ainda são argumentos
    () => console.log('Opa, tudo bem?')
)