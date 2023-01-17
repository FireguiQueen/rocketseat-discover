# Representação de código

## <code>code</code> 
- Para representar um pequeno fragmento de código 
- Altera a cor e exibe o fragmento de código em uma fonte monoespaçada
- O elemento &lt;code&gt; por si só representa somente uma única senteça ou linha de código

```html
    <p> No HTML, o <code>&lt;p&gt;</code> é utilizado para fazer parágrafos </p> <!-- Note que foi necessário o uso de Entity, saiba mais aqui.: https://developer.mozilla.org/en-US/docs/Glossary/Entity> -->
    <p> No javascript, o <code>console.log()</code> é utilizado para escrever no console </p>
```

</br>

______________________________________________________________________________

## <code>&lt;pre&gt;</code>
- É a tag utilizada para representar texto pré-formatado.
- Um texto dentro desse elemento é tipicamente exibido em uma fonte não proporcional da mesma maneira em que o texto original foi disposto no arquivo. 
- Espaços em branco no editor de código são mantidos no texto
- Quando for necessário uma representação de muitas linhas de código, utiliza-se as duas tags juntas &lt;pre&gt; e &lt;code&gt;

```html
    <p> Uma simples function arrow e anonymous function em Javascript.:
        <pre> 
            <code>
                (nome => console.log(nome)) ('Flora');
                const sum = (a,b) => console.log(a + b);
                sum(4, 5);
            </code>
        </pre>
    </p>
```

</br>

### Entity 
Uma "entity" HTML é um pedaço de texto ("string") que começa com um e comercial (&) e termina com um ponto-e-vírgula (;). As "entities" são frequentemente usadas para exibir caracteres reservados (que de outra forma seriam interpretados como código HTML) e caracteres invisíveis (como espaços não separáveis). Você também pode usá-los no lugar de outros caracteres que são difíceis de digitar com um teclado padrão.

>Será interpretado como código.:
```html
<p>
    A tag <p> é uma tag utilizada para a criação de parágrafos 
</p>
```

>Não será interpretada como código.:
```html
<p>
    A tag &lt;p&gt; é uma tag utilizada para a criação de parágrafos

    <!-- A entity "&lt;" é responsável por criar o sinal de menor "<"                                 -->
    <!-- A entity "&gt;" é responsável por criar o sinal de maior ">"                                 -->
    <!-- Em situações como está é recomendado usar a tag "code": <code> &lt; p &gt; </code>           -->
</p>
```


