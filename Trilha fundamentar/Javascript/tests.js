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



console.log(`
${Joel.label}
${Ellie.label}
${Bill.label}
${Frank.label}
`)
