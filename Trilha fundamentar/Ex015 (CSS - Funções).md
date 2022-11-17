# Funções
* Nome seguido de abre e fecha parênteses 
* Recebe argumento 

# Exemplos:
```css
body{
	background-image: url("https://urlaqui.com);
	{ 
		widght: calc(100% - 10px);
	}
}
```

O "calc" é a nossa função, e esta função está na propriedade "widght" (largura).
O "calc" é uma função para cálculo, neste caso, estamos dizendo que devemos pegar 100% da página e diminuir 10px.
> calc = função  </br>
> (100% - 10px) = argumento

<br>

# Vendor Prefixes
Permite que browsers adicionem features a fim de colocar em uso alguma novidade do CSS. Ou seja, colocar alguma nova atualização do CSS em browsers diversos e saber se eles já aceitam ou não essa atualização.

# Exemplos:
p {
	-webkit-background-clip: text;  /* Chrome, Safari, iOS e Android*/
	-moz-background-clip: text;     /* Mozilla (Firefox) */
	-ms-background-clip: text;      /* Internet Explorer ou Edge*/
	-o-background-clip: text;       /* Opera */

* Você também pode consultar se a feature pode ser utilizada através dos sites:
> https://ireade.github.io/which-vendor-prefix
> https://caniuse.com