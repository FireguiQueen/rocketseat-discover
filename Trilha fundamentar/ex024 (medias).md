# Media


## <code>Video</code>
* Elemento para vídeos que precisam ser baixados, renderizados.. Utiliza-se vídeos que já estão no repositório. 


### Atributos 
* controls (permite o usuário "mexer" no vídeo.: som, pausa, minuto do vídeo..)
* src (diretório onde se encontra o vídeo)
* autoplay (fará com que o vídeo comece automaticamente -- nem todos os browsers aceitam isto, e quando aceitam, geralmente o vídeo vem mutado -- como solução você pode fazer um botão de "unmute" utilizando javascript )
* muted (se "true" o vídeo irá começar mutado)
* type (importante para dizer qual o tipo de arquivo.. ex: ".mp4")

### Observações

* Em alguns raros casos, o cliente não vai conseguir rodar o vídeo por conta do seu browser (provavelmente antigo). Por conta disto, é importante colocar dentro da tag <code>&gt;video&lt;</code> uma tag <code>&gt;p&lt;</code> ou qualquer outra dando um fallback content. Ou seja dar um motivo, por exemplo.:
```html
<video src="./videos/pentakill.mp4" type="video/mp4">
    <p>Este browser não suporta vídeo </p> <!-- Tag que irá aparecer caso o vídeo não seja carregado-->
</video> 
```

</br> 

## <code>Source</code>

* src 
* type


