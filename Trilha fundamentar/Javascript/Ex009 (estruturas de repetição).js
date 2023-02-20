// Criação da variável 
// Condição (caso verdade, o código se repete)
// O que irá acontecer assim que cada repetição for finalizada


// O que foi dito no código abaixo.:
/*
    I é igual a 0 (zero)
    Enquanto I for menor que 10, excecute o bloco de códigos abaixo
    E no final, somente I + um
*/
for(let i = 0; i < 10; i++){
    console.log(`${i}`)
}

console.log('-------------')

// Também podemos controlar melhoar nossa estrutura de repetição utilizando o "if" e "break"

/*
    Foi dito que, caso a variável I seja menor ou igual a zero   OU     I seja maior que 100
    O código irá quebrar, ou seja, irá parar de executar
*/
for(let i = 1; i <= 100; i++){
    if(i <= 0 || i > 100){
        break;
    }
    console.log(i)
}

/*
    O "continue" serve para ignorar determinada parte do loop
    Porém continuar exutando o mesmo
*/

for(let i = 100; i <= 1000; i+= 100){
    if(i == 500){
        continue;
    }
    console.log(i)
}



/* 
    O "continue" pode ser muito útil por exemplo para puxar
    apenas números pares

    Foi dito o seguinte
    SE o resta da divisão entre I dividido por dois for DIFERENTE de 0 (resulta num número impar)
    ele irá ignorar esses números no loop
*/ 
for(let i = 1; i < 10; i++){
    if(i % 2 != 0){
        continue;
    }
    console.log(i)
}