<span align="center"> 

# Comentários 

</span>

```html
<!-- 
    Isto é um comentário em HTML.
    Posso colocar quantas linhas eu quiser.
-->


<script> 
    // Isto é um comentário em JavaScript, porém, só funciona utilizando uma única linha.
    
    /* 
     Isto é um comentário em JavaScript/CSS onde posso colocar diversas linhas..
     Tipo assim!
     Bacana, né?
    */ 
</script>
```

</br>

_________________________________________________________________________________________________________________
</br>
<span align="center">

# Tags

<p>As tags são usadas para informar ao navegador a estrutura do site. 
Ou seja: quando se escreve um código em HTML, as tags serão interpretadas pelo navegador, 
produzindo assim a estrutura e o conteúdo visual da página. </p>
</span>

</br>

## Uma tag é composta por
* Abertura da tag
* Conteúdo da tag
* Fechamento da tag
```html
<h1> Olá, mundo! </h1>
<!-- 
    Abertura da tag: <h1>
    Conteúdo: "Olá mundo"
    Fechamento: </h1>
-->
```

</br>

> Porém, vale lembrar que existem tags que não possuem fechamento, elas se chamam "tags self-closing", exemplos:
```html
<img title="" alt="">
<input type="">
``` 


## Tags mais utilizadas
```html
<h1> Utiliza-se colocar um título </h1>
<p> Utiliza-se colocar um parágrafo </p>
<abbr title="significado da abreviação"> Uma abreviação </abrr>

<a href="www.google.com.br" title="isn't"> Utiliza-se para colocar um link </a> 

<input type="button/text..">
<img scr="link da imagem / diretório" alt=""> 
```


## Atributos globais 
<ul type="square">

<li>

__Id:__ _classficar e alterar UM conteúdo através do CSS/JS._
</li>

```html
<p id="p1">Parágrafo 1</p>
<p id="p2">Parágrafo 2</p>
```
</br>
<li> 

__Class:__ _classficar e alterar DOIS ou MAIS conteúdos através do CSS/JS._
</li>

```html
<h1 class="título">Primeiro título</h1> 
<h2 class="título">Segundo título</h2>
```
</br>
<li>

__Hidden:__ _esconder por completa uma tag_
</li>

```html
<h1 hidden="true">Este título não irá aparecer pois está com o atributo hidden :( </h1>
```
</br>
<li>

__Style:__ _colocar estilo em um conteúdo (inline)_
```html
</li>
<h1 style="color:red; font-size: small; "> Título vermelho e pequeno</h1>
```
</br>
<li>

__Tabindex:__ _após o usuário apertar tab, será levado para o tabindex 1_
</li>

```html
<h1 tabindex="1"> Usuário será levado para este título após pressionar tab</h1>
<p tabindex="2"> Usuário será levado para este parágrafo após pressionar tab novamente</p>
```
</br>
<li>

__Tittle:__ _definir um título a um elemento (quando o mouse ficar em cima)_
</li>

```html
<h1 title="primeiro título"> Não coloque o mouse neste título</h1>   
```
</br>
</li>

__Contenteditable:__ _permite o usuário editar um conteúdo dentro da página_
</li>

```html
<h1 contenteditable="true"> Edite o título </h1> 
```
</br>
</li>

- Em: deixar um conteúdo em itálico
<p> Não <em>leia</em> este parágrafo.</p>

- Br: quebrar uma linha (não utilize para pular linhas em seu site, utilize do CSS)
<p> Isto é um texto.. <br> Isto é outro texto</p>

_________________________________________________________________________________________________________________________________________________________
Hierarquia: 
Basicamente, cada tag acima da outra é o pai da mesma.. Por exemplo:
<body>
    <div> 
        <h1>Isto é um título</h1>
        <p>Isto é um parágrafo.</p>
    </div>
</body>
A tag DIV é filha da tag BODY, e a tag DIV é pai da tag H1 e da tag P.
_________________________________________________________________________________________________________________________________________________________
Colocar caracteres reservados em tags:
Espaço(  ): &nbsp; 
Sinal de maior (>): &gt; 
Sinal de menor (<): &lt; 
Sinal do E (&): &amp;
Aspas duplas ("): &quot; 
Aspas simples ('): &apos; 
... Há diversos outros caracteres, para saber mais, acesse:
https://www.homehost.com.br/blog/tutoriais/caracteres-especiais-acentos-html/
https://html.com/character-codes/