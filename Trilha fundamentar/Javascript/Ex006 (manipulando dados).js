// CONVERTENDO TIPOS DE DADOS

/* Type conversion  vs  type coersion 
// -> Conversão de um tipo de dado para outro tipo
// -> Pode ser feito pelo próprio JS ou por nós usando métodos
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








// CONTANDO QUANTOS CARACTERES HÁ EM DETERMINADA FRASE/VALOR NUMÉRICO

// Funciona perfeitamente
let nome = "Guilherme".length
console.log(nome) // 9


// O resultado abaixo será "undefined" pois o LENGTH não funciona para tipo de dado "NUMBER"
let digitos = 844
console.log(digitos.length)

// Então uma conversão forçada será necessária
let digitos_2 = 844
console.log(String(digitos_2).length) // 3 (pois há 3 caracteres na string)

// Tome cuidado caso haja um valor quebrado 
let digitos_3 = String(844.55)
console.log(digitos_3.length) // 6 (pois há 6 caracteres - a vírgula também conta como caracter)

// Podemos resolver isto assim.:
let digitos_4 = String(424.22)
console.log(digitos_4.replace('.','').length)








// ADICIONANDO CASAS DECIMAIS
let wallet = 54 
console.log(wallet.toFixed(2))


// Também podemos utilizar do replace
let green_wallet = 78
console.log(green_wallet.toFixed(2).replace('.',','))





// STRINGS EM MAIÚSCULAS
let grito = 'olá, está me ouvindo?'
console.log(grito.toUpperCase())

// STRINGS EM MINÚSCULAS
let comprimentar = 'OLÁ, TUDO BEM? COMO VAI?'
console.log(comprimentar.toLowerCase())





// CRIANDO ARRAYS UTILIZANDO STRINGS
// Após usar o método split em uma string, você cria uma array de strings, onde cada elemento da array 
// é uma parte da string original, separada pelo separador especificado no argumento do método split.
let phrase = "Esta pequena frase será dividida"
let list_phrase = phrase.split('d') // Aqui dentro passamos como a string será dividida na array
                                    // Ou seja, a cada caracter "d" encontrado na string, a array será dividida 
                                    // e o "d" será cortado
console.log(list_phrase)


// TAMBÉM PODEMOS CRIAR STRINGS UTILIZANDO ARRAYS (E AINDA SEPARANDO OS ITENS)
// Após usar o método 'join' em um array, você cria uma string que contém todos os elementos do array, 
// separados pelo separador especificado como argumento do método join.
fruits = ['mango', 'avocado', 'watermelon', 'banana']
let list_fruits = fruits.join(`, `)
console.log(list_fruits)

const chracters = ['Joel', 'Ellie', 'Bill', 'Frank'].join('-')
console.log(chracters.split('-'))








// VERIFICANDO SE HÁ DETERMINADO CARACTER OU PALAVRA NA STRING
const motivational = '"Durma enquanto eles estão a dormir, estude enquanto eles estão a procrastinar.."'
console.log(motivational.includes('durma'))

// Será retornado pois não há "durma" na string e sim "Durma", com D maiúsculo
// Podemos resolver este problema mandando a string se transformar em minúsculo, 
// e sempre fazer a validação desta maneira
console.log(motivational.toLowerCase().includes('durma')) // true





// CRIANDO ARRAY USANDO CONSTRUCTOR
// Isto é útil  quando você deseja inicializar uma lista de valores que será preenchida 
// futuramente em seu código.
// Lembra-se, só podemos usar o contructor quando o objeto existe, mas não esqueça que o 
// array já é um objeto.
const lista_vazia = new Array(10)
console.log(lista_vazia)




// CONTANDO ITEMS NUM ARRAY
const motivational_list = [
    function(){ return 'Seja o que desejas, mas não deseje ser um vagabundo'},
    function(){ return 'Escolas em geral são o contrário dos processos do seu gerenciador de tarefas, pois eles são úteis'}
]
console.log(motivational_list.length)





const huh = "Omg dude that's nice".split(' ')
console.log(huh)