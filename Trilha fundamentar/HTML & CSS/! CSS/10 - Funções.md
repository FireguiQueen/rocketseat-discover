# Funções
* Nome seguido de abre e fecha parênteses 
* Recebe argumentos 

### Exemplos:
```css
body{
  background-image: url("https://urlaqui.com");
  background-size: calc(100% - 10px);
}
```

Temos duas funções nessa declaration, "calc"  e "url". 
O "url" é uma função para localizar e extrair conteúdos de um endereço, como uma imagem por exemplo.
O "calc" é uma função para cálculo, neste caso, estamos dizendo que devemos pegar 100% da página e diminuir 10px.

> ```calc & url``` = função  </br>
> ```("https://urlaqui.com") & (100% - 10px)``` = argumento

</br>

____________________________________________________________________

# Vendor Prefixes
Permite que browsers adicionem features a fim de colocar em uso alguma novidade do CSS. Ou seja, pode colocar novas atualizações do CSS, mas de maneira experimental, e não FIXA.

### Exemplos:
```css
p{
  -webkit-background-clip: text;  /* Chrome, Safari, iOS e Android*/
  -moz-background-clip: text;     /* Mozilla (Firefox) */
  -ms-background-clip: text;      /* Internet Explorer ou Edge*/
  -o-background-clip: text;       /* Opera */
}
```
Consulte se a feature está disponível em seu browser aqui:
> https://ireade.github.io/which-vendor-prefix </br>
> https://caniuse.com