let Pablo = "Pablo"
let pablo = "pablo"


let n1, n2 

n1 = 'oi '
n2 = 'ooooo'

console.log(n1 + n2)

// Você pode ver o tipo do valor atribuido a variável utilizando do "typeof"
console.log(typeof Pablo);


let pessoa = "Otavio"
console.log(`A pessoa "${pessoa}" é muito inteligente`)


console.log(pessoa.replaceAll(' ','').length)


const omg ={
    name1: 'Pablito',
    age: 18,
    SaySomething(name, age){
       return `Olá, ${this.name1}! Eu me chamo ${name} e tenho ${age} anos.`
    }
 }
 console.log(omg.SaySomething('Guilherme', 16));




 /// EXERCÍCIOS BÁSICOS

let weight // undefined 

let viewer = {
   name: 'Flora',
   age: 17,
   stars: 4.7,
   isSubscribed: true
}


console.log(`
Nome: ${viewer.name}
Idade: ${viewer.age}
Estrelas: ${viewer.stars}
Inscrita: ${viewer.isSubscribed === true? 'Sim' : 'Não'}
`)

let student = {} // objeto



let students = [
   viewer
]
console.log(students[0].name)



//////////////////////////////////////////////////////////////////////////////

function Aviao(name, portas, voo){
   this.name = name
   this.FecharPortas = portas == true? 'Portas fechadas' : 'Portas abertas';
   this.LevantarVoo =  voo  && portas == true? 
   this.plane = function() {
      return `Portas fechadas e voo declarado para o ${this.name}. O trem de pouso está sendo recolhido`
   }
   : 
   this.plane = function() {
      return `O avião ${this.name} não pode voar.`
   };

}
const H4m7 = new Aviao('H4m7', false, true);
const Boeing = new Aviao('Boeing 274', true, true)

console.log(H4m7.plane())
console.log(Boeing.plane())











function Car(name, model, year){
   this.nome = name
   this.modelo = model
   this.year = year
}

const Tesla = new Car('Tesla', 'X', '2014')

console.log(Tesla.modelo)





function School(name, locality){
   this.name = name
   this.locality = locality 
   this.welcome = () => {return `Welcome to ${this.name}`}
}

const BL_school = new School('Blender School', 'United Kingdom, London')
const BY_school = new School('Byance School', 'United States,  Michigan')
const LY_school = new School('Lyoshock School', 'United States, Sedona')


console.log(`${BL_school.name} | ${BL_school.locality}`)
console.log(`${BY_school.name} | ${BY_school.locality}`)
console.log(`${LY_school.name} | ${LY_school.locality}`)




const Person = function(name, age, gender, country, city){
   this.PName = name
   this.PAge = `Age: ${age}`
   this.PGender = `Gender: ${gender}`
   this.PCountry = `Country: ${country}`
   this.PCity =  `City: ${city}`
}


const person1 = new Person('Flora', 17, 'female', 'UK', 'London')
const person2 = new Person('Kiriho', 22, 'female', 'Japan', 'Chugoku')

