
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
</br>
</br>


## Background-image
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
</br>
</br>


## Background-position
* Altera a posição do seu background 
#### Notas importantes
> O eixo X só trabalha com três valores.: left, center, right. </br>
> O eixo Y só trabalha com três valores.: Top, center e bottom. </br>
>Jamais tente colocar: background-position-x: top; &nbsp;ou&nbsp;  background-position-x: bottom; (pois não irá funcionar). </br>

> No shorthand, o primeiro valor se refere ao eixo X e o segundo valor para o eixo Y. Por conta disto, os exemplos abaixo não irão funcionar (pois não fazem sentido): </br>
> background-position: top left; </br>
> background-position: bottom right;

```css
/* Para alterar o eixo X (horizontal) */
background-position-x: center; /* alinha o background do eixo X ao centro  */ 
background-position-x: left;   /* alinha o background do eixo X a esquerda */ 
background-position-x: 30px;   /* positivo vai para a direita              */ 
background-position-x: -30px;  /* negativo vai para a esquerda             */  



/* Para alterar o eixo Y (vertical) */
background-position-y: center;  /* alinha o background do eixo Y ao centro */ 
background-position-y: top;     /* alinha o background do eixo Y o topo    */ 
background-position-y: bottom;  /* alinha o background do eixo Y o bottom  */ 

background-position-y: 30px;    /* positivo vai para baixo */ 
background-position-y: -30px;   /* negativo vai para cima */  



/* Shorthand */ 
background-position: 50px;       /* 50px para o eixo X e Y, logo teremos um background para baixo e direita */ 
background-position: -10px 20px; /* -10px para o eixo X (vai para esquerda) e 20px para o eixo Y (vai pra baixo) */
background-position: left top;   /* Eixo X para a esquerda, eixo Y para o topo */
``` 

</br>
</br>
</br>


## Background-size
* Altera o tamanho do background

```css
/* Palavra chave */

background-size: cover; 
/* cobre TODO o espaço disponível de um elemento com a imagem de fundo */
/* Se as proporções do plano de fundo forem diferentes do elemento, a imagem será cortada vertical ou horizontalmente. */ 


background-size: contain;
/* Sempre irá preencher um dos lados, seja a width ou height */  
/* Dimensiona a imagem o maior possível dentro de seu contêiner sem cortar ou esticar a imagem. */
/* Para preservar a qualidade, se a altura da imagem for maior que a largura, o contain fará com que o espaço vertical seja ocupado. */
/* Se a largura da imagem for maior que a altura dela, o espaço horizontal será o cupado. */
/* Independente da situação, toda a imagem será vísivel. Mesmo se width/height forem extremamente pequenas, a imagem irá continuar completa */


background-size: auto;
/* Dimensiona a imagem de plano de fundo na direção correspondente de modo que suas proporções intrínsecas sejam mantidas. */
/* Se a imagem é menor do que o contêiner, ela será mostrada em tamanho original, enquanto se a imagem é maior do que o contêiner, ela será escalada para caber dentro dele. */
/* Talvez nem toda a imagem será visível, mas não haverá distorções */
/* Por conta disto talvez seja necessário o background-position: ; parece espeficicar uma parte que deseja ver da imagem */



/* Por tamanho */

/* A porcentagem irá se basear no tamanho da imagem */ 
background-size: 50%; /* 50% para o eixo X e 'auto' para o Y */
background-size: 10% 20%; /* 10% para o eixo X e 20%¨para o Y */ 
```

</br>
</br>
</br>


## Background-origin 
* Define onde irá começar a posição inicial do background (a partir do canto superior esquerdo)
* A posição pode ser a partir da borda, a partir do padding ou a partir do conteúdo do container
* Muito utilizado com o background-clip (SÃO PARECIDOS, MAS SÃO DIFERENTES)


#### Notas importantes
> O background-origin NÃO altera o tamanho da imagem. O background origin é responsável por nos dizer onde o background começa. Se ele vai começar a partir da borda, a partir do padding ou a partir do conteúdo. </br>
> O conteúdo nada mais é do que o tamanho ORIGINAL criado. Supondo que você crie um container, e neste container acrescente um padding de 20px para todos os lados, o conteúdo NÃO se refere ao padding, o padding é apenas um preenchimento, não é considerado o conteúdo.  
```css
/* O background começa junto a borda (utilize uma borda dashed para perceber isto) */ 
background-origin: border-box; 


/* O background começa onde o conteúdo do container começa */ 
/* Este conteúdo nada mais é do que o espaço que vem primeiro que o padding (caso haja padding no seu container) */
background-origin: content-box;


/* O background começa a partir do padding, exatamente o preenchimeto interno está */
background-origin: padding-box;
```
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip">Leia mais sobre</a>

</br>

## Background-clip
* Recorta a area que não será utilizada


#### Notas importantes
> Se dizermos que o clip é `content-box`, toda a area fora do `content` será retirada. Diferentemente do background-origin, onde se falarmos que é `content-box`, estamos dizendo que a imagem começa a partir do conteúdo </br>

> De forma curta e grossa, o clip corta a imagem (com excessão do ponto escolhido. Enquanto o origin faz com que o nosso background comece a partir de uma determinada posição).

```css
/* Não recorta nada (pois pega a partir da borda) */ 
background-clip: border-box;


/* Recorta o background que está atras da borda (pois irá recortar tudo depois do padding */
background-clip: padding-box;  

/* Recorta todo o background, exceto a parte do background que se encontra no content-box do container */
background-clip: content-box;

/* Recorta tudo, exceto o background para os textos */
background-clip: text;
```

</br>
</br>
</br>


## Background-attchment 
* Modifica o nosso background, fazendo com que o background seja possua rolagem ou não (scroll & fixed)

```css
/* Faz com o que o background possua rolagem. É definido por padrão assim */
background-attchment: scroll; 


/* Faz com que o background fique fixo. Mesmo você usando o scroll, apenas o conteúdo da página irá se mexer, o background será fixo. */
background-attchment: fixed;
```


### Shorthand
```css
/* Sem o shorthand */ 
background-color: #000;
background-image: url(images/bg.gif);
background-repeat: no-repeat;
background-position: left top;

/* Shorthand */ 
background: #000 url(images/bg.gif) no-repeat left top;


/* OBS.:
   Caso sua shorthand algum valor da propriedade "background-size", é necessário colocar uma barra (/) antes. Por exemplo.: 
   background: #000 url(images/bg.gif) no-repeat left top / cover;

```


