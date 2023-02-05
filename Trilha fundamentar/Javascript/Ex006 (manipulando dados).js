/* Type conversion  vs  type coersion 

// -> Conversão de um tipo de dado para outro tipo
// -> Pode ser feito pelo próprio JS ou por nós
*/


// Aqui ocorre o "type coersion"
// pois o próprio JS converte o "55" para o tipo STRING
console.log(55 + 'oi')  // Resultado: 55oi

// Aqui ocorre o "type conversion" pois nós mesmos estamos convertendo para outro tipo de dado
console.log(55 + Number('oi')) // Resultado: NaN (pois 'oi' não pode ser número)

// Type conversion (transformamos a string '4' no tipo de dado "number")
console.log(55 + Number('4'))