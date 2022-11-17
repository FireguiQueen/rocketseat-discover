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
> Exemplo: h1 {font-size: 16px; }

__Unidades__ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; __Nome__ </br>
cm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;centímetros </br> 
in&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inches </br>
px&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pixels </br>

* O mais utilizado é o pixel
* Não é recomendado usar em centímetros 
Ex: colocar uma botão esperando que a tela do seu cliente tenha tantos centímetros para visualizar o botão no tamanho que você deseja, então se o cliente tiver uma tela com poucos centímetros, o botão irá ficar pequeno.



## Distância relativa
* São relativas a algum outro valor
* Possui uma maior adaptação aos diferentes tamanhos de tela 

Unidade     Referente a
em          tamanho da fonte do pai (da tag pai)
rem         tamanho da fonte do elemento raiz (root/html)
vw          1% da viewport widght
vh          1% da viewport height


* em
> div { font-size: 18px }
> h1 { font-size: 1em}
Estamos dizendo que o tamanho do título irá se basear no tamanho padrão que foi colocado na div. 
<h1 style="font-size: 2em"> A tag h1 terá seu tamanho de 36px (pois são 2em, ou seja, 18px.2)
"Em" é sempre relativo ao valor da tag pai. Então, caso seja feito:
<body> <h1 style="font-size: 2em">Título </h1> </body>
A font size da tag H1 irá se basear no tamanho padrão de fonte da tag <body>, pois <body> é a tag pai.


* rem
> h1 { font-size: 1rem}
Estamos dizendo que o tamanho do título irá se basear no tamanho padrão do HTML, do Root.
O tamanho de fonte padrão do HTML é de 16px. 
Então se colocarmos: <h1 style="font-size: 1rem">, a tag <h1> terá seu tamanho de 16px. 
Caso queira alterar o valor padrão do HTML, pode ser usar:
> html {font-size: 20px} 
A partir da linha acima, todas as tags irão ter uma font-size de 20px como padrão 


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
