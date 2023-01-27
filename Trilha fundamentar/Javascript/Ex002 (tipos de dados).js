//                                  STRING
/* 
    - Uma cadeia de caracteres
    - Utiliza-se aspas simples (' '), aspas duplas (" ") ou template strings (``)`
    
    - Mas por que existe formas diferentes para se criar uma string? 
      a reposta é simples, dependendo da situação, você sentirá a necessidade de utiliza (' ') ou (" ")
      em seu texto, sendo assim, caso seu texto possua (' '), como neste frase.:
        --> Let's do something

      Você irá precisar fazer o uso das aspas duplas, foi no seu texto próprio já possui aspas simples..
      Sendo assim, você não poderia colocar.:
      console.log(' Let's do something ');
      
      O correto seria.:
      console.log(" Let's do something ");

      E caso seja necessário usar de ambas as aspas (duplas e simples) você irá utilizar do template strings.:
      console.log(`Uma vez um sábio me disse "I won't die if i live first"`)

      As template strings também são muito utilizadas quando precisamos colocar mais de uma linha. 
      (pois aspas simples/duplas são para strings em uma única linha)..
      E quando precisamos chamar uma variável de maneira prática.:

      EX 00:
      var name = "Eduardo"
      console.log(`Olá, ${name}`);

      EX 01:
      console.log(`
      Podemos colocar assim pois estamos usando da crase
      E ela permite a gente fazer essas linhas..
      `)
*/



console.log('Olá - aspas simples');
console.log("Olá - aspas duplas");
console.log(`Olá - Crase`);

// A CRASE PERMITE COLOCAR VÁRIAS LINHAS..
console.log(`Olá - Crase
Podemos colocar várias linhas assim
pois estamos usando a crase
...
`);
