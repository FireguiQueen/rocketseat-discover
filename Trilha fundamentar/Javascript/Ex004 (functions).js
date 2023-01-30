/* Quando criamos uma função, estamos dizendo que ele determiando bloco de código (escopo) deverá
ser guardado em memória, ou seja, este escopo está guardado para ser chamado futuramente.
*/


/* Function declaration */
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
// dentro dos paretensis ficam nossos argumentos que podem ter valores quando invocarmos a função
// são como variáveis, porém para as funções
let sayThreeWords = function(word1, word2){ 
    console.log(`${word1}, ${word2}`);
};
sayThreeWords('batata', 'feijão');
                   // |-> Trocando os parâmetros da função por valores 


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
