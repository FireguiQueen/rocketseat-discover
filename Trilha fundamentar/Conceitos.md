<div align="center">

## Comentários
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
</div>

</br>

_________________________________________________________________________________________________________________

## Tags
<p>As tags são usadas para informar ao navegador a estrutura do site. 
Ou seja: quando se escreve um código em HTML, as tags serão interpretadas pelo navegador, 
produzindo assim a estrutura e o conteúdo visual da página. </p>
Uma tag é composta por:
- Abertura da tag
- Conteúdo da tag
- Fechamento da tag

Tags mais utilizadas: 
<h1> Esta é uma tag para se colocar um título </h1>
<p> Esta é uma tag para se colocar um parágrafo </p>
<a href="www.google.com.br" title="isn't">Tag para se colocar um link</a> 
<!-- Perceba que na TAG tittle foi utilizado aspas simples como string, para o browser interpretar maneira correta, 
    pois o atributo TITLE já possuia as aspas duplas depois do sinal de igual
    Sempre utilize aspas duplas nos atributos.. Title="" -->

Há tags que não possuem fechamento (tags self-closing): 
<input type="">
<img scr="link da imagem / diretório" alt=""> 
_________________________________________________________________________________________________________________________________________________________
Atributos globais mais utilizados: 

- Id: classficar e alterar um conteúdo através do CSS/JS. 
<p id="p1">Parágrafo 1</p>
<p id="p2">Parágrafo 2</p>

- Class: classficar e alterar dois ou mais conteúdos através do CSS/JS.
<h1 class="título1">Primeiro título</h1> 
<h2 class="titulo2">Segundo título</h2>

- Hidden: esconder por completa uma tag
<h1 hidden="true">Este título não irá aparecer pois está com a tag hidden :( </h1>

- Style: colocar estilo em um conteúdo (estilo inline)
<h1 style="color:red; font-size: small; "> Título vermelho e pequeno</h1>

- Tabindex: após o usuário apertar tab, será levado para o tabindex 1
<h1 tabindex="1"> Usuário será levado para este título após pressionar tab</h1>

- Tittle: definir um título a um elemento (quando o mouse ficar em cima)
<h1 title="primeiro título"> Não coloque o mouse neste título</h1>   

- Contenteditable: permite o usuário editar um conteúdo
<h1 contenteditable="true"> Edite o título </h1> 

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