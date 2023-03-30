//                                             for 

// Criação da variável (inicialização)
// Condição (caso verdade, o código se repete)
// O que irá acontecer assim que cada repetição for finalizada


// O que foi dito no código abaixo.:
/*
    I é igual a 0 (zero)
    Enquanto I for menor que 10, excecute o bloco de códigos abaixo
    E no final, somente I + um
*/
for(let i = 0; i < 10; i++){
    console.log(`${i}`)
}

console.log('-------------')

// Também podemos controlar melhoar nossa estrutura de repetição utilizando o "if" e "break"

/*
    Foi dito que, caso a variável I seja menor ou igual a zero   OU     I seja maior que 100
    O código irá quebrar, ou seja, irá parar de executar
*/
for(let i = 1; i <= 100; i++){
    if(i <= 0 || i > 100){
        break;
    }
    console.log(i)
}

/*
    O "continue" serve para ignorar determinada parte do loop
    Porém continuar exutando o mesmo
*/

for(let i = 100; i <= 1000; i+= 100){
    if(i == 500){
        continue;
    }
    console.log(i)
}



/* 
    O "continue" pode ser muito útil por exemplo para puxar
    apenas números pares

    Foi dito o seguinte
    SE o resta da divisão entre I dividido por dois for DIFERENTE de 0 (resulta num número impar)
    ele irá ignorar esses números no loop
*/ 
for(let i = 1; i <= 200; i++){
    if(i % 2 != 0){
        continue;
    }
    console.log(i)
}


console.log('------------------')






//                                             while
// A inicialização fica fora
// A condição fica entre os "()" igual ao "for"
// O que irá ocorrer após a repetição fica dentro do corpo do while

/*
    I é igual a 1
    Enquanto I for menor ou igual a 10
    Printe o valor atual do I e some +1 a variável I
*/
let i = 1 // inicialização
while(i <= 10){ // condição
    console.log(i)
    i++
}





//                                         for... of 
/* 
    Serve para percorremos sequencialmente um objeto iterável
    Neste caso, o nosso objeto é a STRING name

    Estamos dizendo que MD representa um único caractere na variável 'name'

    Isto ocorre pois "of" representa a sequencia do que estamos trabalhando.
    Como é uma string, a sequência será feita por letras.. "G", "u", "i"

    Se fosse uma array, a sequencia seria feita pelos itens desta array.
*/
const name = 'Guilherme'
for (let md of name){
    console.log(md)
}




//                                          for in
// Serve exclusivamente para acessar propriedades de um objeto 

const person = {
    name: 'Guilherme',
    age: 'unknown',
    weight: `${64}kg`    
}

/*
    Foi dito que.:
    A variável "property" representa uma propriedade do objeto "person".
    Para cada propriedade, ele irá executar o bloco de código abaixo.

    Primeiro colocamos "property", então ele irá colocar a primeira propriedade do objeto.:
    "name"

    Depois, para acessar o valor desta propriedade, nós colocamos o nome do objeto "person"
    junto aos colchetes, que também servem para acessar uma propriedade de um objeto

    Então basicamente foi dito.:
    person[name]

    pois property é uma variável que recebe uma propriedade, por isto fizemos person[property]
*/
for (let property in person){
    console.log(`${property}: ${person[property]}`)
}





