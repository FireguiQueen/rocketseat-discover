/* Type conversion  vs  type coersion 

// -> Conversão de um tipo de dado para outro tipo
// -> Pode ser feito pelo próprio JS ou por nós
*/

// Convertando uma STRING para NUMBER
let BankAccount = Number('4.242420')
console.log(BankAccount, typeof BankAccount)

// Cuidado ao converter strings que utilizam caracteres não numéricos
let frase = 'Olá, tudo bem?'
console.log(Number(frase)) // Resultado: NaN

// Não precisamos tomar este cuidado de NUMBER para STRING pois strings aceitam qualquer caracter
let numbers = 44224224.12
console.log(String(numbers))


// Aqui ocorre o "type coersion"
// pois o próprio JS converte o "55" para o tipo STRING
console.log(55 + 'oi')  // Resultado: 55oi

// Aqui ocorre o "type conversion" pois nós mesmos estamos convertendo para outro tipo de dado
console.log(55 + Number('oi')) // Resultado: NaN (pois 'oi' não pode ser número)

// Type conversion (transformamos a string '4' no tipo de dado "number")
console.log(55 + Number('4'))