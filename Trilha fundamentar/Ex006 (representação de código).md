# Representação de código

## <code>code</code> 
- Para representar um pequeno fragmento de código 
- Altera a cor e exibe o fragmento de código em uma fonte monoespaçada

```html
    <p> No HTML, o <code>&lt;p&gt;</code> é utilizado para fazer parágrafos </p> <!-- Note que foi necessário o uso de Entity, saiba mais aqui.: https://developer.mozilla.org/en-US/docs/Glossary/Entity> -->
    <p> No javascript, o <code>console.log() é utilizado para escrever no console </p>
```

</br>

## <code>&lt;pre&gt;</code>
- É a tag utilizada para representar texto pré-formatado.
- Um texto dentro desse elemento é tipicamente exibido em uma fonte não proporcional da mesma maneira em que o texto original foi disposto no arquivo. 
- Espaços em branco são mantidos no texto da mesma forma em que este foi digitado.
- Em si, não é utilizado para representar códigos
- Utiliza-se quando precisa representar muitas linhas de código, mas para isto é necessário usar 
- O elemento &lt;code&gt; por si só representa somente uma única senteça ou linha de código
- Mantem a formatação feita no editor de código (identações e espaços)


Para colocarmos as tags HTML dentro de dessa tag, podemos utilizar do &..; 
Exemplo:
<pre> 
    <code> &lt;pre&gt; &lt;&sol;pre&gt;</code> 
</pre> 

Veja mais caracteres reservados em: 
https://html.com/character-codes/ 

