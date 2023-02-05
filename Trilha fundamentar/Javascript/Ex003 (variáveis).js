/*                                Variáveis

- Utilizadas para armazenar algum valor

- São nomes simbólicos (chamados "IDENTIFICADORES") para receber algum valor 
    (o nome da varíavel pode ser qualquer um, contanto que respeite a sintaxe da linguagem)



- Há 3 maneires para se criar uma variável
    > var (global - pode ser reatribuido o seu valor)
    > let (local (escopo) - pode ser reatribuido o seu valor)
    > const (local (escopo) - NÃO pode ser reatribuido o seu valor)



    Em geral, é recomendado usar const sempre que possível e reservar o uso de let para situações 
    onde a reatribuição é realmente necessária. É recomendado evitar o uso de var devido ao 
    seu escopo global e possíveis problemas de ambiguidade.




*/






/* ----------------------------------------------------------------------------- */



/*                                VAR (evitar sempre que possível) 
- Declara uma variável com escopo global ou de função e seu valor pode ser reatribuído.
*/

// Por debaixo dos planos, o JS faz algo muito interessante chamado "hoisting" (elevação)
console.log(abada) // retorna undefined
{
    var abada = "hm" 
}

// O que o hoisting fez com o código acima  
var abada
console.log(abada) //por isto é retornado UNDEFINED.
{
    abada = "hm"
}
    /* Em teoria, pelo fato do JS ler de cima para baixo, o console.log(abada) não deveria retornar nada
     pois a variável só foi declarada depois (na linha 31). Mas por conta do hoisting, basicamente, o JS pega 
     a variável + identificador e eleva ela em seu código (sem o valor atribuido a mesma).
     Basicamente ao utilizar a "VAR" como variável, ele pega todas as "VAR" do seu código e coloca elas acima de tudo
     porém sem os valores. */
    



// reatribuição de valor..
var nome = "Paulo"
var nome = "Davi"  

// escopo global
var nome = "Davi"
function pessoa(){
    console.log(nome); // pode ser usar esta várivel dentro da função pois o "VAR" é global.
} pessoa();







/*                                LET
- Declara uma variável com escopo de bloco e seu valor pode ser reatribuído.
*/

// reatribuição de valor..
let nome_do_carro = "Fiat Uno"
nome_do_carro = "Tesla";

// escopo de bloco
function carro(){
    let numero_de_portas = 4
    console.log(numero_de_portas);
} carro();



// Não podemos fazer isto pois o escopo NÃO é GLOBAL.
{
    let say = "Hi"
}
console.log(say);


// Reatribuimos o valor dentro de um escopo, e este valor reatribuido será voltado ao "let" original
let porta = "maidera"
{
    porta = "ferro"
}
console.log(porta); // ferro 


// Como o escopo é local, significa que podemos utilizar do mesmo nome da variável que foi usada em outro bloco.
// E  ambas irão continuar a existir, só que em blocos diferentes e não serão consideradas as mesmas
function aviao_01(){
    let numero_de_portas = 2
    console.log(numero_de_portas);
} aviao_01();

function aviao_02(){
    let numero_de_portas = 5
    console.log(numero_de_portas);
} aviao_02();
/*  Seria a mesma coisa que a pasta em seu computador.. Não pode haver dois arquivos "foto.png"
    na mesma pasta (mesmo sendo fotos diferentes), porém, caso você crie outra pasta, cada arquivo pode ser armazenado
    em uma pasta diferente. 
*/



















/*                                CONST
- Declara uma variável com escopo de bloco e seu valor NÃO pode ser reatribuído.

- Utilizada quando temos valores que nunca irão se alterar
*/

// reatribuição de valor NÃO FUNCIONA (irá retornar um erro caso tente)!
const animal = "Cachorro"  
animal = "Gato" 




/* ------------------------------------------------------------------------------------------- */

/*                              TIPAGEM


- Javascript é uma linguagem fracamente tipada e por consequência é DINÂMICA
    Um exemplo é que, uma variável do tipo "string" pode simplesmente se tornar do tipo "boolean"..

- Linguagens fortemente tipadas são aquelas que precisamos definir o tipo do valor que iremos trabalhar
    >> CRIANDO UMA STRING EM JAVA:
        String frase = "Olá, mundo!";

    >> CRIANDO UMA STRING EM JS:
        var frase = "Olá, mundo!";    
        
-> Perceba que para o JS, nós não precisamos definir um tipo ao valor, o tipo do valor é definido 
   pela própria linguagem quando a variável recebe um valor. 
   Se eu colocar " var frase = 'Olá' ", o JS compreende como uam string por conta das aspas simples, e 
   ele mesmo define o tipo dela. 
*/ 

var frase = "Olá, pessoal!"
console.log(typeof frase);
// Veremos que o tipo é "string", e o "string" foi definido pelo próprio Javascript, 
// nós não precisamos colocar que nossa variável será do tipo string.

// Por conta desta fraca tipagem, podemos simplesmente transformar uma variável "STRING" em uma "number"
var nome = 'Paulo'
var nome = 2

// EM LINGUAGNES COMO JAVA, SERIA IMPOSSÍVEL FAZER ISTO, POIS PRECISAMOS DEFINIR O TIPO DO VALOR, 
// ALÉM DISTO, PARA CADA VÁRIAVEL COM UM TIPO DIFERENTE, UM NOVO IDENTIFICADOR SERÁ NECESSÁRIO:
/*>>  String nome = 'Paulo';                                             */
/*>>  int outro_identificador = 44                                       */

// Pelo fato de definirmos o tipo do valor, não podemos atribuir outro tipo para aquele mesmo valor..:
/*>> String nome = 4;  (não será aceito pois 4 é do tipo "int" e não do tipo "string")    */



