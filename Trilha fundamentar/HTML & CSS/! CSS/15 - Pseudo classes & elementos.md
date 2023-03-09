# Pseudo-classes
Uma pseudoclasse em CSS é chamada de "pseudo" porque ela representa um ESTADO ou uma CONDIÇÃO que não pode ser representada por um elemento HTML sozinho. Em outras palavras, é uma classe "falsa" que é adicionada a um elemento com base em um determinado estado ou interação com o usuário, como "hover" (quando o cursor está sobre o elemento), "active" (quando o elemento é clicado) ou "visited" (quando um link já foi visitado).

>A palavra "pseudo" vem do grego e significa "falso" ou "fictício". Portanto, o termo "pseudoclasse" é usado para indicar que a classe em questão é uma classe falsa que é adicionada com base em um estado ou condição específica.

</br>
</br>

## first-child
Indica para estilizarmos apenas o primeiro filho de determinado seletor. 
Precisamos informar qual tag será estilizada, se esta tag escolhida NÃO for a primeira filha, ela não será estilizada. 

```css
div#frases p:first-child{
    color: blue;
}
```
```html
<body>
    <div id="frases">
        <p> </p> <!-- Apenas esta tag será estilizada, pois é a primeira filha do seletor div#frases-->

        <p> </p>
        <p> </p>
    </div>
</body>
```

</br>
</br>
        

## nth-child()
Utiliza-se para poder estilizar tags filhas específicas. </br>
Você também pode usar fórmulas para especifícar quais posições serão estilizadas.
> A palavra "nth"  refere-se a uma notação matemática para indicar uma posição em uma sequência. Por exemplo, "2n" significa "cada dois elementos", "3" significa "cada três elementos", e assim por diante. Caso queira que a estilização comece pelo PRIMEIRO elemento, utilize o "+1", por exemplo: "(2n +1)", isto significa que a cada dois elementos ele irá estilizar o primeiro elemento. E também é possível utilizar palavras chaves, como "even", "even" irá pegar apenas números pares e "odd" apenas números ímpares.

#### Estilizando apenas elementos __pares__
```css
#frases li:nth-child(even){
    color: blue;
}
```
```html
<section id="frases">
    <ul>
        <li>..</li>
        <li>..</li> <!-- Será estilizado, pois está numa posição "PAR" -->
        <li>..</li>
        <li>..</li> <!-- Será estilizado, pois está numa posição "PAR" -->
    </ul>
</section>
```
#### Estilizando apenas elementos a cada 3 elementos
> São a cada 3 elementos, porém a cada 3 elementos, um será estilizado.

```css
#frases li:nth-child(3n){
    color: red;
}
```
```html
<section id="frases">
    <ul>
        <li>..</li>
        <li>..</li>
        <li>..</li> <!-- Será estilizado, pois está numa posição "PAR" -->
        <li>..</li>
        <li>..</li>
        <li>..</li> <!-- Será estilizado, pois está numa posição "PAR" -->
        <li>..</li>
        <li>..</li>
        <li>..</li> <!-- Será estilizado, pois está numa posição "PAR" -->
    </ul>
</section>
``` 

</br>
</br>
        

## nth-of-type()
Utiliza-se em uma tag específica, e informamos qual delas será estilizada.

#### Estilizando apenas o segundo parágrafo
```css
section#frases p:nth-of-type(2){
    color: blue;
}
```
```html
<section id="frases">
    <h1> Frases motivacionais </h1>
    <p> </p> 
    <p> </p> <!-- Irá estilizar apenas este elemento (pois ele é o segundo P). -->
    <p> </p>
</section>
```

</br>
</br>

## hover
Interação caso o mouse do usuário esteja "fluatuando" sobre determinado elemento. 

```css
h1:hover{
    color: blue;
}
```
```html
<body>
    <h1> </h1> <!-- Este título irá ficar azul caso o mouse esteja em cima dele, "fluatuando" -->
</body>
```

</br>
</br>

## focus
Da foco ao usuário interagir. Esta pseudo-classe é muito utilizada com inputs. 

```css
input#txt:focus{
    border-color: red;
}
```
```html
<body>
    <input type="text"> <!-- A borda do input será vermelha quando o usuário interagir com ele -->
</body>
```

</br>
</br>

## required & disabled
No HTML, temos a opção de deixar determinado input habilitado ou desabilitado (são atributos da tag INPUT). </br>
Podemos mudar o estilo dele caso o input esteja desabilitado por exemplo. 

```css
input:disabled{
    background-color: blue;
}
```
```html
<body>
    <input type="password" disabled> <!-- Este input terá o fundo azul, pois está desabilitado -->
```


</br>
</br>

_________________________________________________________________________

# Pseudo-elements
Utilizado para poder criar conteúdos através de elementos. </br>
A propriedade `content: ""` é obrigatória, seja vazia ou não. 


## before
Cria-se novos conteúdos ANTES do conteúdo de determinado elemento
> Observe-se que o conteúdo criado pelo before AINDA FARÁ parte da tag escolhida. 

```css
h1::before{
    content: "Olá, esta frase foi colocada antes do conteúdo do h1, usando um pseudo-elemento";
}
```
```html
<body>
    <h1> .. </h1>
</body>
```

</br>
</br>

## after
Cria-se novos conteúdos DEPOIS do conteúdo de determinado elemento
> Observe-se que o conteúdo criado pelo after AINDA FARÁ parte da tag escolhida. Veja <a href="https://prnt.sc/OJ3pzKs84VP-"> aqui </a>

```css 
h1::after{
    content: "..";
}
```
```html
<body>
    <h1> .. </h1>
</body>
```

### Também podemos criar elementos mais complexos, que não sejam textos.
```css
h1{
    position: relative;
}
h1::after{
    content: ""; /* Lembre-se, o "content" é obrigatório, até mesmo vázio. */
    position: absolute;
    left: 30px;
    height: 40px;
    width: 40px;
    background-color: blue;
    transform: rotate(45deg);
}
```

</br>
</br>

## first-line
Modifica apenas a primeira linha do texto.

```css
p::first-line{
    color: blue;
}
```
```html
<body>
    <!-- Toda linha que seja a primeira das Tags <p>, terão a cor azul -->
    <p> </p> 
    <p> </p>
    <p> </p>
</body>
```
