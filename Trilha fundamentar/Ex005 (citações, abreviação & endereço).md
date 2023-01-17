# Citações
    
- Servem para avisar que estamos pegando determinado conteúdo de outro lugar, de outra pessoa
- Utilizamos a tag <cite> (que também pode ser um atributo) para mostrar de onde pegamos o conteúdo 


## Blockquote & cite 
- Cria um bloco para citar um conteúdo relativamente grande que vem de outro lugar 
- Para se dizer de onde estamos pegando o conteúdo, devemos colocar o atributo "cite"       
```html
    <blockquote cite="https://SiteOndePegamosOTextoAbaixo">
        <p>
            O <strong><em>ELEMENTO HTML<em></strong> de tabela, foi muito utilizado durante anos para a construção de layouts. Mas bla bla bla..  
        </p> 
    </blockquote>
<!--------------------------------------------------------------------------------------------------------------------------------------->
    <!--Perceba que, usando a tag <cite> ou não, a página irá mostrar a mesma coisa.
        Porém, quando estamos nos referindo a um site ou a um conteúdo externo, é de extrema importância 
        usar a tag <cite>  -->
    <p> De acordo com a <a href="https://google.com"><cite>Google</cite></a>, o nosso planeta é grande</p>

--------------------------------------------------------------------------------------------------------------------------------------> 
    <!--A tag <q> serve para citações curtas que não precisam de parágrafos ou quebras de linha.
        O conteúdo dentro da tag receberá aspas duplas de maneira automática.      -->
    <p>De acordo com a famosa frase de <a href="https://pt.wikipedia.org/wiki/Albert_Einstein"><cite>Albert Einstein</cite> </a>:
    <q>O universo é grande, mas sua barriga é maior ainda.</q>, você é uma pessoa muito gorda. </p>     
 
--------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Abreviação:
    Utilize o <abbr>, e o atributo <title> para descrever o significado da sigla. -->
    <abbr title="Hyper Text Markup language">HTML</abbr> 

<!--------------------------------------------------------------------------------------------------------------------------------------->
    <!-- Endereço:
    Para especificar o outor da página, localização do mesmo ou localização da empresa dona do site  -->
    <address>
        <p> Criador da página: <br/>
            Guilherme P. </br>
            <strong>Volta Redonda, RJ </strong>
        </p>
    </address>



</body>
</html>