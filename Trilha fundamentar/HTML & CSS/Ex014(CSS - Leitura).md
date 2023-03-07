# Tipos de seletores:  


<span id="global"> </span>

#### __Global selector:__ _irá estilizar de maneira global, ou seja, todas as tags que estão no HTML._

```css
*{
    color: blue;
} 
```
```html
<!-- Todos esses elementos serão estilizados por conta do seletor global (*).. Independente de qual seja o elemento. -->
<h1>Sobre mim</h1>
<p> ... </p>

```


</br>

<span id="tag"> </span>

#### __Tag selector:__ _irá estilizar a tag colocada_
```css
h1{ color: green; } 
p{  color: green; } 
h2{ color: green;  }  

/* Você pode estilizar diversas tags ao mesmo tempo usando a vírgula. Por exemplo.: */
h1, p, h2{
    color: green;
}
```
```html
<h1>Sobre mim</h1> <!-- Este elemento será estilizado pois foi colocado no CSS -->
<h2>Contato</h2>   <!-- Este também                                            -->       
<p> ... </p>       <!-- Este também                                            -->

<!-- Estes elementos não serão estilizados, pois suas tags não foram colocados no CSS    -->
<ul> 
    <li> </li>
</ul>
```


</br>

<span id="id"> </span>

#### __Id selector:__ _irá estilizar todas as tags que possuem este id._

> Utiliza-se o "#" para estilizar o ID no CSS </br>
> Coloque apenas um ID por elemento. 
```css
#my-contact{
    color: blue;
}
```
```html
<h2 id="my-contact"> </h2> <!-- Apenas esta tag será estilizada, pois é a tag que possui o id "my-contact" -->
<h2 id="about-me"> </h2>
```


</br>
</br>


<span id="class"> </span>

#### __Class selector:__ _irá estilizar as tags que possuem esta class._

> Utiliza-se o "." para estilizar a classe no CSS </br>
> Class são usadas para estilizar mais de uma tag </br>
> Para atribuir duas ou mais classes a um elemento, usa-se o espaço. Ex: `<p class="paragrafo sobre> </p>`. Agora a tag `<p>` possui duas classes: paragrafo e sobre
```css
.about-Tcompany{
    color: blue;
    }
```
```html
<h1>Nossa empresa </h1>

<!-- Apenas essas tags serão estilizadas, pois possuem a class "about-Tcompany" -->
<p class="about-Tcompany"> </p>
<p class="about-Tcompany"> </p>
<p class="about-Tcompany"> </p>
```


</br>
</br>


<span id="attribute"> </span>

#### __Attribute selector:__ _estilização feita a partir de atributos_
```css
[title]{
    color: purple;
} 
```
```html
<h1> .. </h1>
<p> . </p>
<abbr title=""> </abbr> <!-- Apenas esta tag será estilizada, pois é a única que possui o atributo "title" -->
```


</br>
</br>

<span id="inline"> </span>

#### __Inline:__ _estilização feita em linha, pelo próprio HTML usando o atributo `style=".."`_
```html
<h1 style="color: white;">... </h1>
```
____________________________________________________________________

# Precedência de seletores
- Na matemática, temos a precedência de operadores, no CSS nós temos algo parecido
- Quanto mais específico um seletor é, maior será sua importância.
### Do menos importante, ao mais importante
<ul type="square">
<li><a href="#global">Global selector</a> </li>
<li><a href="#tag">Tag selector</a>  </li>
<li><a href="#class">Class selector</a>   </li>
<li><a href="#id">Id selector</a>  </li>
<li><a href="#attribute">Attribute selector</a>  </li>
<li><a href="#inline">Inline selector</a>  </li>
</ol>

</br> 

## E para que saber sobre a precedência?
- Quando escrevemos um código, o mesmo é lido de cima para baixo.
```css
h1{
    color: blue; 
    }
h1{
    color: red; 
    }
```

No final, o título `h1` será vermelho, pois o código foi lido de cima para baixo (em formato cascata). </br>
Mas e se colocarmos um seletor global por último?  
```css
h1{
    color: blue;
    }
*{
    color: red;
    }
```
Em teoria, o título `h1` será vermelho, pois o código é lido de cima para baixo, e a tag global disse que tudo será vermelho.. Mas há um porém!
O seletor global é _menos_ especifíco que o seletor por tag, por este motivo, o trecho `h1{color:blue;}` possui mais importância, logo, a cor do `h1` será azul, e não vermelha. 

</br>

## Há um jeito de quebrar isto? 
* Sim, usando !important 
```css
h1{
    color: blue;
    }
*{
    color: red !important; 
    }
```

Mesmo o h1 sendo mais forte do que o global selector, demos o !important ao global selector, logo, 
toda essa regra de númeração será quebrada. 
Porém, isto não deve ser utilizado em seu CSS, não é uma boa prática.
Utilize !imporant apenas a bibliotecas CSS cuja você não consegue de jeito nenhum fazer estilizações da forma desejada.

</br>

_________________________________________________________________

# Combinators
São combinadores, iremos combinar diferentes tipos de seletores, a fim de aplicar uma estilização mais precisa e para elementos especifícos.

## Descendant combinator
* Identificado a partir de um espaço entre os seletores
* Busca um elemetro dentro de outro

```css
/* Foi dito o seguinte: entre na section com id clothes, entre na(s) div(s) desta section e estilize a tag p*/

section#clothes div p{
    color: blue;
}
```
```html

<div>
    <section id="clothes">
        <div>
            <h1> </h1>
            <p> </p> <!-- Este elemento que será estilizado -->
        </div>
    </section>
</div>
<!-- Perceba também que a section está dentro de uma div, mas não foi necessário dizer isto ao CSS. Isto ocorre pois a partir do momento em que fazemos uma descendant combinator, ele irá buscar os elementos, independente de onde eles estejam. -->
```

</br>

## Child combinator
* Identificado quando vemos um seletor ao lado do sinal ">"
* Aplica a filhos diretos do elemento.

```css
body > ul > li{
    color: blue;
}
```
```html
<!-- NENHUMA estilização será feita, pois no CSS estamos dizendo para aplicar o estilo apenas para tags filhas diretamente da tag BODY. A tag body não possui nenhuma filha "ul".
A tag "ul" seria sua neta, pois está dentro da tag <div>. -->
    <body>
        <div>
            <ul>
                <li>Primeiro item da lista </li>
        </ul>
    </div>
</body>
```
            
            
</br>