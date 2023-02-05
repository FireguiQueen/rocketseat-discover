// Prototypes

// São basicamente métodos e propriedades que já foram criadas pela própria linguagem
// Você pode acessar esses protótipos usando uma string e colocando um ponto final (.), você verá várias funções, isto são prototypes
// Isto significa que não precisamos criar necessiariamente uma função para cada coisa que queremos fazer.. Exemplo.:
// --> Você deseja saber quantas letras existem em determinada string
         // |-> Não será necessário criar uma função do 0 para isto, pois já existe um método para isto
         var quantas_letras = 'Aparelepipido'
         console.log(quantas_letras.length)
         
         // Com o protoype "replace" podemos substituir determinado caracter (ou caracteres) por outro(s)
         // A palavra "Olá" foi substituida por "oi"
         var frase = "Olá, isto é uma frase".replace('Olá', 'oi')
         console.log(frase)
         
         
         // "ToUpperCase" coloca toda a string em maiúsculo
         var name = "flora".toUpperCase()
         console.log(name)


/* Protótipos em JavaScript são a base da herança em objetos no JavaScript. Um protótipo é um objeto que 
serve como modelo para outros objetos, de modo que esses outros objetos possam herdar propriedades e 
comportamentos.
Cada objeto em JavaScript tem um protótipo, que pode ser acessado através da propriedade prototype do 
construtor do objeto. Quando você procura uma propriedade ou método em um objeto, o JavaScript verifica 
primeiro esse objeto. Se a propriedade ou método não for encontrada, o JavaScript verifica o protótipo do 
objeto.

de forma resumida, os protótipos em JavaScript permitem que você crie objetos que herdam propriedades e 
comportamentos uns dos outros. Isso é útil para reutilizar código e para organizar sua aplicação de forma
mais clara.
*/

// Criando dois prototype (model & company) para objeto "Carro"
function Carro(modelo, company) {
    this.model = modelo;
    this.company = company;
}
  
// Adicionando um método do prototype "Carro"
Carro.prototype.mostrarInfo = function() {
    return `
    ${this.company}
    ${this.model}
    `
};
  
// Criando um objeto a partir do prototype "Carro"
const carro1 = new Carro("Cybertruck", "Tesla");

// Herdando a propriedade do protótipo
console.log(carro1.mostrarInfo()); 

/* 
    Basicamente, ao criar uma "function construction" ela cria também uma propriedade chamada 
    "__prototype__". Esta propriedade sempre se refere a aquela função.
    Quando criamos um novo objeto a partir daquela função construtora, o objeto herda as propriedades
    da função construtora pois este novo objeto possui a funcionalidade "__proto__" que se refere a função em 
    si
/* 
  





