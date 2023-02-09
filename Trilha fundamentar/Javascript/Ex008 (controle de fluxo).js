// Control flow


// if.. else

// Basicamente "if" é uma condicional, e o "else" é o que irá acontecer caso o IF não seja executado
// Ou seja, sempre que a condicional retornar TRUE, um bloco de códigos será excutado, por exemplo.:

/* 
    SE a variável "batata" for igual a "frita", concatene a palavras "fries", SE NÃO, ou seja,
    se a variável batata NÃO for igual a "frita", ou seja, se não for "TRUE", não faça nada
*/

const graus = 27
if(graus >= 25.8){
    console.log(`
    O dia está quente.
    Temperatura atual.: ${graus}
    
    
    `)
} else{
    console.log(`
    O dia está normal.
    Temperatura atual.: ${graus}
    
    
    `)
} 


// O "else if" é utilizado caso a condição do "IF" não seja verdadeira, mas há outras condições que você
// deseja colocar.


const Island = function(name, people, size){ 
    this.name = name
    this.people = people
    this.TotalSize = size
    this.label = `Nome: ${name.replace('island', '')}     ||     Pessoas: ${people}     ||     Tamanho: ${size} metros` 
}

Island.prototype.Controle = function(){
    console.log(`~~~~~~~~~~  ${this.name}  ~~~~~~~~~~`)
    console.log(this.label)
    if(this.people <= this.TotalSize / 5){
        return`
        A ilha está operando normalmente.
        Número atual de pessoas na ilha é de.: ${this.people} pessoas.
        `
    } else if(this.people >= this.TotalSize / 5     &&     this.people <= this.TotalSize / 4){
        return` 
        A ilha está operando em capacidade mediana.
        Número atual de pessoas na ilha é de.: ${this.people} pessoas.
        `
    } else{
        return` 
        A ilha está operando em capacidade alta.
        Número atual de pessoas na ilha é de.: ${this.people} pessoas.
        `
    }
}



const Crocks = new Island('Crocks Hollow Island', 200, 3200)
const Snake = new Island('Snake Island', 200, 1800)
const Canyon = new Island('Canyon Cove island', 910, 4100)

console.log(Crocks.Controle())
console.log(Snake.Controle())
console.log(Canyon.Controle())


