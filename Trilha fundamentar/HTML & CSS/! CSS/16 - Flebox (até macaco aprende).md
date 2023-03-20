# Flexbox

## Para que usamos?
Em geral, utilizamos o flexbox para posicionar elementos em nossa página. </br>
Vale lembrar que, geralmente este posicionamento é feito para elementos que estão dentro de outros elementos. </br>
Quando você quiser posicionar seções da página por exemplo, o _"grid" é mais recomendado_. 

</br>

## Terminologia básica

- Nesting
> É quando um elemento está dentro de outro elemento. 
```html
<ul>
    <li> </li>
    <li> </li>
    <li> </li>
</ul>
```

</br>
</br>

- Flex container
> Aquele elemento onde o flexbox será aplicado. É o elemento onde os itens estão. 
```html
<section> <!-- Esta tag é o container, e será nela onde iremos aplicar propriedades do flexbox -->
    <h1> .. </h1>
    <p> </p>
</section>
```
    
</br>
</br>

- Flex item
> É aquele elemento que está dentro do flex container. 
```html
<section> 
    <h1> .. </h1> <!-- Este é um dos itens -->
    <p> </p>      <!-- Este é um dos itens -->
</section>
```

</br>
</br>

______________________________________________________

## Eixos
Quando criamos um container flexbox, o mesmo irá possuir dois eixos, sendo ele o "main" e o "cross". E eles são importantes para outras propriedes do FlexBox.
<a href="https://res.cloudinary.com/practicaldev/image/fetch/s---3gDSFf1--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/fsln7je4ax7ft3er28hh.png">Imagem ilustrativa</a>.


### Main axis
Do inglês, main (principal), axis (eixo).. Ou seja, eixo principal. </br>
O eixo main se refere ao eixo HORIZONTAL. </br>
A propriedade `justify-content: ..` nos permite mexer na posição HORIZONTAL do elemento, e esta propriedade utiliza do eixo MAIN.
```css
section{
    display: flex;


    /* A partir da propriedade, todos as tagas FILHAS da section, irão se posicionar ao lado direito no eixo main */
    justify-content: flex-end; 
}
```
```html
<body>
    <section>
        <h1> ..</h1> <!-- Este item irá se posicionar a direita dentro da section -->
        <p> </p>     <!-- Este item irá se posicionar a direita dentro da section -->
    </section>
</body>
```

</br>
</br>

### Cross axis
Do inglês, main (principal), axis (eixo).. Ou seja, eixo principal. </br>
O eixo main se refere ao eixo VERTICAL. </br>
A propriedade `align-items: ..` nos permite mexer na posição VERTICAL do elemento, e esta propriedade utiliza do eixo CROSS.
```css
section{
    display: flex;

    /* A partir da propriedade, todos as tagas FILHAS da section, irão se posicionar ao TOPO da section */
    align-items: top; 
}
```
```html
<body>
    <section>
        <h1> ..</h1> <!-- Este item irá se posicionar ao topo dentro da section -->
        <p> </p>     <!-- Este item irá se posicionar ao topo dentro da section -->
    </section>
</body>
```

</br>
</br>

### Flex-sizing
Permite que os itens se ajustem na largura e altura para preencher o container. </br>
Digamos que você possua 3 itens num container, porém, os 3 itens estão com o tamanho padrão, logo, vemos que irá sobrar um espaço em "branco" muito grande, que é o container.. </br>
Para este espaço ser preenchido pelos itens, é bem simples, basta utilizar da propriedade `flex: 1`. Esta propriedade é colocada DIRETAMENTE nos itens, e não no container. 
```css
section{
    display: flex;
}
h2{
    flex: 1;
    background-color: blue;
}
```
```html
<body>
    <section>
        <!-- Agora o tamanho dos ITENS h2 irão preencher toda a nossa section -->
        <h2>Item 1 </h2>
        <h2>Item 2 </h2>
        <h2>Item 3 </h2>
    </section>
</body>
```

</br>
</br>

______________________________________________________________

# Principais propriedades 

</br>

## `display: flex`
Obrigatória para definir que o container seja flex.


</br>
</br>


