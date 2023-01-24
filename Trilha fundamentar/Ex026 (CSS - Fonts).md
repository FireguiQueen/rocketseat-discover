# Fonts

Tipografia transmite uma mensagem. 
Tipografia é o jeito que escrevemos algo, por exemplo.:

- Negrito
> serve para dar destaque a letras ou a palavras. Para darmos destaque a algum trecho do texto..

- Tamanho 
> serve para mostrarmos o que é referente ao que. Então geralmente um título terá seu tamanho grande, enquanto isso o parágrafo deste título terá um tamanho menor

- Estilo 
> Serve para dar um visual mais chamativo ao nosso texto, mudando o estilo da fonte, podemos deixar mais leve dependendo do contexto do texto. 

</br>
</br>

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
    weights mais especificos. Por exemplo, pode existir uma fonte que não possua o valor "bold", ou que possua o valor "bold", mas não há diferença entre o "bold" e o "bolder" dela. O Google fonts funciona justamente desta maneira, quando você selecionar uma fonte, ele vai pedir em qual weight você quer, caso você queira a maior variedade possível, você terá que pegar todos os links de cada weight */
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
* __Valores:__ _xx-small, x-small, medium, x-large, 1px, 1rem.._
* A unidade de medida mais utilizada é o pixel.

```css
p{
    font-size: 20px;
}
```

</br>
</br>
</br>


### Web fonts & local fonts

</br>

#### Web fonts 
São as fontes que veem da web, em grande parte das vezes você irá usar o google fonts.
* @import (NÃO RECOMENDO - IRÁ IR PARA O ARQUIVO .CSS E DEPOIS ELE SERÁ PUXADO PELO HTML)
* link (RECOMENDADO - IRÁ IR DIRETO NO ARQUIVO .HTML)

</br>
</br>

#### Local fonts 
São as fontes que já estão instaladas em nossa máquina
* @font-face 
```css
@font-face{
    font-family: de_um_nome_a_fonte_aqui
    src: url(onde/ela/se/encontra/na/sua/maquina)
}
```

</br>
</br>
</br>

## <code>font-variant </code>
* __Valores:__ _normal, small-caps, common-ligatures, no-common-ligatures_
Permite que você defina todas as variantes de fonte para uma fonte.
São pequenas variações que você pode fazer na sua fonte.
> NEM TODAS AS FONTES POSSUEM ESTA PROPRIEDADE 

## <code>font-stretch</code> 
* __Valores:__ _condensed, expanded, ultra-expanded, 50%, 100% e 150%._
Seleciona uma face normal, condensada ou expandida de uma fonte.
É como se fosse um "zoom" na fonte
> NEM TODAS AS FONTES POSSUEM ESTA PROPRIEDADE 

```css
p{
    font-stretch: condensed;
}

```

</br>
</br>
</br>

## <code>letter-spacing</code>
* __Valores:__ _1px, 1rem, 1em._
Apliaca um espaço entre as letras
```css
p{
    letter-spacing: 4px;
}
```

</br>

## <code>word-spacing</code>
* __Valores:__ _1px, 1rem, 1em._
Aplica um espaço entre as palavras
```css
p{
    word-spacing: 2em;
}
```

</br>
</br>
</br>

## <code>line-height</code>
* __Valores:__ _1px, 1rem, 1em, 1.5, 2.6_
Apliaca um espaço entre linhas, como se aumentassemos a distância entre linhas de um caderno
```css
p{
    line-height: 2.2;
}
```

</br>

## <code>text-transform</code>
* __Valores:__ _capitalize, uppercase, lowercase, none_
Aplica determinada transformação ao nosso elemento de texto
```css
p{
    /* Deixa tudo em maiúsculo */
    text-transform: uppercase;

    /* Deixa tudo em minúsculo */
    text-transform: lowercase;

    /* Inicial de cada palavra será com letra maiúscula */
    text-transform: capitalize;

    /* Tira todas as transformações feitas no texto */
    text-transform: none; 
}
```

</br>

## <code>text-decoration</code>
* __Valores:__ _underline, overline, line-through_ 
* __Estilos:__ _wavy, dashed, double.._
Aplica uma decoração ao texto, mais de uma decoração pode ser aplicada e também podemos adicionar um estilo a esta decoração

```css
p{
    /* Cria um sublinhado */
    text-decoration: underline;

    /* Cria um sublinhado em formato de onda */
    text-decoration: underline wavy;


    /* Cria um sublinhado e um "subilnhado" que fica acima do texto */
    text-decoration: underline overline;

    /* Cria um subilinhado e um "subilinhado" que fica ao meio do texto com um estilo de onda */
    text-decoration: underline line-through wavy;

}
