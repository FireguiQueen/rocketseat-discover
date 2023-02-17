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