## `flex-direction`
__Valores:__ `column`, `column-reverse`, `row`, `row-reverse`
Quando temos um container flex-box, por _PADRÃO_ sua flex-direction será _row_. </br>
Por isso que, quando nós aplicamos o `display: flex`, vemos todos os itens se juntando em uma linha, pois estão na direção de 'row', ou seja, numa direção de linha. </br> </br>
É importante que saber que quando colocamos a direção `column`, os eixos terão um comportamento um pouco diferente. Com o valor 'column', a 'main axis' será de cima para baixo, e a cross será da esquerda para a direita. Isto ocorre pois o que importa é a direção do container, quando dizemos que o container é em "row" (linha), seu eixo principal então deve ser a _horizontal_. Se dizemos que é "column", seu eixo principal deve ser a _vertical_, pois é uma coluna. 

</br>

O `column-reverse` e `row-reverse` são conceitos simples. Na flex-direction padrão (row), todos os itens ficam alinhados em linha, começando pela esquerda.. Na `row-reverse` os itens irão começar pela direita, e as propriedades (justify-content por exemplo) terão comportamentos diferentes em relação as direções. O mesmo vale para a `column-reverse`, onde os itens irão começar por baixo, e não por cima (que seria o padrão).


</br>
</br>


## `justify-content` 
__Valores:__ `flex-start`, `center`, `flex-end`, `space-around`, `space-between`,
Esta propriedade nos permite mudar a direção dos itens no eixo main, ou seja, na horizontal.
> 'Flex-start' coloca o item para a esquerda, 'center' coloca ao meio, 'flex-end' coloca a direita', 'space-around' adiciona um espaço ao redor de todos itens, 'space-between' adiciona um espaço ENTRE os itens somente, 'space-evenly' adiciona um espaço IGUAL a todos os itens. <a href="https://samanthaming.gumlet.io/flexbox30/14-space-around-vs-space-evenly.jpg.gz?format=auto">diferença entre space-evenly e space-around.</a>


</br>
</br>


## `align-items` 
__Valores:__ `flex-start`, `center`, `flex-end`
Esta propriedade nos permite mudar a direção dos itens no eixo cross, ou seja, na vertical.
> 'top' coloca ao topo, 'center' coloca ao meio, 'bottom' coloca embaixo.


</br>
</br>


## `gap`
__Valores:__ `px`
Esta propriede permite adicionar um espaço ENTRE os itens. Este espaço será colocado tanto ao lados, quanto na vertical. 
> Supondo que haja dois itens, e você coloque um 'gap:30px', haverá uma distância de 30px entre os itens. Jamais utilize do 'margin' para separar itens quando um container é flex.


</br>
</br>


## `flex-wrap`
__Valores:__ `wrap`, `nowrap`
Vamos supor que você possua um container com uma WIDTH pré-definida de 100px, e este container armazena perfeitamente 3 itens.. Mas caso você adicione o quarto item, este item ficará fora do container ao lado direito. Para corrigir este problema, nós temos duas opções, sendo.: _não definir a width do container_ ou _utilizar do `flex-wrap: wrap`. Com esta propriede, sempre que determinado item não couber no espaço do container, uma nova linha será criada e irá armazenar este(s) novo(s) item/itens.
> O flex-wrap é de extrema importância em conteúdos reponsivos, pois trabalha principalmente com a largura de um container, e quando temos uma tela menor, este container será menor, logo, o conteúdo irá continuar dentro do container, pois o mesmo terá uma nova linha criada para armazená-lo. 


</br>
</br>


## `flex-flow`
__Valores:__ `row/row-reverse`, `column/column-reverse`, `wrap / nowrap`
Esta propriedade é apenas um metódo para encurtar as duas propriedes: flex-direction e flex-wrap.

```css
    flex-direction: column;
    flex-wrap: wrap; 

    /* Ou podemos simplesmente fazer: */

    flex-flow: column wrap;
```


</br>
</br>


## `flex-basis`
__Valores:__ `auto`, `px/%/em..`
Esta propriede define uma largura/altura INICIAL aos itens de um container. </br>
Se o container estiver em 'column', a altura inicial que será alterada. Se o container estiver em 'row', a largura inicial que será alterada.


</br>
</br>


## `flex-grow`
__Valores:__ '0', '1', '2', '3'..
Esta propriedade permite que os itens cresçam, ocupando o espaço vázio dentro do container. Lembre-se que o crescimento do item irá se basear na `flex-direction`. 
> Supondo que você possua um container com 100px, e nele você tem 4 itens. Porém, os mesmos 4 itens só ocupam 50% do container (50px), com o flex-grow, você poderia mandar um item específico ocupar o espaço em branco do container, ou seja, os outros 50%.


</br>
</br>


## `flex`


</br>
</br>



