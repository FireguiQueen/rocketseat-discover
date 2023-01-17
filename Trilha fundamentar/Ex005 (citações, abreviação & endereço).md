# Citações
    
- Servem para avisar que estamos pegando determinado conteúdo de outro lugar, de outra pessoa
- Utilizamos a tag <cite> (que também pode ser um atributo) para mostrar de onde pegamos o conteúdo 

</br>

## Blockquote & cite 
- Cria um bloco para citar um conteúdo relativamente grande que vem de outro lugar 
- Para se dizer de onde estamos pegando o conteúdo, devemos colocar o atributo "cite"       
```html
    <blockquote cite="https://SiteOndePegamosOTextoAbaixo">
        <p>
            O <strong><em>ELEMENTO HTML<em></strong> de tabela, foi muito utilizado durante anos para a construção de layouts. Mas bla bla bla..  
        </p> 
    </blockquote>
```

## Cite
- Usando a tag <cite> ou não, a página irá mostrar a mesma coisa
- Utilize-a sempre que for citar uma pessoa/empresa em seu texto
```html
    <p> 
        De acordo com a <a href="https://google.com"><cite>Google</cite></a>, o nosso planeta é grande
    </p>

    <p>
        De acordo com a famosa frase de ><cite>Albert Einstein</cite>:
        <q>O universo é grande, mas sua barriga é maior ainda.</q>, você é uma pessoa muito gorda. 
    </p>  

```

## <code>&lt;q&gt; & cite 
- A tag <q> serve para citações curtas que não precisam de parágrafos ou quebras de linha
- O conteúdo dentro da tag receberá aspas duplas de maneira automática por conta da tag <q>
- Utilize o atributo cite para dizer de onde a frase veio

```html
    <p>
        <q cite="Nikolas Tesla">Se você quiser descobrir os segredos do Universo, pense em termos de energia, frequência e vibração.” “Não creio que haja uma emoção mais intensa para um inventor do que ver suas criações funcionando. Essas emoções fazem você esquecer de comer, de dormir, de tudo.” </q>
    </p>

   
 
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