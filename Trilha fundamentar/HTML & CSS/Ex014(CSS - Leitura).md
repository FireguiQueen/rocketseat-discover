# Tipos de seletores:  

#### __Global selector:__ _irá estilizar de maneira global, ou seja, todas as tags que estão no HTML._

```css
*{} 
```
```html
<h1>Sobre mim</h1>
<p> ... </p>

<!-- Todos esses elementos serão estilizados por conta do seletor global (*) -->
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

<!-- Estes elementos não serão estilizados, pois não foram colocados no CSS    -->
<ul> 
    <li> </li>
</ul>
```


</br>


#### __Id selector:__ _irá estilizar todas as tags que possuem este id._

> Coloque apenas um ID por elemento. 
```css
#my-contact 
```
```html
<h1>
```


</br>



#### __Class selector:__ _irá estilizar as tags que possuem esta class. Class são usadas para estilizar mais de uma tag_
```css
.nome_da_class{} 
```

#### __Inline:__ _irá estilizar somente tag onde o css foi aplicado_
```html
> <h1 style=""> </h1>
```


</br>
</br>

# "Poder" de cada selector
- No CSS, cada tipo de seletor representa um número. 
- Este número será respeitado quando o browser ler o código style sheet.
<ul type="square">
<li><a href="#seletores">Global selector</a>  equivale ao número: 0  </li>
<li><a href="#seletores">Tag selector</a>  equivale ao número: 1  </li>
<li><a href="#seletores">Class selector</a>  equivale ao número: 10  </li>
<li><a href="#seletores">Id selector</a>  equivale ao número: 100  </li>
<li><a href="#seletores">Inline selector</a>  equivale ao número: 1000 </li>
</ol>

</br> 

# Importância de saber o poder de cada um dos seletores
* Quando escrevemos um código, o mesmo é lido de cima para baixo, então se colocarmos: 
```css
h1{
    color: blue; 
    }
h1{
    color: red; 
    }
```

No final, o título da sua página será vermelho, pois o código foi lido de cima para baixo (em formato cascata).
E se colocarmos um seletor global por último?  
```css
h1{
    color: blue;
    }
*{
    color: red;
    }
```
Em teoria, a página mostraria o título vermelho, pois o código é lido de cima para baixo.. Mas há um porém!
O global selector representa o número 0, enquanto o tag selector representa o número 1.
O número um é maior do que zero, logo, a página irá mostrar o título azul. 

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