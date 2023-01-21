# Media


## <code>Video</code>
* Elemento para vídeos que precisam ser baixados, renderizados.. Utiliza-se vídeos que já estão no repositório. 


### Atributos
* loop ()
* width (define a largura do vídeo)
* height (define a altura do vídeo) 
* controls (permite o usuário "mexer" no vídeo.: som, pausa, minuto do vídeo..)
* src (diretório onde se encontra o vídeo. Isto é opcional; ao invés disso você pode usar o elemento <code>&lt;source&gt;</code> dentro do bloco do vídeo para especificar o vídeo a ser incorporado .)
* autoplay (fará com que o vídeo comece automaticamente -- nem todos os browsers aceitam isto, e quando aceitam, geralmente o vídeo vem mutado -- como solução você pode fazer um botão de "unmute" utilizando javascript )
* muted (se "true" o vídeo irá começar mutado)
* type (importante para dizer qual o tipo de arquivo.. ex: ".mp4")

### Observações

* Em alguns raros casos, o cliente não vai conseguir rodar o vídeo por conta do seu browser (provavelmente antigo). Por conta disto, é importante colocar dentro da tag <code>&lt;video&gt;</code> uma tag <code>&lt;p&gt;</code> ou qualquer outra dando um fallback content. Ou seja dar um motivo, por exemplo.:
```html
<video src="./videos/pentakill.mp4" type="video/mp4">
    <p>Este browser não suporta vídeo </p> <!-- Tag que irá aparecer caso o vídeo não seja carregado-->
</video> 
```

</br> 

## <code>Source</code>

* Possui todos os atributos da tag <code>&lt;video&gt;</code>
* É quase igual utilizar da meneira abaixo.:

#### Só podemos colocar um vídeo
```html
<video src="./videos/pentakill.mp4" type="video/mp4"> 

</video> 
```

#### Podemos colocar infinitos vídeos
```html
<video type="video/mp4"> 
    <source src="./videos/Flor.mp4" muted="true" autoplay>
    <source src="./videos/Rosa.mp4">
    <source src="./videos/Flor.mp4" controls="true">


</video> 
```