# Funções 
Funções são reconhecidas por causar um reaproveitamento de código. 
Ou seja, usar um código que já foi feito por alguém. 
* ```rgb()```
* ```hsl()```
* ```url()```
* ```calc() ```

A tag body não possui uma altura definida. Logo, quando usamos a "%", é necessário dar um valor de altura para o body. Pois a "%" é sempre referente a algum valor. 

```HTML 
<body style="height: 100vh;"> <!-- 100% da viewport, ou seja, toda a altura da parte vísivel da página -->
    <h1 id="box">Titúlo poderoso! </h1>
</body>
```

```CSS
#box{ 
    /* calc é uma função para fazer cálculos, aqui estamos dizendo que será pego 50% da altura do height e somar
    mais 20px. Como body é a tag pai, será 50% da viewport */  
    height: calc(50% + 20px); 
    width: 400px; 
    margin: 0; /* Zero como valor para tiramos a margem da imagem */ 
    background-image: url("https://images.unsplash.com/"); /* Colocar uma imagem como background */
} 
```
________________________________________________________________________________________________________________
# Strings e idenficadores 

* __Strings:__ Texto envolto de aspas 
* __Identificadores:__ red, black, gold;

