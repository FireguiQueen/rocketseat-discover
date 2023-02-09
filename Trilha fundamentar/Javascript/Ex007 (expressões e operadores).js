/* 
Operandos: 
São aqueles valores utilizados juntos aos operadores, por exemplo..:
-> 51 + 55 

Na string acima temos um operador (+) e dois operandos (51 e 55).
É importante saber o que são operandos, pois determinados operadores 
irão trabalhar com um número específico de operandos

Por exemplo:
O "+" é um operador binário, neste caso, algo binário é algo que composto por dois elementos de informação.
Pelo fato do operador "+" ser binário, será necessário dois operandos para trabalhar com ele
->>4   + ->>4

Ou quando temos operadores unários, que irão trabalhar somente com UM único operando.:
No caso abaixo, "typeof" é um operador unário, e "frase bacana" é um operando.
typeof "frase bacana"

Ou seja, cada operador irá trabalhar com uma quantia especifica de operandos
Operadores binários irão trabalhar com dois operandos, operadores unários irão trabalhar com um operando
e operadores ternários irão trabalhar com três operandos.

Operadores.:
Em JavaScript, existem três tipos de operadores: binários, unários e ternários.

    Unary
    -> trabalha com um operando

    Binary
    -> trabalha com dois operandos 

    Ternary
    -> trabalha com três operandos
*/



//                                  UNARY

// Operadores: '++', '--', 'typeof', 'delete'
let saldo = 42
console.log(++saldo) // adiciona +1 a variável "saldo"

let saldo2 = 20
console.log(--saldo2) // remove -1 a variável "saldo2"

console.log(typeof saldo) // nos informa o tipo de dado da variável "saldo"

const lista = ['oi', 'olá']
delete lista[0] // mandamos deletar o index "0" da lista acima
console.log(lista)

const pessoa = {
    nome: "Walter White",   
    apelido: "Heisenberg",
    age: 'Unknown'
}
delete pessoa.apelido // mandamos deletar uma propriedade do objeto "pessoa"
console.log(pessoa)



//                                  BINARY

// Operadores: '>' ,  '<' , '>=' ,  '<='.. E diversos outros
let Grupo_A = 343
let Grupo_B = 41

// Subtração
let diferenca = Grupo_A - Grupo_B
console.log(diferenca)

// Maior
let MaiorGrupo = Grupo_A > Grupo_B  // irá retornar "true"
console.log(MaiorGrupo)




//                                  Ternary

// Há apenas um operador ternário, o "?" que irá retorar um valor boolean
// Perceba que foi necessário 3 valores, sendo um operando "red_wallet", um operador ">" e outro operando "green wallet"

// Caso seja verdadeiro, a primeira string será printada, caso seja falso, a segunda string será printada
// Como a carteira vermelha tem mais saldo, logo a primeira string foi printada
const Red_wallet = 45
const Green_wallet = 34
let Mais_dinheiro = Red_wallet > Green_wallet? 'A carteira vermelha tem mais dinheiro que a verde' : 'A verde tem mais dinheiro'
console.log(Mais_dinheiro)





// NEW
// Abaixo estamos dizendo que a variável "nome" será um novo objeto e também irá receber uma string 
let nome = new String('Guilherme')
console.log(nome)

// Já que "nome" é um objeto podemos adicionar propriedades..:
nome.age = 44
console.log(nome)







//                                      Operadores aritimético


// multiplicando: * 
console.log(2 * 7)
console.log(2.33 * 7.56)


// somando: +
console.log(55 + 2)


// subtraindo: - 
console.log(53 - 4)


// Dividindo: /
console.log(10 /2)

// Resto da divisão: %
console.log(10 % 2)


// Incremento: ++
let teste = 1
let teste_1 = 1

// O valor só será "2" caso seja printado de novo, pois o "++" no lado direito faz com que o valor só 
// mude na próxima vez
console.log(teste++) // resultado: 1 
console.log(teste++) // resultado: 2 


// Caso queira a resposta de imediato, você pode colocar o "++" no lado esquerdo
console.log(++teste_1)





// Decremento: -- 
let saldo_banco = 1 
let saldo_banco_1 = 1 
console.log(--saldo_banco)

saldo_banco_1--
console.log(saldo_banco_1--)



// Exponecial: **
console.log(10 ** 2)
console.log(3 ** 3)




// Mudando a precedência dos operadores: Grouping operator ( )
const calc = 5 + 4 * 2 // 13 
const calc_1 = (5 + 4) * 2 // 18





//                              Operadores de comparação 
const carteira1 = 4
const carteira2 = 6


// Igualdade: ==
console.log(carteira1 == carteira2) // false, pois "4" não é igual a "6"
console.log(typeof carteira1 == typeof carteira2) // true, pois ambas são do tipo string, logo ambas são iguais


// Diferente: !=
console.log(carteira1 != carteira2) // true, pois "4" é DIFERENTE de "6"
console.log(typeof carteira1 != typeof carteira2) // false, pois ambas são do tipo string, e não são diferentes




//              Operadores de comparação: estreitamente igual e estreitamente diferente
const n1 = 1
const n2 = '1'

// Se perguntarmos se a const "n1" é igual a const "n2", o resultado será "true"
console.log(n1 == n2)
// Isto ocorre pois "==" não compara os TIPOS de dados, apenas os valores
// Ambas as variáveis possuem "1" como valor, mas seus tipos de dados são diferentes
// Então uma const é "string" a outra const é "number"


// Para resolver isto, podemos usar do "===", onde ele compara também o tipo de dado
console.log(n1 === n2) // false


console.log(n1 != n2) // false, pois eles não são difentes
console.log(n1 !== n2) // true, pois eles são diferentes (o seus tipo de dados são diferentes..: string e number)





// Maior: > 
console.log(1 > 2) // false


// Menor: <
console.log(1 < 2) // true


// Maior igual: >= 
console.log(1 >= 1) // true, o um não é maior que um, MAS ele É IGUAL a 1

// Menor igual: <=
console.log(2 <= 2) // true, o dois não é maior que o dois, MAS ele é IGUAL a 2








// Operadores de atribuição 
let x = 5

// Assigment: = 
const name = 'Pablo'


//           UTILIZAM DO MESMO VALOR + ALGUMA ATRIBUIÇÃO
/* 
    Se colocarmos por exemplo.:
    x += 2

    Basicamente estamos dizendo "X é igual a X mais 2"


    Se colocarmos por exemplo.:
    x *= 2

    Estamos dizendo - "X é IGUAl a X vezes 2"
*/


// Subtraction assigment: -= 
x -= 5 

// seria o mesmo que fazer: 
x = x - 5




// Multiplication assigment: *= 
x *= 4

// seria o mesmo que fazer
x = x * 4



// Division assigment: /= 
x /= 2

// seria o mesmo que fazer
x = x / 2



// Podemos fazer também para o resto da divisão
x %= 10 

// seria o mesmo que fazer
x = x % 10


// Também podemos fazer com o exponencial
x **= 4

// seria o mesmo que fazer 
x = x ** 4