console.log(`
${person1.PName} - ${person1.PAge}
${person2.PName} - ${person2.PAge}
${person1.PAge > person2.PAge? `${person1.PName} is older than ${person2.PName}` : `${person1.PName} isn't older than ${person2.PName}`}

`)





function Products(name, price, quantity, description){
   this.name = name
   this.price = price
   this.quantity =  quantity
   this.description = description
   this.label = `Name: ${name}  |  Price: ${price}  |  Quantity: ${quantity}  |  Description: ${description}`
}

const pc_1 = new Products('H2-Fire Computer', 644.0.toLocaleString('en', {style: 'currency', currency: 'USD'}) , 241, 'A nice computer' );
const pc_2 = new Products('LCK Gold', 494.0.toLocaleString('en', {style: 'currency', currency: 'USD'}) , 51, 'A nice computer' );


console.log(`
${pc_1.label}
${pc_2.label}

`)





const The_Last_Of_Us_1_Character = function(name, birthplace, age, height, weight){
   this.name = name
   this.birthdayplace = birthplace
   this.age = age
   this.height = height
   this.weight = weight

   this.label = `
   ${name} 
   Birthplace: ${birthplace} 
   Age: ${age} 
   Height: ${height} 
   Weight: ${weight}`
}
const Joel = new The_Last_Of_Us_1_Character('Joel Miller', 'Texas, United States', 52, 1.75, `${75}kg`);
const Ellie = new The_Last_Of_Us_1_Character('Ellie Parker', 'Utah, United States', 14, 1.45, `${40}kg`);
const Bill = new The_Last_Of_Us_1_Character('Bill Foster', 'California, United States', 50, 1.8, `${80}kg`);
const Frank = new The_Last_Of_Us_1_Character('Frank Semyon', 'Illinois, United States', 45, 1.75, `${78}kg`);
const Tess = new The_Last_Of_Us_1_Character('Tess Bauer', 'Rhode Island, United States', 'unknown', 'unknown', 'unknown');
const Marlene = new The_Last_Of_Us_1_Character('Marlene', 'United States', 'unknown', 'unknown', 'unknown');

for (const character of [Joel, Ellie, Bill, Frank]) {
   console.log(character.label);
}



const animals_list = ['Dog', 'Cat', 'Whale', 'Duck', 'Snake']
console.log(animals_list)

animals_list.push('Monkey')
console.log(animals_list)

animals_list.pop()
console.log(animals_list)

animals_list.shift()
console.log(animals_list)

animals_list.unshift('Dog')

let string = animals_list.join(', ')
console.log(string.split(','))




let Suplementos = ['Whey', 'Creatina', 'Hipercalórico']

let verificar_produto = Suplementos.join(', ').toLowerCase()
console.log(verificar_produto.includes('whey')? 'Tem whey sim, dog' : 'Tem whey não, dog')


console.log(Suplementos.includes('whey')? 'Tem whey' : 'Não tem whey')






let cities = ['NYC', 'Manchester', 'Miami', 'Cambridge', 'Edinburgh']
console.log(cities)

cities.push('Birmingham')
console.log(cities)

cities.unshift('San Francisco')
console.log(cities)

cities.pop()
cities.shift()
console.log(cities)

console.log(cities.slice(2,4))
console.log(cities.splice(0,2))

console.log(cities)
console.log(cities.indexOf('Miami'))


let remove_miami = cities.indexOf('Miami')
cities.splice(remove_miami, 1)
console.log(cities)


const person_4 = {
   name: 'Gus',
   age: 43,
}

console.log(delete person_4.age, person_4)


const Schools = function(name, city, students){
   this.nome = name;
   this.locality = city;
   this.TotalStudents = students;
   this.label = `${name},${city},${students}`
} 

const BYN_schools = new Schools('Branch You now', 'NYC', '740')
let test = BYN_schools.label.split(',')
console.log(test)

console.log(BYN_schools.label)








// PRACTICE 1 
const animais = ['Cavalo', 'Cachorro']

// adding a new animal after the last index ('Cachorro')
animais.push('Gato')

// removing 
animais.pop()

// add a new animal before the first one ('Cavalo')
animais.unshift('Burro')


// removing it 
animais.shift()


// adding more animais 
animais.push('Gato', 'Lobo', 'Baleia', 'Macaco', 'Gorila', 'Galinha', 'Galo')


// removing some animais 

// index of an item 
console.log(animais.indexOf('Baleia'))
animais.splice(4, 2)
console.log(animais)



const some_animals = animais.slice(3,6)

console.log(some_animals)



const lobo = animais.indexOf('Lobo')
animais.splice(lobo, 3)

console.log(animais)


const string_animals = animais.join(', ').toUpperCase()

console.log(string_animals.split(', '))



const car = {
   door: 4,
   color: 'red',
   TypeOfPropertyColor: 'string'
}

const car_ = [4, 'red']

console.log(typeof car != typeof Car)

console.log(typeof car.color != typeof car_[1])
car_.unshift('oi')
console.log(car.door == '4' && typeof car_[1] != typeof car.door)



const TemWhey = true
const TemCreatina = true
const TemAlbumina = true
const y = 7

console.log(TemWhey == TemCreatina) // true
console.log(typeof !y == typeof TemAlbumina) // true, pois o "!" transformou o tipo de dado da variável "Y" em boolean



const bread = true 
const cheese = false

console.log(bread || cheese? 'Poggers café da manhã' : 'NA café da manhã')




const person = {
   age: 16
}

console.log(person.age >= 18? 'You can buy some beers' : 'You cant buy any beers')

const older = () =>{
   return`
   Você pode..:
   - Dirigir
   - Criar uma conta no banco
   - Usar drogas
   - Sair de casa
   `
}

const younger = () => {
   return `
   Você não pode..:
   - Dirigir
   - Criar uma conta no banco
   - Usar drogas
   - Sair de casa
   `
   }

console.log(person.age >=18? older() : younger())



const tt = typeof 2

switch (tt){
   case 'string': 
   console.log('é uma string')
   break
   
   default: 
      console.log('não é uma string')
}



function User(TypeOfUser, name){
   this.user = TypeOfUser.toLowerCase(); 
   this.name = name.toLowerCase();
   this.label = `User: ${TypeOfUser} | Name: ${name}` 
}

User.prototype.checkS =  function(){
   switch (this.user){
      case 'adm': 
         return '~~~ ADMIN ~~~'
         break;

      case 'normal': 
         return '~~~~ Normal user ~~~~'
         break;
         
         default:
            return '~~~~ guest user ~~~~'
            break;
         }
      }
      User.prototype.checkI = function(){
         if (this.user === 'adm'){
            return '~~~ ADMIN ~~~'
         } else if (this.user === 'normal'){
            return '~~~~ Normal user ~~~~'
         } else {
            return '~~~~ guest user ~~~~'
         }

}


const user_1 = new User('adm', 'Flora')
const user_2 = new User('normal', 'Amanda')

console.log(user_1.checkI())

















// line comment
/*
   more comments
   using more lines
*/

const name = { 
   name: 'Gus',
   age: 21,
   NameAndAge(){
      return `Name: ${this.name} | Age: ${this.age} `
   }
}
console.log(name.NameAndAge())

console.log(4 !== '4')
console.log(4 !== '4'? 'São diferentes' : 'Não são diferentes')



const listaa = ['Gus', 'WaltEr'.toLowerCase(), 'jessie', function(){
   return listaa.includes('walter')? 'Tem o Walter nessa lista, poggers' : 'nao tem o Walter :('
}]
console.log(listaa[3]())


//  //// /// / // /// / // / // / / / // / / 

function sayhiiTo(name){
   console.log(`Hii, ${name}`)
}
const sayhelloTo = function(name){
   console.log(`Hello, ${name}`)
}

const sayHiiTo = name => console.log(`Hi, ${name}`)

function buildF(name){
   this.name = name
}

const P = new buildF('Paulo')
const N = new buildF('Nathalia')
const K = new buildF('Kimito');

(() => console.log('Olá, isto é uma IIFE')) ();
(function(){
   console.log('Olá, isto é outra IIFE')
}) ()


const arrayT = ['Gui', '']
console.log(arrayT.length)

arrayT[1] = 'Flo'
console.log(arrayT)

console.log(arrayT.indexOf('Flo'))

const newLisT = arrayT.join(' and ')
console.log(newLisT)

const newArray = newLisT.split(' and ')
console.log(newArray)

console.log(newArray.includes('Flo'))

newArray.push('Fausboxi')
console.log(newArray)

newArray.pop()

newArray.unshift('plane HZJ-70')
console.log(newArray)

newArray.shift()
console.log(newArray)


console.log(newArray.slice(1,2))
newArray.splice(0,2)
console.log(newArray)




const elP = 3

if (typeof elP != typeof 'oi'){
   console.log('Possui tipos de dados diferentes')
} else{
   console.log('Possui tipos de dados iguais')
}

// or 

console.log(typeof elP != typeof 'oi'? 'Possui tipos de dados diferentes' : 'Possui tipos de dados iguais')

// or

switch(typeof elp == typeof 'oi'){
   case true: 
      console.log('possui tipos de dados diferentes')
      break;
   case false: 
      console.log('Possui o mesmo tipo de dado')
      break;
}



 
const grade = grade => {
   if(grade >= 90){
      return 'A'
   } else if(grade >= 80 && grade <= 89){
      return 'B'
   } else if (grade >= 70 && grade <= 79){
      return 'C'
   } else if (grade >= 60 && grade <= 69){
      return 'D'
   } else if (grade < 60 && grade >= 0){
      return 'F'
   } else{
      return 'nota inválida'
   }
}

console.log(grade(92))



function fluxo(receita, despesa){
   const saldo = receita - despesa
   if(saldo > 0){
      return 'Saldo positivo'
   } else if(saldo < 0){
      return 'Saldo negativo'
   } else if (saldo == 0){
      return 'Saldo zerado'
   } else{
      return 'Inválido'
   }
}



const receitas = [5625, 534, 636, 6664, 63221, 91520]
const despesas = [5645, 525, 42, 634, 536, 6621]

function calculate(){
let receita = 0
let despesa = 0

   for(let value of receitas){
      receita += value 
   }
   for(let value of despesas){
      despesa += value
   }

   const total = receita - despesa
   const totalF = total.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})
   
   if(total >= 0){
      return `Saldo positivo.: ${totalF}`
   } else if (total < 0){
      return `Saldo negativo.: ${totalF}`
   } else `Saldo inválido`
} 
console.log(calculate())

function ge2(){
   console.log('hii')
}

const og2 = function(){
   console.log('hii');
};

(() => console.log('hii'))();



function Personn(name, age){
   this.name = name
   this.age = age
   this.label = `Name: ${name} | Age: ${age}`
   
}

const pablito13 = new Personn('Pablo', 13)
const pelelvis = new Personn('Pelelvis', 15)

const melton = new Personn('Melton', 15)
const jackin = new Personn('Jackin', '15')

console.log(pablito13.label)



console.log(pablito13.age != pelelvis.age) // true pois são idades diferentes
console.log(pablito13.age == pelelvis.age) // false pois não são idades iguais

console.log(melton.age != jackin.age) // false. Mesmo uma sendo string e outra number, aqui não está sendo analisado  o tipo de dado
console.log(pablito13.age !== pelelvis.age) // true. Pois são diferentes no tipo de dado (string e number)

if(melton.age > jackin.age){
   console.log('Melton é mais velho que Jackin')
} else if(melton.age < jackin.age){
   console.log('Jackin é mais velho que Melton')
} else{
   console.log('Ambos possuem a mesma idade')
}


switch(melton.age){
   case 15:
      console.log('Melton tem 15 anos')
      break

      default: 
         console.log('Melton não tem 15 anos')
}


const Breaking_bad = ['Gus', 'Walter', 'Jessie', 'Hector', '..', 'Saul', 'Mike']

console.log(Breaking_bad.length)

const reaT = Breaking_bad.indexOf('..')
console.log(reaT)
Breaking_bad[4] = 'Tuco'

console.log(Breaking_bad)

const sTTring = Breaking_bad.join(' ').toUpperCase()
console.log(sTTring)

const newArray_a = sTTring.toLowerCase().split('a')
console.log(newArray_a)


const newArray_uppercase = sTTring.split(' ')
console.log(newArray_uppercase)

console.log(newArray_uppercase.includes('walter') || newArray_uppercase.includes('WALTER'))

newArray_uppercase.push('Skyler')
console.log(newArray_uppercase)
newArray_uppercase.pop()

newArray_uppercase.unshift('Skyler')
newArray_uppercase.shift()
console.log(newArray_uppercase)


console.log(newArray_uppercase.slice(2,6))
console.log(newArray_uppercase)

const tuco = newArray_uppercase.indexOf('TUCO')

newArray_uppercase.splice(tuco, 1)
console.log(newArray_uppercase)



function transform(temperatura){ 
   const temp = temperatura.toLowerCase()
   if(temp.includes('c')){
      let celcius = temperatura.split('c')
      return celcius[0] * 1.8 + 32
   } else if(temp.includes('f')){
      let fh = temperatura.split('f')
      return ((fh[0] - 32) / 1.8).toFixed(2)
   } else {
      return 'Grau não identificado'
   }
}

console.log(transform('43f'))


const booksByCategory = [
   /* categoria*/{
       category: "Riqueza",
       books: [
         {
               title: "Os segredos da mente milionária",
               author: "T. Harv Eker",
            },
            {
               title: "O homem mais rico da Babilônia",
               author: "George S. Clason",
            },
            {
               title: "Pai rico, pai pobre",
               author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
         ],
      },
      
      {
         category: "Inteligência Emocional",
         books: [
            {
               title: "Você é Insubstituível",
               author: "Augusto Cury",
           },
           {
               title: "Ansiedade – Como enfrentar o mal do século",
               author: "Augusto Cury",
            },
            {
               title: "Os 7 hábitos das pessoas altamente eficazes",
               author: "Stephen R. Covey",
            },
         ],
      },
   ];
/* 
    Baseado no Array de Livros por Categoria acima, faça os seguintes desafios
        • Contar o número de categorias
        • Contar o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/
function countCategories(){
   let categories = booksByCategory.length
   return categories
}
console.log(countCategories())


function countBooks(){
   console.log('      ~~~~ Número de livros ~~~~    ')
   for(let category of booksByCategory){
      console.log(`
      ${category.category}: ${category.books.length}`)
   }
}
countBooks()


function countAuthors(){
   let autores = []
   for(let category of booksByCategory){
      for(let book of category.books){
         if(autores.includes(book.author)){
            continue;
         } 
         autores.push(book.author)
      }
   }
   console.log(autores)
}
countAuthors()




// Conte o número de filmes.
// Conte o número de filmes dirigidos por Christopher Nolan.
// Liste todos os filmes dirigidos por Christopher Nolan.
// Conte o número de filmes lançados na década de 90.
// Liste todos os filmes lançados na década de 90.
// Liste todos os filmes em ordem alfabética.
const movies = [
   { title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994 },

   { title: "The Godfather", director: "Francis Ford Coppola", year: 1972 },

   { title: "The Dark Knight", director: "Christopher Nolan", year: 2008 },

   { title: "12 Angry Men", director: "Sidney Lumet", year: 1957 },

   { title: "Schindler's List", director: "Steven Spielberg", year: 1993 },

   { title: "The Lord of the Rings: The Return of the King", director: "Peter Jackson", year: 2003 },

   { title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994 },

   { title: "The Good, the Bad and the Ugly", director: "Sergio Leone", year: 1966 },

   { title: "Forrest Gump", director: "Robert Zemeckis", year: 1994 },

   { title: "Inception", director: "Christopher Nolan", year: 2010 }
 ];

// Conte o número de filmes. [concluído]
(() => {
   let numberOfMovies = movies.length
   console.log(numberOfMovies)
}) ();

// Conte o número de filmes dirigidos por Christopher Nolan. [concluído]
// Liste todos os filmes dirigidos por Christopher Nolan. [concluído]
function christopherMovies(){
   let chrisMoviesList = []

   for(let allMovies of movies){
      if(allMovies.director == 'Christopher Nolan' || allMovies.director == 'Christopher' || allMovies.director == 'Chris'){
         chrisMoviesList.push(allMovies.title)
      } else{
         continue;
      }
   }

   return`
   Números de filmes de Christopher: ${chrisMoviesList.length}
   Filmes de Christopher: ${chrisMoviesList.join(', ')}
   `
}
console.log(christopherMovies())

// Conte o número de filmes lançados na década de 90. [concluído]
function dacade_90(){
   let movies90 = []

   for(let allMovies of movies){
      if(allMovies.year >= 1990 && allMovies.year <= 1999){
         movies90.push(allMovies.title)
      }
   }
   return `
   ~~~~ Década de 90 ~~~~ 
   Número de filmes : ${movies90.length}
   Filmes: ${movies90.sort().join(', ')}
   `


}
console.log(dacade_90());


// Liste todos os filmes em ordem alfabética. [concluído]
(() => {
   let sortMovies = []
   for(let mv of movies){
      sortMovies.push(mv.title)
   }
   console.log(sortMovies.sort().join(', '))
}) ();



function oi4(){
   console.log('oi4')
};
oi4();

const sayHiTo = function(name){
   return `Hi, ${name}`
} 
console.log(sayHiTo('Gui'))

const sayHiAndHelloTo = name => console.log(`Hi and hello, ${name}`)
sayHiAndHelloTo('Flora');

(food => console.log(`I love ${food}`)) 
('potatos')

function creatMonster(name, power, bio){
   this.name = name;
   this.power = power; 
   this.bio = bio 
   this.label = `
   name: ${name}
   power: ${power}
   bio: ${bio} 
   `
}
creatMonster.prototype.Attack = function(yP){
   if(yP > this.power){
      return 'You killed it'
   } else if(yP == this.power){
      return 'Both of you are dead'
   } else{
      return 'You die'
   }
}
 
const Treemet = new creatMonster('Treemet', '434', `
Há muito tempo, em uma floresta densa e escura, um cientista louco decidiu criar um ser poderoso e indestrutível. Ele usou os restos de várias criaturas para dar vida a seu monstro. Mas, ao nascer, o monstro mostrou-se violento e sedento por sangue. O cientista tentou controlá-lo, mas sem sucesso. O monstro escapou para a floresta, onde vive até hoje, aterrorizando os viajantes que ousam se aventurar em suas terras.
`)

console.log(Treemet.Attack())



console.log(42 != '42') // false
console.log(42 !== '42') // true


console.log(42 == '42') // true
console.log(42 === '42') // false


const RB1_name = 'F2g'

switch (RB1_name.toLowerCase()){
   case 'f2g': 
      console.log('O primeiro dos primeiros')
      break;

      default:
         console.log('Não foi o primeiro rôbo desenvolvido')
}

const t2 = [2,6, 1]

console.log(t2.length)

t2[2] = 4

console.log(t2.indexOf(4))

const NS = t2.join(' - ')
console.log(NS)

const NR = NS.split(' - ')
console.log(NR)

console.log(NR.includes('4'))

NR.push(3)
console.log(NR)
NR.pop()

NR.unshift(14)
NR.shift()
NR.push(4,44,4, 54)
console.log(NR)

const seis = NR.indexOf('6')
let quarentaE4 = NR.indexOf(44)
quarentaE4 += 1
console.log(NR.slice(seis, quarentaE4))


NR.splice(4, 1)
console.log(NR)


console.log('oi');

(name => console.log(`Olá, ${name}`)) ('Pablito')