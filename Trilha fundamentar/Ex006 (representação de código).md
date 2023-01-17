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

## <code>&lt;pre&gt;</code>
- É a tag utilizada para representar texto pré-formatado.
- Um texto dentro desse elemento é tipicamente exibido em uma fonte não proporcional da mesma maneira em que o texto original foi disposto no arquivo. 
- Espaços em branco são mantidos no texto da mesma forma em que este foi digitado.
- Quando for necessário uma representação de muitas linhas de código, utiliza-se &lt;pre&gt; e &lt;code&gt; juntas
- Mantem a formatação feita no editor de código (identações e espaços)


Para colocarmos as tags HTML dentro de dessa tag, podemos utilizar do &..; 
Exemplo:
<pre> 
    <code> &lt;pre&gt; &lt;&sol;pre&gt;</code> 
</pre> 

Veja mais caracteres reservados em: 
https://html.com/character-codes/ 

