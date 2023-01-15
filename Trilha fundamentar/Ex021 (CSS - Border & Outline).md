# Border
- Valores (define o tipo de borda):  solid&nbsp;|&nbsp;dotted&nbsp;|&nbsp;dashed&nbsp;|&nbsp;double&nbsp;|&nbsp;groove&nbsp;|&nbsp;ridge&nbsp;|&nbsp;inset|&nbsp;outset&nbsp;|&nbsp;hidden&nbsp;|&nbsp;none
- width:  `<length>` (px, cm, em, medium, small, large..)
- color:  `<color>`  (nome da cor / número da cor)

> dotted - Define uma borda pontilhada (....)
> dashed - Define uma borda tracejada  (----)
> solid  - Define uma borda sólida (_____)
> double - Define uma borda dupla (=====)
> hidden - Define uma borda escondida (   )    ;    none - Tira a borda ()

```css
Padrão: 
{Border-top-width: values}
{Border-right-width: values}
{Border-bottom-width: values}
{Border-left-width: values}

## Shorthand
{border: 10px solid red} /* 10px de borda (top, right, bottom, left); borda sólida; borda da cor vermelha. */

* Quando aumentamos o tamanho da borda, a mesma tag que possui a borda, tem um aumento de tamanho.
* Seguimos a mesma lógica do {padding/margin}, a propriedade {border} também está no model-box.
* Então, para não aumentarmos o tamanho do elemento ao usarmos o border, devemos usar: {box-sizing: border-box;}
```
<!------------------------------------------------------------------------------------------------------------------------->

# Outline 
````css
{outline: yellow 4px solid;}

* O outline é muito semelhante ao border, mas difere em 4 sentidos:
- Não modifica o tamanho da caixa, pois não é parte do Box Model
- Poderá ser diferente de retangular
- Não permite ajuste individuais
- Mais usado pelo user agent para acessibilidade <!-- Elementos HTML que possuem borda utilizam do outline -->