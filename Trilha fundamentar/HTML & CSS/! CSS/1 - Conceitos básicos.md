# CSS
* Cascading Style Sheet 
* Utilizado para estilizar a página 
* HTML é a estrutura do site, o CSS é o estilo, o visual
* Não é uma linguagem de programação, e sim uma linguagem style sheet

</br>

# Estilização
<ul type="square">
    <li> Selector: onde a estilização será aplicada.: h1{}   p{}  *{}</li>
    <li> Declaration: tudo o que será estilizado (fica dentro das chaves) </li>
    <li> Property: estiliza determinada coisa do elemento.: color ; font-size ; background..</li>
    <li> Property value: valor da propriedade.: color: "blue"; font-size: "60px".. </li>
</ul>

```css  
h1{ /* Declaration 👇 */
    color: blue;                  
    font-size: 60px;  
    background: red; 
    
    /* 
    h1    = selector 
    color = property
    blue  = property value
    */ 
}
``` 

</br>

# Caixas
Pense que toda tag HTML é uma caixa.: Divs, h1, p, inputs.
Sabendo disto, podemos compreender melhor as properties que usamos no css (margin, padding, display..)

</br>

# Properties mais utilizadas 
```css 
{ 
    background-color: blue;     /* Irá mudar o fundo da tag */ 
    color: red;                 /* Irá mudar a cor do conteúdo da tag */
    border: 1px solid red;      /* Coloca uma borda em volta da tag */ 

    margin: 42px;               /* espaçamento fora da tag (isto vai para todos os lados) */
    margin-bottom: 42px;        /* Altera apenas para baixo por conta do "bottom" */ 
    margin-left: 42px;          /* Altera apenas para a esquerda por conta do "left"  */
    margin-right: 42px;         /* Altera apenas para a direita por conta do "right" */ 
    margin-top: 42px;           /* Altera apenas para cima por conta do "top" */
    padding: 32px               /* Espaçamento dentro da tag */
}
```
</br>

_______________________________________________________________________________________

## CSS interno
- _Estilização feita na tag <head> do arquivo HTML. Não é uma boa prática._
```html 
<head>
    <style>
        h1{
            color: blue; 
            }
    </style>
</head>
```

## CSS inline 
- _Estilização feita na própria tag. Utiliza-se apenas para modificações pequenas, pela praticidade._
```html
<body>
    <h1 style="color: blue">Este é um título com a cor azul </h1>
    <p style="color: red ; font-size: 25px">Parágrafo com letra de 25px da cor vermelha </p>
</body>
```

## CSS externo 
- _Estilização feita de maneira externa. Linkamos nosso arquivo CSS em nossa tag head._
```html
<head>
    <link rel="stylesheet" href="style.css" />
    <!-- Href = Referência (aonde está este arquivo externo)  -->
    <!-- Rel  = Relacionado (relacionado ao estilo em folha)  -->
</head>
```

</br>

____________________________________________________________________________________________


# Importando fontes
> Existem duas maneiras de se importar fontes para o nosso website.:

### Não recomendada
Ir no arquivo externo CSS e digitar: 
```css
@Import 'URL_da_fonte'
```

</br>

### Recomendada:  
## Ir na tag <head> do arquivo HTML e digitar
```html
<head>
    <link rel="stylesheet" href="URL_da_fonte">
<head>
```

>Após importamos as fontes, podemos usar elas em nossa webpage. 
```css
selector{ 
    font-family:
}
```