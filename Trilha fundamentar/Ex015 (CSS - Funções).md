# Funções
* Nome seguido de abre e fecha parênteses 
* Recebe argumento 

### Exemplos:
```css
body{
	background-image: url("https://urlaqui.com");
	background-size: calc(100% - 10px);
}
```

Temos duas funções nessa declaration, "calc"  e "url" 
O "url" é uma função para localizar e extrair conteúdos de um endereço, como uma imagem por exemplo.
O "calc" é uma função para cálculo, neste caso, estamos dizendo que devemos pegar 100% da página e diminuir 10px.

> ```calc & url``` = função  </br>
> ```("https://urlaqui.com") & (100% - 10px)``` = argumento

<br>

# Vendor Prefixes
Permite que browsers adicionem features a fim de colocar em uso alguma novidade do CSS. Ou seja, colocar alguma nova atualização do CSS em browsers diversos e saber se eles já aceitam ou não essa atualização.

### Exemplos:
```css
p{
	-webkit-background-clip: text;  /* Chrome, Safari, iOS e Android*/
	-moz-background-clip: text;     /* Mozilla (Firefox) */
	-ms-background-clip: text;      /* Internet Explorer ou Edge*/
	-o-background-clip: text;       /* Opera */
}
```
Consulte se a feature pode ser utilizada em seu browser através dos sites:
> https://ireade.github.io/which-vendor-prefix </br>
> https://caniuse.com