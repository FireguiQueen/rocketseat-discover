/* Quando criamos uma função, estamos dizendo que ele determiando bloco de código (escopo) deverá
ser guardado em memória, ou seja, este escopo está guardado para ser chamado futuramente.
*/


/*                                      Function declaration                                    */

// -> Começa com a palavra reservada "function"
// -> Logo após é colocado o nome da função (mas respeite a sintaxe, há algumas "limitações" para noems)
// -> Depois abrimos parentesis (), e nele podemos passar parâmetros ou não
// -> E então abrimos o corpo da função, especificando o que ela irá fazendo dentro das chaves {}
// -> E finalmente invocamos a função, utilizando seu nome e paretensis (independente de haver parâmetros ou não, é obrigatório chamar a função com parentesis)



function sayHi(){ // declaração       
    console.log('Hi');  
}
sayHi();    // inovanco a função






/* Function expression */
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
