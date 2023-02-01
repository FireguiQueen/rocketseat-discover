// Prototypes

// São basicamente funcionalidades que já foram criadas pela própria linguagem
// Você pode acessar esses protótipos usando uma string e colocando um ponto final (.), você verá várias funções, isto são prototypes
// Isto significa que não precisamos criar necessiariamente uma função para cada coisa que queremos fazer.. Exemplo.:
// --> Você deseja saber quantas letras existem em determinada string
         // |-> Não será necessário criar uma função do 0 para isto, pois já existe um método para isto


// Com o protoype "replace" podemos substituir determinada string por outra, como no exemplo abaixo
// onde a palavra "Olá" foi substituida por "oi"
var frase = "Olá, isto é uma frase".replace('Olá', 'oi')
console.log(frase)


// O "length" conta quantos caracteres possuimos na string
console.log("Batata".length) 

// "ToUpperCase" coloca toda a string em maiúsculo
var name = "flora".toUpperCase()
console.log(name)