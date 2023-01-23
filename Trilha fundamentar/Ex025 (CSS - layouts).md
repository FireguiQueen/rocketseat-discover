# Layouts

- Fables _(era o único método de se construir layouts bem antigamente, já mais utilize table com este objetivo)_
- Floats _(um método também antigo, e raramente utilizado hoje em dia, fazia com que os elementos flutuassem para um lado)_
- Flexbox _(método atual junto ao grid. Flexbox trabalha com a ideia de containers flexíveis, e geralmente é utilizado para posicionar elementos dentro de um elemento)_
- Grid _(método atual junto ao flexbox. Grid trabalha com a ideia de containers que se posicionam através de "grades", e geralmente é utilizado para posicionar elementos dentro do body)_


</br>
</br>
</br>

## Position 
Controla onde, na página, o elemento irá ficar de acordo com as direções (top, right, bottom, left).
O position altera o fluxo normal dos elementos (fluxo normal seria um embaixo do outro da mesma maneira que vemos quando escrevemos o código em HTML). 

- __Name:__ _position_
- __Value:__ _static | relative | absolute | fixed_ 


### Static
Static é o valor padrão, significa que os elementos irão seguir o fluxo normal.
Como já foi dito acima, o fluxo normal nada mais é do que a posição normal dos elementos.
Em outras palavras, se no HTML você colocar:
```html
<h1>Peixe boi</h1>
<h2>baba boi</h2>
```
significa que esta ordem será respeitada, e o elemento <code>&lt;h2&gt;</code> estará embaixo do 
<code>&lt;h1&gt;</code>.

> Lembre-se que isto se aplica também a elementos "inline", porém, com elementos inline, os containers ficaram um ao lado do outro, então se tivessemos usado a tag <code>&lt;a&gt;</code> primeiro e a tag <code>&lt;q&gt;</code> em segundo, em nossa página iriamos ver a tag <code>&lt;a&gt;</code> primeira, e ao seu lado a tag <code>&lt;q&gt;</code>. 

</br>
</br>

### Relative & absolute
Quando o "relative" for aplicado, deixaremos um elemento relativo, e a partir disso, podemos colocar seus filhos do HTML como "absolute". 
Quando o elemento se retorna "relative" e seus filhos "absolute", podemos dizer que os filhos ficaram a 2px de distância ao lado esquerdo (ou a qualquer outro lado). Exemplo.:
```html 
<section id="box">
    <div class="square"> </div> 
    <div class="square"> </div> 
    <div class="square"> </div> 
</section>
```
```css
#box{
    position: relative; 
}
.square{
    position: absolute;
    left: 0; /* Estamos dizendo que as divs "square" ficaram ao lado esquerdo da section box" */
    top: 0; /* Estamos dizendo que as divs "square" ficaram ao top da section box" */

    /* Caso você queira que um elemento fique além da section box por um determinado lado, você pode usar números negativos */
    left: -30px; /* Dessa forma os "square" ficaram ao lado esquerdo e fora da section box */
}
```
> SEMPRE QUE UTILIZAR "0" NÃO COLOQUE "px" OU QUALQUER OUTRA MEDIDA, APENAS COLOQUE CASO SEJA OUTRO NÚMERO

> POR PADRÃO, QUANDO NÃO DEFINIMOS UM "POSITION: RELATIVE;" PARA UM ELEMENTO, A TAG BODY SEMRPE SERÁ A RELATIVA PARA OS ELEMENTOS QUE POSSUEM "POSITION: ABSOLUTE;".



</br>
</br>


### Fixed
Fará com que seu elemento fique fixo na página, valor muito utilizado para a tag <code>&lt;header&gt;</code>. Pois assim, mesmo que o usuário faça a rolagem na página, o elemento ainda será mostrado, pois ele é fixo.

```html
<header style="position: fixed;  top: 0;">
    <nav>
        <ul>
            <li> About </li>
            <li> Contact </li>
            <li> Home </li>
        </ul>
    </nav>
</header>
```

</br>
</br>
</br>

# Z-index
É habilitado para qualquer valor do position. 
Trabalha com layers (igual nos softwares de edição de imagem), então podemos definir a camada de determinado elemento.

```html 
<section>
    <div class="square box1"> </div>
    <div class="square box2"> </div>
</section>
```
```css
.square{
    position: absolute; 
    top: 0;
    left: 0;
    width: 50px;
    height: 50px; 
}
.box1{
    background-color: red;
    z-index: 1;
}
.box2{
    background-color: green; 

}
```
* Em teoria, nossa página mostraria a caixa verde, pois ela foi colocado por último em nosso código. Porém a box1 possui o z-index, informando que sua camada é a 1, por padrão, os elementos são todos da camada 0, quando dizemos que o box1 é da camada 1, ele esta uma camada a frente, logo será mostrada primeiro.


</br>
</br>
</br>

### Flexbox
Através do flexbox, podemos posicionar os elementos de maneira horizontal e vertical dentro de um container. 

#### Flex direction
Define a direção da nossa flexibilidade. Por padrão, será row.. Ou seja, assim que difinirmos um elemento pai como "display: flex", seus filhos serão alinhados em alinhas. Significa que até mesmo elementos do tipo "block" estarão um ao lado do outro, e para alterar isto, você pode definir que a flex-direction será "column", ou seja, em coluna. 
* __row:__ _row | row-reverse_
* __column:__ _column | column-reverse_  

#### Alinhamento dos eixos
* __justify-content:__  _space-between | flex-start | space-around| center | flex-end_
* __align-items:__ _space-between | flex-start | space-around| center | flex-end_

> space-between: espaço entre elementos, sempre que houver 2 elementos, haverá um espaço entre eles. Como a última caixa e a primeira não possuem outros elementos ao lado, elas não terão espaço no inicio.

