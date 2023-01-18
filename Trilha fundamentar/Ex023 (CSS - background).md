
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

/* Também é possível juntar uma imagem com o linear gradient/radial-gradient */ 
background-image: url(./image.png), linear gradient(..);
```

</br>

## Background-position:
* Altera a posição do seu background 
#### Notas importantes
> O eixo X só trabalha com três valores.: left, center, right. O eixo Y só trabalha com três valores.: Top, center e bottom
> Jamais tente colocar.: background-position-x: top; &nbsp;ou&nbsp;  background-position-x: bottom (pois não irá funcionar)
> Assim como o shorthand, pois o primeiro valor 

```css
/* Para alterar o eixo X (horizontal) */
background-position-x: center; /* alinha o background do eixo X ao centro */ 
background-position-x: left;   /* alinha o background do eixo X a esquerda */ 
background-position-x: 30px;   /* positivo vai para a direita */ 
background-position-x: -30px;  /* negativo vai para a esquerda */  



/* Para alterar o eixo Y (vertical) */
background-position-y: center; /* alinha o background do eixo Y ao centro */ 
background-position-y: right;  /* alinha o background do eixo Y a direita */ 
background-position-y: 30px;   /* positivo vai para cima */ 
background-position-y: -30px;  /* negativo vai para baixo */  



/* Shorthand */ 
background-position: 50px; /* 50px para o eixo X e Y, logo teremos um background para baixo e direita */ 
background-position: -10px 20px; /* -10px para o eixo X (vai para esquerda) e 20px para o eixo Y (vai pra baixo) */
background-position: left top; /* Eixo X para a esquerda, eixo Y para o topo */
``` 
