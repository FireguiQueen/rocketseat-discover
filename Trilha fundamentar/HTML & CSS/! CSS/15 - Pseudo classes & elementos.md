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
Utiliza-se para poder estilizar tags filhas específicas.
Você também pode usar fórmulas para especifícar quais posições serão estilizadas.

#### Estilizando apenas elementos PARES */
```css
#frases li:nth-child(even){
    color: blue;
}

> A palavra "nth" em "nth-child" refere-se a uma notação matemática para indicar uma posição em uma sequência. Por exemplo, "2n" significa "cada dois elementos", "3n+1" significa "cada três elementos, começando pelo primeiro", e assim por diante.