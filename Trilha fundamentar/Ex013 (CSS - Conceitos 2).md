# At Rules 
* Está relcionada ao comportamento do CSS 
* Começa com o sinal de "@" e em seguida o identificador e valor

</br>

# Exemplos
- @import &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _// Incluir um CSS externo, uma biblioteca.._ 
- @media  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
_// Regras condicionais para dispositivos (alterar o tamnho do conteúdos de acordo com o aparelho)_
- @font-face  &nbsp;&nbsp;&nbsp; _// Incluir fontes externas (de outros sites)_
- @keyframes  &nbsp;&nbsp;&nbsp; _// Animações de CSS_

</br>

# Shorhand 
* Junção de proprieties
* Resume seu código em CSS 
* Melhora a legibilidade de nosso código 

/* Background proprieties */ 
>background-color: black; 
>background-image: url(images/bg.gif); 
>background-repeat: no-repeat;
>background-position: left top; 

/* Background proprietis SHORTHAND */ 
>background: #000 url(images/bg.gif) no-repeat left top; 

_____________________________________________________________________________________________________
/* Font proprieties */ 
>font-style: italic; 
>font-weight: bold; 
>line-height: 1.2;
>font-size: .2em;
>font-family: Arial, sans-serif;

/* Font proprieties SHORTHAND */ 
>font: italic bold .8em/1.2 Arial, Sanserif;



# OBS ao usar shorthand: 
* Não irá considerar propriedades anteriores (é lido de cima para baixo). Digamos que você coloque: 
>font-weight: bold; 
>font: italic .8em/1.2 Arial, Sanserif;

No final, o valor "bold" será ignorado, pois ele não foi colocado no shrothand.
Então, neste caso, seria necessário colocar:
>font: italic bold .8em/1.2 Arial, Sanserif;


* Em geral, tanto faz a ordem das propriedades. Poderíamos colocar: 
>font: italic bold .8em/1.2 Arial, Sanserif;
                  ou 
>font: .8em/1.2 Arial, Sanserif bold italic;
Mas fique esperto caso haja muitas propriedades com valores semelhanters 