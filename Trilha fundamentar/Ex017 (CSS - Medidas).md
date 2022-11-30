# Valores e unidades de medida
* Cada propriedade (propriety) possui seus valores (values). 
* "Values" também podem ser chamados de "data types"


### __Tipos numéricos__ </br>
```<integer>``` número inteiro como: -10 ou 223 </br>
```<number>``` número decimal como: -2.4, 64 ou 0.234 </br> 
```<dimension>``` é um número com uma unidade de medida junto: 90deg, 2s, 8px (deg, px, s..) </br>
```<percentage>``` representa uma fração de outro número: 50% 

</br>

### __Unidades comuns__ </br>
```<length>``` é um dos mais usados no CSS e representa um valor de distância: px, em, vw </br>
```<angle>``` representa uma unidade de ângulo: deg, rad, turn </br>
```<time>``` representa uma unidade do tempo: s, ms </br>
```<resolution>``` representa resoluções para dispositivos: dpi </br>

_________________________________________________________________________________________________________________
# Distância Relativa x Absoluta

## Distância absoluta
* São fixas, não alteram seu valor.
```css
h1{
 font-size: 16px; 
}
```
<table>
	<thead>
		<tr>
			<th>Unidades</th> 
			<th>Nome</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>cm</td>
			<td>centímetros</td>
		</tr>
		<tr>
			<td>in</td>
			<td>inches</td>
		</tr>
		<tr>
			<td>px</td>
			<td>pixels</td>
		</tr>
	</tbody>
</table>

> O mais utilizado é o pixel </br>
> Não é recomendado usar em centímetros. Imagine colocar uma botão esperando que a tela do seu cliente tenha tantos centímetros para visualizar o botão no tamanho que você deseja, o conteúdo do seu site não será adaptável.

</br>
</br>

## Distância relativa
* São relativas a algum outro valor
* Possui uma maior adaptação aos diferentes tamanhos de tela 
<table>
	<thead>
		<tr>
			<th>Unidade</th>
			<th>Refarente a</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Em</td>
			<td>tamanho da fonte do pai (da tag pai)</td>
		</tr>
		<tr>
			<td>Rem</td>
			<td>tamanho da fonte do elemento raiz (root/html)</td>
		</tr>
		<tr>
			<td>Vw</td>
			<td>1% da viewport widght (largura da página que está sendo exibida, ou seja, 1% dessa largura)</td>
		</tr>
		<tr>
			<td>Vh</td>
			<td>1% da viewport height (altura da página que está sendo exibida, ou seja, 1% dessa altura)</td>
		</tr>
	</tbody>
</table>

</br>

## Unidade: em
- A unidade "em" é sempre relativo ao valores que a tag pai possui. 

#### Consideremos que o h1 está dentro de uma div
```css
div{ 
 font-size: 18px; 
}

h1{
 font-size: 1em;
 /*  O tamanho do título irá se basear no tamanho padrão que foi colocado na div. */ 
}

h1{ 
 font-size: 2em;
 /*  A tag h1 terá seu tamanho de 36px (pois são 2em, ou seja, a fonte-size padrão 18 vezes dois) */
}
```
</br>

#### Consideremos que o h1 está dentro da tag body
```html
<body> 
 <h1 style="font-size: 2em;">Título</h1> 
 <!-- A font-size da tag <h1> irá se basear no tamanho de fonte da tag <body>, pois <body> é a tag pai -->
 <!-- Quando não atribuimos nenhum valor a tag body, o padrão de fonte é de 18px -->
</body>
```
____________________________________________________________________________________________

</br>

## Unidade: rem
- A unidade "rem" faz com que o tamanho do conteúdo se baseie no tamanho padrão do HTML (root).
- O tamanho de fonte padrão do HTML é de 16px. 

```css
h1{ 
 font-size: 1rem;
 /* A tag <h1> terá seu tamanho de 16px pois é o valor padrão do HTML. */
}
```

</br>

#### Caso queira alterar o valor padrão do HTML
```css
html{
 font-size: 20px;
 /* Agora a <h1> terá 20px na propriedade font-size, pois o valor padrão se tornou 20px */
} 
```


* vw & vh 
Viewport é a parte branca do nosso site, é a parte onde vemos a página web.
Podemos usar essas unidades para alterar o tamanho das tags de acordo com o tamanho da viewport..
Seja na altura ou na largura.

______________________________________________________________________________________________________________
# Porcentagem 
* A porcentagem é tratada da mesma maneira que a unidade "em" explicada acima
* A porcentagem será relativa a algum valor

- Exemplo 1: 
> body {font-size: 50%;} 
Estamos dizendo que o tamanho da fonte será de 50%, mas 50% de qual valor? 
O valor fixo da fonte no HTML é de 16px, então, 50% de 16px são 8px. 

- Exemplo 2:
<ul> <!--Lista um -->
	<li>One</li>
	<li>Two</li>
	<li>Three
		<ul> <!-- Lista dois -->
			<li>Three A</li>
			<li>Three B</li>
			<ul> <!-- Lista três -->
				<li>Three B 2</li>
			</ul>
		</ul>
	</li>
</ul>

> li {font-size: 80%; }
Cada tag <li> será 80% de outra tag
Então a primeira <li> será 80% de 16px = 12px
A próxima <li> será 80% de 12.8px = 9.6px
A próxima <li> será 80% de 9.6px = 7px
