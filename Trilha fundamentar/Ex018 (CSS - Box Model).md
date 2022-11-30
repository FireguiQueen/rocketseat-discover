# Box model
- Fundamental para fazer layouts bonitos e funcionais para a página
- Maior facilidade para aplicar o CSS 
- A maioria dos elementos em HTML fazem parte deste modelo.

## O que é? 
* Uma caixa retangular. 
- Essa caixa possui propriedades de uma caixa 2d.
- Cada elemento na sua página será considerado uma caixa. 

Propriedades que podem alterar o tamanho da sua caixa: 
weidht
height   
border   
padding  
margin  


# Box-sizing 
Como será calculado o tamanho final da caixa? 
```css
div{ 
    height: 100px;             /* Colocando 100px de altura na div */ 
    width: 100px;              /* Colocando 100px de largura na div */
    border: 1px solid red;     /* Colocando uma borda vermelha de 1px na div */ 
    margin: 10px;              /* Colocando um espaçamento externo na div */ 
    padding: 0px 0px 0px 20px; /* Colocando um espaçamento interno no lado esquerdo na div */ 
    
    / O padding irá fazer com que a div cresça 20px para o lado esquerdo.
    / Colocamos que a <div> terá 100px de largura, porém, o total não será mais de 100px de largura. 
    / Pois o padding somará 20px para o lado esquerdo. No final, a largua da <div> será de 120px, por conta do padding. 

    >> Para respeitarmos a largura de 100px e não alterarmos ela, iremos adicionar uma outra propriedade.;
    box-sizing: border-box;

    <:> 
    Esta propriety value fará com que o preenchimento se baseie na borda, não no conteúdo.
    Assim o valor inicial de 100px de largura será respeitado.
    Pois não iremos somar 20px do lado esquerdo do conteúdo da div, e sim pegar a borda dessa div e diminuir 20px
    
                         box-sizing: border-box                
                            |-------------------|
                            |                   |
                            | (20px) oi         |
                            |___________________|


                         box-sizing: content-box 
                        |-----------------------|
                        |                       |
                        | (20px) oi             |
                        |_______________________|
