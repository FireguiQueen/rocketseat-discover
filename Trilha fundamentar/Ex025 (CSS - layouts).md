# Layouts

- Fables _(era o único método de se construir layouts bem antigamente, já mais utilize table com este objetivo)_
- Floats _(um método também antigo, e raramente utilizado hoje em dia, fazia com que os elementos flutuassem para um lado)_
- Flexbox _(método atual junto ao grid. Flexbox trabalha com a ideia de containers flexíveis, e geralmente é utilizado para posicionar elementos dentro de um elemento)_
- Grid _(método atual junto ao flexbox. Grid trabalha com a ideia de containers que se posicionam através de "grades", e geralmente é utilizado para posicionar elementos dentro do body)_


</br>
</br>
</br>

## Position 
Controla onde, na página, o elemento irá ficar de acordo com as direções (top, right, bottom, left).
O position altera o fluxo normal dos elementos (fluxo normal seria um embaixo do outro da mesma maneira que vemos quando escrevemos o código em HTML). 

- __Name:__ _position_
- __Value:__ _static | relative | absolute | fixed_ 


### Static
Static é o valor padrão, significa que os elementos irão seguir o fluxo normal.
Como já foi dito acima, o fluxo normal nada mais é do que a posição normal dos elementos.
Em outras palavras, se no HTML você colocar:
```html
<h1>Peixe boi</h1>
<h2>baba boi</h2>
```
significa que esta ordem será respeitada, e o elemento <code>&lt;h2&gt;</code> estará embaixo do 
<code>&lt;h1&gt;</code>.
