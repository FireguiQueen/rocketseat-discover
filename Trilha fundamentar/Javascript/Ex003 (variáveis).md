# Variáveis

- Declaration & Assignment 
```js
// Declaration (declaração de variável)
let pessoa

// Assignment (atribuição de valor)
pessoa = 'Paulo'
```

- JS é "sensive-case", ou seja, letras maiúsculas e minúsculas fazem diferença
```js
// São variáveis diferentes pois o Javascript analisa até mesmo letras minúsculas e maiúsculas nos identificadores.
let Pablo = "Pablo"
let pablo = "pablo" 
```

</br>
</br>


## Criação de uma variável 
* Pode se iniciar com letras minúsculas ou maiúsculas
* Números são permitidos
* Caracteres especiais aceitos.: $  _ 
* Pode se colocar acentos (mas evite fazer isto)

</br>

* NÃO se pode iniciar com números 
* NÃO pode haver espaço entre os nomes, caso queira um "espaço" use do "-"
```js
let carro_bonito = "Tesla Model X"
``` 

### Recomendado 
* Criar identificadores que fazem sentido ao valor recebido
* Um nome que explique o que a variável faz
* Escrever em inglês

</br>

* Camelcase
```js
// Método onde explicamos o que a variável faz e sem fazer separação por "-" entre as palavras
const Player1 = 500
const Player2 = 634  
let ItsP1StrongerThanP2 = Player1 > Player2? 'O jogador 1 é mais forte do que o jogador 2' : 'O jogador 1 não é mais forte que o jogador 2'
console.log(ItsP1StrongerThanP2);
```

</br>

* Snake_case
```js
// Método onde explicaos o que a variável faz usando a separação por "-"
// Geralmente usamos o "snake_case" quando não precisamos explicar algo, apenas separar palavras

// Não recomendo.:
const carro_vermelho = "tesla";
let Is_red_car_a_tesla = carro_vermelho == 'tesla'  // TRUE


// Recomendo.: (o snake_case foi utilizado apenas uma vez)
const carro_vermelho = "tesla";
let IsRedCarATesla = carro_vermelho == 'tesla'  // TRUE
```



