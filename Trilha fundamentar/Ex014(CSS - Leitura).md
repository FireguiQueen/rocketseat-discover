# Tipos de selector:  

- Global selector: irá estilizar de maneira global, ou seja, todas as tags que estão no HTML.
```css
*{} 
```
- Tag selector: irá estilizar a tag colocada 
```css
h1{} ; p{} ; h2{}..  
```

- Id selector: irá estilizar todas as tags que possuem este id. Geralmente é utilizado uma tag por ID.
```css
#nome_do_id{} 
```


- Class selector: irá estilizar as tags que possuem esta class. Class são usadas para estilizar mais de uma tag.
```css
.nome_da_class{} 
```

# "Poder" de cada selector: 
- No CSS, cada tipo de seletor representa um número. 
- Este número será respeitado quando o browser ler o código style sheet.

```cs
Global selector equivale ao número: 0  
> *{}

Tag selector equivale ao número: 1
> h1{} ; p{}..

Class selector equivale ao número: 10 
> .nome_da_class{}

Id selector equivale ao número: 100 
> #nome_da_id{}

Inline selector equivale ao número: 1000 
> <h1 style=""> </h1>
``` 

# Sabemos a qual número cada tipo de seletor representa, mas e agora? 
* Quando escrevemos um código, o mesmo é lido de cima para baixo, então se colocarmos: 
> h1 {color: blue; }
> h1 {color: red; }

No final, o título da sua página será vermelho, pois o código foi lido de cima para baixo (em formato cascata).
E se colocarmos um seletor global por último?  
> h1{color: blue;}
> *{color: red;}

Em teoria, a página mostraria o título vermelho, pois o código é lido de cima para baixo.. Mas há um porém..
O global selector representa o número 0, enquanto o tag selector representa o número 1.
O número um é maior do que zero, logo, a página irá mostrar o título azul. 


# Há um jeito de quebrar isto? 
* Sim, usando !important 

>h1{color: blue;}
>*{color: red !important; }

Mesmo o h1 sendo mais forte do que o global selector, demos o !important ao global selector, logo, 
toda essa regra de númeração será quebrada. 
Porém, isto não deve ser utilizado em seu CSS, não é uma boa prática.
Utilize !imporant apenas a bibliotecas CSS cuja você não consegue de jeito nenhum fazer estilizações da forma desejada.