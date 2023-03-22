// CONVERTENDO TIPOS DE DADOS

/* Type conversion  vs  type coersion 
// -> Conversão de um tipo de dado para outro tipo
// -> Pode ser feito pelo próprio JS ou por nós usando métodos
*/

// Convertando uma STRING para NUMBER
const cash = 4.242420
let BankAccount = Number(cash)
console.log(BankAccount, typeof BankAccount)

// Cuidado ao converter strings que utilizam caracteres não numéricos
let frase = 'Olá, tudo bem?'
console.log(Number(frase)) // Resultado: NaN

// Não precisamos tomar este cuidado de NUMBER para STRING pois strings aceitam qualquer caracter
let numbers = 44224224.12
console.log(String(numbers))


// Aqui ocorre o "type coersion"
// pois o próprio JS converte o "55" para o "type" STRING
console.log(55 + 'oi')  // Resultado: 55oi

// Aqui ocorre o "type conversion" pois nós mesmos estamos convertendo para outro tipo de dado
console.log(55 + Number('oi')) // Resultado: NaN (pois 'oi' não pode ser número)

// Type conversion (transformamos a string '4' no tipo de dado "number")
console.log(55 + Number('4'))

// POR CONTA DO "TYPE COERSION", OS TIPOS DE DADOS NÃO "BOOLEANS" PODEM SER BOOLEANS
// Isto acontece pois em determinado contexto, o valor precisa ser TRUE ou FALSE, por exemplo:
console.log('oi' == 'oi'? 'sim, oi é igual a oi' : 'oi não é igual a oi')
// No exemplo acima, um valor boolean é obrigatório para termos uma resposta.:
// Se o valor boolean for "TRUE", a primeira mensagem será printada "sim, oi é igual a oi"
// Se o valor boolean for "FALSE", a segunda mensagem será printada "oi não é igual a oi"

// Então como pode ver, dependendo do contexto precisamos ter um valor TRUE ou FALSE
// Caso o valor não seja boolean em contextos onde um valor "TRUE" ou "FALSE" são obrigatórios
// O próprio javascript irá converter um valor para um valor boolean

// FALSY (valores que são convertidos para FALSE se necessário)
0          // 0 sozinho será fase
-0         // 0 até mesmo "negativo" será false
""         // string sem valor será false
undefined  // um valor que não foi definido será false
NaN        // um valor que seja NaN será false

// O resultado abaixo será "Olá", pois um valor boolean é obrigatório. O "0" sozinho não é boolean
// e sim um "number", então o JS converte para um valor boolean, no caso, false.
console.log(0? 'Oi' : 'Olá')




//  TRUTHY (valores que são convertidos para TRUE se necessário)
{}       // objetos viram true
[]       // arrays serão true
"Teste"  // string COM valor serão true
1.2      // valores acima de 0 serão true
-1       // números negativos são true

// O resultado será "teste", pois qualquer número acima de 0 é considerado true
console.log(0.4? 'Teste' : '0mg')

// O resultado será "poggers", pois qualquer objeto é considerado true
console.log({}? 'poggers' : "poggn't")


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




// TRANSFORMANDO UMA CADEIA DE CARACTERES EM UMA ARRAY
// O "from" sugere que um Array deve ser criado "a partir de" outro objeto, seja ele uma string, 
// objeto ou outro tipo de objeto iterável.

// Neste caso, temos uma variável "word", que é uma string
// Então estamos dizendo que "a partir" da var "word" comece a gerar itens num array
const word = 'Lennisters'
console.log(Array.from(word))







// MANIPULAÇÕES BÁSICAS DE ADIÇÃO E REMOVAÇÃO DE ITEMS NUM ARRAY
let name_list = ['Flora', 'Guilherme', 'Julia', 'Pablo']

// ADICIONANDO UM ITEM AO FINAL DO ARRAY
// push significa "empurrar", estamos empurrando determinado argumento para o array.
name_list.push('Emilia')
console.log(name_list) 

// ADICIONANDO UM ITEM AO INÍCIO DO ARRAY
// unshift pode ser traduzido como "mudar o começo", estamos mudando o inicio da array
name_list.unshift('Lily')
console.log(name_list) 



// REMOVENDO O ITEM DO FINAL DA LISTA
name_list.pop()
console.log(name_list)

// REMOVENDO ITEM DO INICIO DA LISTA
name_list.shift()
console.log(name_list) 


// PEGANDO APENAS ALGUNS ITENS DA LISTA
// O resultado será um novo array, ou seja, isto não irá afetar o array principal pois uma 
// cópia será criada
var someNames = name_list.slice(0,2) // "0,3" -> A partir de qual item queremos até onde queremos
console.log(someNames) 

// Se tentarmos desta maneira, o console irá retornar o array original
name_list.slice(1,2)
console.log(name_list)



/*  O primeiro argumento do método "slice" informa a partir de qual índice do Array original 
    você deseja começar a extrair os itens, e o segundo argumento informa até qual índice você 
    deseja extrair os itens (não incluindo este índice).
*/ 
// Então se quisermos puxar o primeiro e segundo item, precisamos informar que queremos do 0 até o 2
var someNames = name_list.slice(0,2) 
console.log(someNames) 




// REMOVENDO UM OU MAIS ITENS NO ARRAY
// É basicamente o "slice", porém nós removemos os itens e não colocamos novos
// Não cria uma cópia, então não há necessidade de criar uma variável para obter o resultado desejado

// O primeiro argumento (startIndex) informa a partir de qual índice do Array original você deseja começar
// a remover itens, e o segundo argumento (numberOfItemsToRemove) informa quantos itens você deseja remover

// Eu informei por onde vou começar a remover (item 1 - "Guilherme") e quantos itens irei remover (2 itens)
// Logo eu removi "Guilherme" e "Julia"
name_list.splice(1, 2)
console.log(name_list)

// Se informamos "0" nenhum item será removido
name_list.splice(1, 0)



// DESCOBRINDO QUAL O ITEM DE DETERMINADO ELEMENTO 
// É criado uma cópia então devemos colocar numa variável ou passar o método diretamente no console

// O elemento "Pablo" é o item 1 da lista..: ['Flora', 'Pablo']
let index = name_list.indexOf('Pablo')
console.log(index)


