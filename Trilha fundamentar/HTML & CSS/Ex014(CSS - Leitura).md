# Tipos de seletores:  

<span id="seletores">
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


#### __Inline:__ _estilização feita em linha, pelo próprio HTML usando o atributo `style=".."`_
```html
<h1 style="color: white;">... </h1>
```
</span>

</br>
</br>

## Precedência de seletores
- Na matemática, temos a precedência de operadores, no CSS nós temos algo parecido
- Quanto mais específico um seletor é, maior será sua importância.
### Do menos importante, ao mais importante
<ul type="square">
<li><a href="#seletores">Global selector</a> </li>
<li><a href="#seletores">Tag selector</a>  </li>
<li><a href="#seletores">Class selector</a>   </li>
<li><a href="#seletores">Id selector</a>  </li>
<li><a href="#seletores">Id selector</a>  </li>

<li><a href="#seletores">Inline selector</a>  equivale ao número: 1000 </li>
</ol>

</br> 

# E para que saber sobre a precedência?
* Quando escrevemos um código, o mesmo é lido de cima para baixo. Então se colocarmos: 
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