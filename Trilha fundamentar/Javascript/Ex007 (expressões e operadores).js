/* 
Operadores.:
Em JavaScript, existem três tipos de operadores: binários, unários e ternários.

    Unary
    -> trabalha com um operando

    Binary
    -> trabalha com dois operandos 

    Ternary
    -> trabalha com 3 operandos
*/


//                                  UNARY

// Operadores: '++', '--'
let saldo = 42
console.log(++saldo) // adiciona +1 a variável "saldo"

let saldo2 = 20
console.log(--saldo2) // remove -1 a variável "saldo2"




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