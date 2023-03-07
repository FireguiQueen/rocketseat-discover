# Pseudo-classes
Uma pseudoclasse em CSS é chamada de "pseudo" porque ela representa um ESTADO ou uma CONDIÇÃO que não pode ser representada por um elemento HTML sozinho. Em outras palavras, é uma classe "falsa" que é adicionada a um elemento com base em um determinado estado ou interação com o usuário, como "hover" (quando o cursor está sobre o elemento), "active" (quando o elemento é clicado) ou "visited" (quando um link já foi visitado).

>A palavra "pseudo" vem do grego e significa "falso" ou "fictício". Portanto, o termo "pseudoclasse" é usado para indicar que a classe em questão é uma classe falsa que é adicionada com base em um estado ou condição específica.

</br>
</br>

## first-child
Indica para estilizarmos apenas o primeiro filho de determinado seletor. 

```css
div#frases:first-child{
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
        