# Citações
    
- Servem para avisar que estamos pegando determinado conteúdo de outro lugar, de outra pessoa
- Utilizamos a tag <cite> (que também pode ser um atributo) para mostrar de onde pegamos o conteúdo 

### Notas importantes

> Utilizada para citar.: </br>
> Um trabalho criativo deve conter a citação de um livro, um documento,um ensaio,um poema,um filme,um programa de televisão,um video game,uma escultura,uma pintura,uma produção cinematográfica,um jogo,uma opera,um musical,uma exibição,um relatório de um caso legal,um programa de computador,um website,uma página da web,um post de um blog ou comentário,um post em um forum ou um comentário no mesmo,um tweet,uma obra ou discurso,etc.

</br>

## <code>Blockquote</code> & cite 
- Cria um bloco para citar um conteúdo relativamente grande que vem de outro lugar 
- Para se dizer de onde estamos pegando o conteúdo, devemos colocar o atributo "cite"       
```html
    <blockquote cite="https://SiteOndePegamosOTextoAbaixo">
        <p>
            O <strong><em>ELEMENTO HTML<em></strong> de tabela, foi muito utilizado durante anos para a construção de layouts. Mas bla bla bla..  
        </p> 
    </blockquote>
```

## <code>Cite</code>
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

## <code>&lt;q&gt;</code> & cite 
- A tag <q> serve para citações curtas que não precisam de parágrafos ou quebras de linha
- O conteúdo dentro da tag receberá aspas duplas de maneira automática por conta da tag <q>
- Utilize o atributo cite para dizer de onde a frase veio

```html
    <p>
        <q cite="Nikolas Tesla">Se você quiser descobrir os segredos do Universo, pense em termos de energia, frequência e vibração.” “Não creio que haja uma emoção mais intensa para um inventor do que ver suas criações funcionando. Essas emoções fazem você esquecer de comer, de dormir, de tudo.” </q>
    </p>
```

</br>

____________________________________________________________

# Abreviação
- Utilize o <abbr> para fazer uma abreviação
- Utilize o atributo `title=" "` para descrever o significado desta abreviação

```html
    <abbr title="Hyper Text Markup language">HTML</abbr> 
```

</br>

____________________________________________________________

# Endereço
- Para especificar o outor da página, a localização do mesmo

### Notas importantes
>A informação de contato fornecida por um conteúdo do elemento <address> pode tomar qualquer forma que é apropriada para o contexto, e pode incluir qualquer tipo de informação de contato necessária, como endereço físico, URL, email, telefone, mídia social, coordenadas geográficas, por aí vai. Deve incluir o nome da pessoa, grupo, ou organização para qual as informações de contato se referem.

><address> pode ser usado em uma variedade de contextos, como fornecer informação de contato de uma empresa no header da página, ou indicar o autor de um artigo incluindo um elemento <address> dentro do <article>.

```html
    <address>
        <p> 
            Criador da página: <br/>
            Guilherme P. </br>
            <strong>Volta Redonda, RJ </strong>
        </p>
    </address>
```