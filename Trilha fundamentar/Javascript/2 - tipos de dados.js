//                                  STRING
/* 
    - Uma cadeia de caracteres
    - Utiliza-se aspas simples (' '), aspas duplas (" ") ou template strings (``)
    
    - Mas por que existem formas diferentes para se criar uma string? 
      a reposta é simples, dependendo da situação, você sentirá a necessidade de utilizar (' ') ou (" ")
      em seu texto, sendo assim, caso seu texto possua aspas simples, como neste frase.:
        --> Let's do something

      Você não poderia colocar.:
      console.log(' Let's do something ');
      
      O correto seria.:
      console.log(" Let's do something ");


      E caso seja necessário usar de ambas as aspas (duplas e simples) você irá utilizar das templates strings.:
      console.log(`Uma vez um sábio me disse "I won't die if i live first"`)

      -> As template strings também são muito utilizadas quando precisamos colocar mais de uma linha. 
      (pois aspas simples/duplas são para strings em uma única linha)..
      
      -> E quando precisamos chamar uma variável de maneira prática.:
*/
      // Exemplo 00:
      let name = "Eduardo"
      console.log(`Olá, ${name}`);   // isto se chama interpolação
      console.log('Olá, ' + name);   // isto se chama concatenação 


console.log('Olá - aspas simples');
console.log("Olá - aspas duplas");
console.log(`Olá - Crase`);



// A CRASE (template strings) PERMITE COLOCAR VÁRIAS LINHAS..
console.log(`
Olá - Crase
Podemos colocar várias linhas assim
pois estamos usando a crase
...
`);




/* ----------------------------------------------------------------------------------- */


//                                   NUMBER
/*
    - números inteiros (-10, -5, 0, 1, 4, 33..)
    - reais (1.5 ; 33.5 ; 0.4 ; ..)
    - NaN  (Not a number)
    - Infinity (infinito)
*/

console.log(33);         // inteiro
console.log(-33);        // inteiro
console.log(43.5);       // real
console.log(10 / 'oi');  // NaN



/* ----------------------------------------------------------------------------------- */


//                                   BOOLEAN
/*
    - Somente DOIS valores (TRUE or FALSE)
    - Extremamente necessário para a criação de lógica de uma aplicação, podendo validar diversas coisas..
        Exemplo de algorítimo: A conta do usuário foi criada antes de 2015? Caso seja verdadeira, exclua 
        a conta do mesmo, caso seja falso, de vantagens para a conta.
*/
console.log(1 == 1); // true
console.log(1 == 2); // false
console.log(1+2 == 3? 'Caso seja "true", está mensagem irá aparecer' : 'Caso seja "false", está mensagem irá aparecer');
// O "?" é como se fosse uma pergunta, e nesta pergunta terá duas respostas, ou é verdadeiro ou é falso.
// Caso seja verdadeiro, a primeira mensagem será printada, caso seja falso, a segunda mensagem será printada.
// OBS: As mensagens precisam ser separadas pelo ":"



/* ----------------------------------------------------------------------------------- */


//                                   Undefined & Null
/*
    - Undefined: significa que algo não foi definido

    - Null: objeto que não possui nada dentro dele
*/
var oi = 
console.log(oi); // Undefinid..




/* ----------------------------------------------------------------------------------- */

//                                   Object
/*
    - Serve para estruturar seus dados

    - Todo objeto possui propriedades (até mesmo objetos da vida real possuem propriedades..)
        Exemplo: Objeto: Celular    |   Propriedade: cor, largura, altura..
        
    - Todo objeto possui funcionalidades
        Exemplo: Objeto: Capinha do celular   | funcionalidade: proteger o celular      
*/

// Para criar um objeto utiliza das chaves ({})
// Um objeto pode armazenar diversas propriedades
var pessoa = {               // objeto
    name: 'Flora',           // propriedade
    idade: 17,               // propriedade
    andar: function Walk(){  // método
        return `${this.name} está andando..`
    }    
}

// Também podemos escrever um método de maneira mais simplificada num objeto
const table = {
    type: 'wood',
    height: '120cm',
    width: '160cm',
    compactar (){    // não houve necessidade de uma "property name", a função foi colocada de maneira direta
        return 'A mesa foi compactada';
    }
}
console.log(table.compactar())

// PARA ACESSAR O OBJETO, COLOQUE O NOME DO OBJETO E A PROPRIEDADE QUE DESEJA ACESSAR
console.log(pessoa.name);  // retorna o nome
console.log(pessoa.idade); // retorna a idade



/* ----------------------------------------------------------------------------------- */

//                                   Array (vatores)
/*
    - Serve para estruturar seus dados em formato de uma lista

    - Um array pode armazenar diversos valores, e até mesmo objetos.
          
*/
// PARA CRIAR UM ARRAY UTILIZA-SE DOS COLCHETES ( [] ).
// O PRIMEIRO ITEM DA LISTA É SEMPRE REPRESENTADO PELO NÚMERO 0, O SEGUNDO ITEM PELO NÚMERO 1..
// DIFERENTE DA VIDA REAL, NA PROGRAMAÇÃO COMEÇAMOS A CONTA PELO NÚMERO 0

var lista_de_nomes = ['Flora', 'Guilherme'];
// use o nome da lista + colchetes especificando o item que deseja
console.log(lista_de_nomes[0]); // Retorna 'Flora', pois é o "0" item da lista

console.log(lista_de_nomes[0] == 'Flora'? '"Flora" é o item 0 da lista' : 'O item 0 da lista não se chama "Flora"'); 


// Podemos usar do "length" para saber quantos itens há na lista
var lista = ['Batata doce', 'Whey', 'Ovo cozido'];
console.log(lista.length) // 3 pois há três itens na lista


// Podemos reatribuir um item específico
var lista_animais = ['cachorro', 'gato', 'papagaio'] // 0: cachorro   ;  1: gato    ;   2: papagaio
console.log(lista_animais)

lista_animais[1] = 'leão' // Gato é o item 1, porém reatribuimos, colocando a string "leão" 
console.log(lista_animais)


// Lista com objetos
var Rio_de_Janeiro = [
    Bairros = {
        ricos: "Leblon, Copacabana, Ipanema",
        medianos: "Lagoa, São Conrado"
    },

    turismo = {
        caros: "Shopping, teatros",
        baratos: "Praias, museus, Parques"
    }
]

console.log(Rio_de_Janeiro[0].ricos)
// " [0] "     acessa o primeiro item da lista (os bairros)
// " .ricos "  acessa a propriedade do objeto "bairros" que mostra os bairros ricos


/* ----------------------------------------------------------------------------------- */


/* DADOS PRIMITIVOS */
// string
// number
// boolean
// undefined 
// BigInt
// Symbol


/* DADOS ESTRUTURAIS */
// function
// Array
// Object 
// Map
// Date
// ..


/* PRIMITIVO ESTRUTURAL */
// null


