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


