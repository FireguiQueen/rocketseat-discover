# At Rules 
* Está relcionada ao comportamento do CSS 
* Começa com o sinal de "@" e em seguida o identificador e valor

</br>

# Exemplos
```css
@keyframes{}   // Animações de CSS
@import ;      // Inclui um CSS externo, uma biblioteca
@font-face ;   // Especifica uma fonte personalizada com a qual o texto deve ser exibido
@media{}       // Adaptação de layout para tamanhos de tela e tipos de mídia diferentes
```
</br>

# Shorhand 
* Junção de properties
* Resume seu código em CSS 
* Melhora a legibilidade de nosso código 


```css
/* Background properties */ 
background-color: black; 
background-image: url(images/bg.gif); 
background-repeat: no-repeat;
background-position: left; 


/* Background SHORTHAND */ 
background: #000 url(images/bg.gif) no-repeat left top; 
```

_____________________________________________________________________________________________________

```css
/* Font proprieties */ 
font-style: italic; 
font-weight: bold; 
line-height: 1.2;
font-size: .2em;
font-family: Arial;


/* Font SHORTHAND */ 
>font: Arial .8em/1.2 Arial, Sanserif;
```

</br>

# Observação: 
#### Propriedades anteriores não serão consideradas (é lido de cima para baixo). Digamos que você coloque: 
```css
font-weight: bold; 
font: italic .8em/1.2 Arial, Sanserif;
```
</br>

#### No final, o valor "bold" será ignorado, pois ele não foi colocado no shrothand. Então, neste caso, seria necessário colocar:
```css
font: italic bold .8em/1.2 Arial, Sanserif;
```
</br>

#### Tanto faz a ordem dos valores
```css
font: italic bold .8em/1.2 Arial, Sanserif;
            /* ou */
font: .8em/1.2 Arial, Sanserif bold italic;
```

> Mas fique esperto caso haja muitas propriedades com valores semelhantes 