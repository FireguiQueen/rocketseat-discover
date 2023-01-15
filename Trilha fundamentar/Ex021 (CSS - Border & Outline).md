# Border
- __Valores__ _(define o tipo de borda)_ _:_ solid&nbsp;&nbsp;|&nbsp;&nbsp;dotted&nbsp;&nbsp;|&nbsp;&nbsp;dashed&nbsp;&nbsp;|&nbsp;&nbsp;double&nbsp;&nbsp;|&nbsp;&nbsp;groove&nbsp;&nbsp;|&nbsp;&nbsp;ridge&nbsp;&nbsp;|&nbsp;&nbsp;inset|&nbsp;&nbsp;outset&nbsp;&nbsp;|&nbsp;&nbsp;hidden&nbsp;&nbsp;|&nbsp;&nbsp;none
- __width:__  `<length>` (px, cm, em, medium, small, large..)
- __color:__  `<color>`  (nome da cor / número da cor)

> __dotted__ -> Define uma borda pontilhada (....)  </br>
> __dashed__ -> Define uma borda tracejada  (----)</br>
> __solid__ -> Define uma borda sólida (_____)</br>
> __double__ -> Define uma borda dupla (=====)</br>
> __hidden__ -> Define uma borda escondida (   )    
> __none__ -> Tira a borda ()</br>

```css
/* Padrão */ 
h1{
Border-top-width: values;
Border-right-width: values;
Border-bottom-width: values;
Border-left-width: values;
}


/* Shorthand */
h1{
 border: 10px solid red;
 /* 10px de borda (top, right, bottom, left); borda sólida; borda da cor vermelha. */
}
```

* Quando aumentamos o tamanho da borda, a mesma irá começar a crescer para fora da tag, deixando um visual não agrádavel. Para fazer a borda crescer para dentro e não para fora, utilize `box-sizing: border-box`
* Seguimos a mesma lógica do {padding/margin}, a propriedade {border} também está no model-box.
* Então, para não aumentarmos o tamanho do elemento ao usarmos o border, devemos usar: {box-sizing: border-box;}

__________________________________________________________________

# Outline 
````css
{outline: yellow 4px solid;}

* O outline é muito semelhante ao border, mas difere em 4 sentidos:
- Não modifica o tamanho da caixa, pois não é parte do Box Model
- Poderá ser diferente de retangular
- Não permite ajuste individuais
- Mais usado pelo user agent para acessibilidade <!-- Elementos HTML que possuem borda utilizam do outline -->