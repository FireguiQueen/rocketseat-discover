
## Background-color
* Define uma cor ao seu background

```css
/*>> DEFININDO A COR POR.:          /* 

/* Nome da cor */
background-color: red; 
background-color: blue;
background-color: limegreen;

/* Palavra chave */
background-color: transparent;  /*( vem assim por padrão) */

/* Funções */ 
background-color: rgb (255, 55, 55);
background-color: rgba (255, 55, 55, 0.4);
background-color: hsl (45, 100%, 50%);
```

</br>

## Background-image:
* Define uma imagem ao seu background 
* Por padrão, a imagem irá se repetir, você pode utilizar do `background-repeat: no-repeat`

#### Notas importantes
>A imagem não é necessáriamente é um arquivo do seu PC/repositório. A funções linear-gradient e radial-gradient criam uma IMAGEM que faz a transição de cores (até porque não existe cor própria que faz esta transição). 
```css
/*  Funções */
background-image: url('https://');    /* Com aspas, define uma imagem que está salva na web */
background-image: url(./image.png);  /* Sem aspas, define uma imagem que está salva no repositório */     

background-image: linear-gradient(); /* Define uma cor que vai até a(s) outra(s) em forma de linha */
background-image: radial-gradient(); /* Define uma cor que vai até a(s) outra(s) em forma de círculo */

/* Também é possível juntar uma imagem com o linear gradient */ 
background-image: url(./image.png), linear gradient(..);
```