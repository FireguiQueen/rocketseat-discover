# Margin 
margin-top | margin-right | margin-bottom | margin-left  
- Values: `<length>` | `<percentage>` | auto 

> __Lenght__: são valores como "10px", "5rem", "3em", "10vw" e etc.. </br>
> __Percantage__: Literalmente porcentagem, "10%".. Ela irá se basear no tamanho do bloco que está mexendo

```c#
SHORTAND 

> margin: 12px 16px 10px 4px (top ; right; bottom; left)
// 12px para cima, 16px para direita, 10px para baixo e 4px para esquerda

> margin: 10px 13px 3px (top; right and left; bottom)
// 10px para cima, 13px para direita e esquerda e 3px para baixo

> margin: 16px 8px (top and bottom ; right and left)
// 16px para cima e baixo e 8px para direita e esquerda

> margin: 20px (all sides)
// 20px para todos os lados
```

</br>


## Margin collapsing
```css
div#1{ 
    margin-bottom: 10px;
    }
div#2{ 
    margin-top: 20px;
    }
```
```html
<div id="1"> Olá, mundo!    </div>
<div id="2"> Olá, pessoas!  </div>
```

### Neste momento pensamos: 
Na primeira DIV foi colocado 10px de margin para baixo, na segunda segunda DIV foi colocado 20px de margin para cima.. Logo, haverá um espaço de 30px entre as divs? Errado! 
Irá ocorrer a margin collapsing, ou seja, haverá somente um valor de espaço entre as tags.
Como o número 20 é maior, haverá um espaço de 20px entre as divs. 

* O margin collapsing ocorre somente quando o elemento está acima do outro (tags display: block).
* O margin collapsing não corre quando há um elemento ao lado do outro (tags display: inline).

<span id="1"> Olá, mundo </span>
<span id="2"> Olá, pessoas </span>

```css
span#1{ margin-right: 20px;}
span#2{ margin-left: 20px;}
```
No final, haverá um espaço de 40px entre as tags <span>
Pois a primeira possui 20px para a direita, e a segunda possui 20px para a esquerda


<!------------------------------------------------------------------------------------------------------------------------->
# Padding
padding-top | padding-right | padding-bottom | padding-left  
- Values: `<length>` | `<percentage>` 

```cs
Shorthand
> padding: 12px 16px 10px 4px (top ; right; bottom; left)
// 12px para cima, 16px para direita, 10px para baixo e 4px para esquerda

> padding: 10px 13px 3px (top; right and left; bottom)
// 10px para cima, 13px para direita e esquerda e 3px para baixo

> padding: 16px 8px (top and bottom ; right and left)
// 16px para cima e baixo e 8px para direita e esquerda

> padding: 20px (all sides)
// 20px para todos os lados
```

* O padding pode causar aumento de tamanho caso seja utilizado: 'box-sizing: content-box'

- Imagine que ambas as figuras acima possuem o mesmo tamanho.
- Na figura 1, o padding se baseou na borda e diminui 20px para o lado esquerdo
- Na figura 2, o padding se baseou no conteúdo e acrescentou 20px ao lado esquerdo.

                        box-sizing: border-box                
                            |------------------|
                            |                  |
                            | -(20px) oi       | 
                            |__________________|


                         box-sizing: content-box 
                        |----------------------|
                        |                      |
                        | +(20px) oi           |
                        |______________________|


