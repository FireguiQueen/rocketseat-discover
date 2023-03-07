# Box model
- Fundamental para fazer layouts bonitos e funcionais para a página
- Maior facilidade para aplicar o CSS 
- A maioria dos elementos em HTML fazem parte deste modelo.

## O que é? 
- Uma caixa retangular. 
- Essa caixa possui propriedades de uma caixa 2d.
- Cada elemento na sua página será considerado uma caixa. 

## Propriedades que podem alterar o tamanho da sua caixa:   
- border   
- padding  
- height
- width

</br>

# Box-sizing 
Como será calculado o tamanho final da caixa? 
```css
div{ 
    width: 100px;              /* Colocando 100px de largura na div                        */
    border: 1px solid black;     /* Colocando uma borda vermelha de 1px na div               */ 
    margin: 10px;              /* Colocando um espaçamento externo na div                  */ 
    padding-left: 10px;        /* Colocando um espaçamento interno no lado esquerdo na div */ 
}
```

* Colocamos que a div terá 100px de largura, porém, o total não será mais de 100px de largura
* Pois o padding somará 20px para o lado esquerdo. No final, a largua da div será de 120px     

</br>

### Para respeitarmos a largura de 100px, iremos adicionar um valor ao "box model":
#### -> box-sizing: border-box;

* Esta propriety value fará com que o preenchimento se baseie na borda, não no conteúdo da div.                          
* Assim o valor inicial de 100px de largura será respeitado.                                                      
* Pois não iremos somar 10px do lado esquerdo do conteúdo da div, e sim pegar a borda dessa div e acrescentar 10px
* Caso o preenchimento se baseie no conteúdo, ele irá localizar o conteúdo e adicionar 10px ao lado esquerdo dele 


![image](https://user-images.githubusercontent.com/98475125/205141732-15b9af3c-2c88-4031-90d7-c05215288b1b.png)

