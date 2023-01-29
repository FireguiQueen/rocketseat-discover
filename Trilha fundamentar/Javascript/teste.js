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
