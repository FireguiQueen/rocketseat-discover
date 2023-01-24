# Fonts

Tipografia transmite uma mensagem. 
Tipografia é o jeito que escrevemos algo, por exemplo.:

- Negrito
> serve para dar destaque a letras ou a palavras. Para darmos destaque a algum trecho do texto..

- Tamanho 
> serve para mostrarmos o que é referente ao que. Então geralmente um título terá seu tamanho grande, enquanto isso o parágrafo deste título terá um tamanho menor

- Estilo 
> Serve para dar um visual mais chamativo ao nosso texto, mudando o estilo da fonte, podemos deixar mais leve dependendo do contexto do texto. 


## Propriedades mais utilizadas

### <code>font-family </code>
* __Valores:__ _Arial, Verdana, 'Courier  New'.._
Define o tipo de fonte que será utilizada, ou seja, como será o estilo de escrita.
Esta propriedade incluir "fallback", ou seja, caso não consiga utilizar da primeira fonte, ela irá colocar outra fonte que você vai passar como valor.
Sempre que a fonte possuir espaço entre as letras, ela irá ficar entre aspas (" "), por isso algumas fontes não usam aspas, pois elas não precisam (porque possuem apenas uma palavra).
```css
p{
    font-family: 'Time News Roman', Times, serif;
    /* Caso a fonte "Time News Roman" não consiga ser colocada, a fonte "times" irá aparecer, caso também não apareça, a fonte "serif" irá aparecer. */

    /* Serif: Uma fonte "serificada" é aquela fonte que possui "dobras" (como se fossem um suporte horizontal) quando se começa uma letra, uma fonte "sans-serif" é uma fonte sem essa dobra, sem este "suporte horizontal" */ 
}
```

</br>
</br>
</br>

### <code>font-weight</code>
* __Valores:__ _bolder, bold, light, lightner, 500, 400.._
* Define o "peso" da fonte..
* Podemos usar tanto valor númerico quanto palavras chaves. As palavras chaves podem ser representadas em formatos númericos.. Bold = 700, light = 300, normal = 400 (por padrão vem assim) 
Dependendo da família da fonte, a gente não consegue colocar determinado "peso" para ela. Por exemplo.:

```css
p{
    font-family: 'Time News Roman', Times, serif;
    font-weight: 300;

    /* OU -- */ 
    font-family: 'Time News Roman', Times, serif;
    font-weight: 100;

    /* Nesta fonte (times new roman), independente do weight que você colocar (entre 300 ou 100), ela vai mantar a mesma espessura. Isso nos mostra que, algumas fontes trabalham com 
    weights mais especificos. Por exemplo, pode existir uma fonte que não possua o valor "bold", ou que possua o valor "bold", mas não há diferença entre o "bold" e o "bolder" dela. */
}
```

</br>
</br>
</br>

### <code>font-style</code> 
* __Valores:__ _normal, Italic, oblique_ 
* Define o estilo da fonte, por padrão é "normal", Italic é aquela letra mais deitada e "oblique" é extremamente parecida com a "italic". 

```css
p{
    font-style: italic; 
}
```

</br>
</br>
</br>

### <code>font-size</code>