> flex-start: faz com que os elementos comecem no inicio do eixo X do elemento onde o display flex foi aplicado

> space-around: toda tag terá um espaço ao redor dela, seja no lado direito, e no lado esquerdo 

> center: faz com que os elementos sejam centralizados ao centro da caixa onde o display flex foi aplicado 

> flex-end: faz com que os elementos comecem ao final do eixo X do elemento onde o display flex foi aplicado 

#### Espaçamento
Cria um espaço entre os elementos, pode ser aplicado ao flex-direction row e ao column e elementos individuais
* gap: `length` 


#### Notas importantes
Quando alteramos o flex-direction, é importante lembrar que as propriedades "align-items" e "justify-content" irão se alterar. 
Quando alteremos o flex-direction para reverse, também alteramos as propreidades do justify-content. Ou seja, caso você coloque "flex-start" e com "row-reverse", os seus elementos começaram ao flex-end, pois é o reverso. Mas você só verá isto caso o tamanho da sua caixa que agrupa os elementos não seja fit-content.

</br>
</br>
</br>


### Grid
* Muito utilizado para definir o posicionamento dos filhos do body (header, sections, footer..)
* Trabalha com a questão de "grids", linhas e colunas

```html
<style> 
    body{
        width: 100%;
        height: 100vh;
        margin: 0;
        display: grid;

        /* Aqui definimos as linha e quais elementos estarão nelas, se eles estarão juntos ou não. */
        /* Cada aspas (" ") representa uma linha (uma row).    */
        /* O conteúdo dentro das aspas representam uma coluna. */
        /* O conteúdo organizado dentro das linhas pode receber qualquer nome */

        /* Aqui iremos definir como será o nosso layout */ 
        grid-template-areas: 
        "header header"  /* Como pode ver, há dois "header" aqui */
        "cachorro gato" /* Se estamos dizendo que terá duas colunas nestas linhas, todas as outras irão precisar ter duas colunas */
        "papagaio lobo" /* Se estamos dizendo que terá duas colunas nestas linhas, todas as outras irão precisar ter duas colunas */
        "footer footer";  /* Como pode ver, há dois "footer" aqui */ 


        /* Definindo o tamanho (altura) das linhas */ 

        /* Perceba que em nosso layout temos 4 linhas, sendo assim, o primeiro valor na propriedade abaixo será para a primeira linha, o segundo valor, para a segunda linha.. E assim por diante. */
        grid-template-rows: 40px 20px 20px 30px;

        /* Podemos também usar "1fr". Este valor significa que a nossa linha irá cobrir tudo o que tiver de espaço disponível. */
        grid-template-rows: 40px 1fr 1fr 30px;


        /* Definindo o tamanho (largura) das colunas */ 

        /* Perceba que em nosso layout temos 2 colunas, sendo assim, o primeiro valor na propriedade abaixo será para a primeira coluna, o segundo valor para a segunda coluna..*/
        grid-template-columns: 40px 20px 20px 30px;

        /* Podemos também usar "1fr". Este valor significa que a nossa colunar irá cobrir tudo o que tiver de espaço disponível. */
        grid-template-rows: 40px 1fr 1fr 30px;


        /* 1fr */
        /* Nas propriedades de grid podem ser utilizadas quaisquer unidades de medida. Para nos ajudar a criar layouts flexíveis utilizando o grid, foi criada uma unidade nova. A unidade fr representa uma fração do espaço disponível no container do grid. A próxima definição de grid cria três espaços com tamanhos iguais que aumentam e diminuem de acordo com o espaço disponível. */

    }
    header{
        /* Como o nosso layout já foi definido (grid-template-areas), agora precisamos dizer qual parte do layout ele se refere, como este é o nosso header, precisamos informar que seu "grid-area" é "header", pois foi coloco assim */
        grid-area: header;
        background-color: aqua;
    }
    .cachorro{
        /* Como o nosso layout já foi definido (grid-template-areas), agora precisamos dizer qual parte do layout ele se refere, como este é o nosso header, precisamos informar que seu "grid-area" é "cachorro", pois foi coloco assim */
        grid-area: cachorro;
        background-color: brown;        
    }
    .gato{
        /* Como o nosso layout já foi definido (grid-template-areas), agora precisamos dizer qual parte do layout ele se refere, como este é o nosso header, precisamos informar que seu "grid-area" é "gato", pois foi coloco assim */
        grid-area: gato;
        background-color: rgb(24, 24, 24);
    }
    .papagaio{
        /* Como o nosso layout já foi definido (grid-template-areas), agora precisamos dizer qual parte do layout ele se refere, como este é o nosso header, precisamos informar que seu "grid-area" é "papagio", pois foi coloco assim */
        grid-area: papagaio;
        background-color: blue;
    }
    .lobo{
        /* Como o nosso layout já foi definido (grid-template-areas), agora precisamos dizer qual parte do layout ele se refere, como este é o nosso header, precisamos informar que seu "grid-area" é "lobo", pois foi coloco assim */
        grid-area: lobo;
        background-color: gray;
    }

    footer{
        /* Definindo o nome deste elemento dentro da "grid template" para colocarmos o elemento onde queremos */
        grid-area: footer;
        background-color: blueviolet;
    }
</style>


<body>
    <header> <h1> Cabeçalho <h1> </header>

    <section class="animals cachorro"> <h2>Dog</h2>      </section>
    <section class="animals gato"> <h2>Gato </h2>        </section>
    <section class="animals papagaio"> <h2>Papagaio</h2> </section>
    <section class="animals lobo"> <h2>Lobo </h2>        </section>

    <footer> </footer> 
</body>
```