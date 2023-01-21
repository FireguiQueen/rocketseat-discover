# Media


## <code>Video</code>
* Elemento para vídeos que precisam ser baixados, renderizados.. Utiliza-se vídeos que já estão no repositório. 


### Atributos
* Poster (que imagem/gif será mostrado enquanto o vídeo não carrega)
* loop (faz com que seu vídeo se repita após acabar)
* width (define a largura do vídeo)
* height (define a altura do vídeo) 
* controls (permite o usuário "mexer" no vídeo.: som, pausa, minuto do vídeo..)
* src (diretório onde se encontra o vídeo. Isto é opcional; ao invés disso você pode usar o elemento <code>&lt;source&gt;</code> dentro do bloco do vídeo para especificar o vídeo a ser incorporado)
* autoplay (fará com que o vídeo comece automaticamente. Quase nenhum browser aceita isto, e caso aceite, você provavelmente terá que fazer uso da tag "muted" junto a "autoplay". Para conseguir fazer o vídeo ser desmutado, adicionar o atributo "controls" ou fazer um botão utilizando JS que desmute o vídeo.
* muted (vídeo irá ficar mutado; o usuário pode desmutar através do controls ou de um botão de unmute feito pelo javascript)
* type (importante para dizer qual o tipo de arquivo.. Exemplo: "video/mp4")
* preload (none: indica que o vídeo não deve ser pré-carregado (não carrega nada sobre o vídeo) ; metadata: indica o browser pegar dados sobre o vídeo, por exemplo sua duração ; auto: indica que o usuário necessita ter prioridade; em outros termos isso indicou que, se necessário, o vídeo inteiro pode ser baixado, mesmo que não seja esperado a reprodução)

### Observações

* Em alguns raros casos, o cliente não vai conseguir rodar o vídeo por conta do seu browser (provavelmente antigo). Por conta disto, é importante colocar dentro da tag <code>&lt;video&gt;</code> uma tag <code>&lt;p&gt;</code> ou qualquer outra dando um fallback content. Ou seja dar um motivo, por exemplo.:
```html
<video src="./videos/pentakill.mp4" type="video/mp4">
    <p>Este browser não suporta vídeo </p> <!-- Tag que irá aparecer caso o vídeo não seja carregado-->
</video> 
```

</br> 
</br> 


## <code>Source</code>
* O elemento HTML <code>&lt;source&gt;</code> especifica vários recursos de mídia para o elemento <code>&gt;picture&gt;</code>, o audio ou o elemento <code>&lt;video&gt;</code>.
* É comumente usado para oferecer o mesmo conteúdo de mídia em vários formatos de arquivo, a fim de fornecer compatibilidade com uma ampla gama de navegadores, dado o seu suporte diferente para formatos de arquivo de imagem e formatos de arquivo de mídia.
* Possui todos os atributos da tag <code>&lt;video&gt;</code>
* É quase igual utilizar da meneira abaixo.:

#### Só podemos colocar um vídeo por tag
```html
<video src="./videos/pentakill.mp4" type="video/mp4"> 

</video> 
```

#### Podemos colocar infinitos vídeos com diferentes atributos
```html
<video type="video/mp4"> 
    <source src="./videos/Flor.mp4" muted="true" autoplay>
    <source src="./videos/Rosa.mp4">
    <source src="./videos/Flor.mp4" controls="true">
    ..
</video> 
```

##### Notas importantes
>Uso do atributo <code>srcset</code> é obrigatório se o pai do elemento for um elemento <code>&lt;picture&gt;</code>, mas não permitido se o pai do elemento for um elemento <code>&lt;audio&gt;</code> ou <code>&lt;video&gt;</code>. </br> O srcset é uma lista de uma ou mais cadeias de caracteres, separadas por vírgulas, indicando um conjunto de imagens possíveis representadas pela origem para o navegador usar. Caso você não utilize a tag <code>img</code> dentro da <code>picture</code>, você userá a tarce <code>source</code> e nela será necessário passar o atributo "srcset" para setar a imagem que deseja. 

> Colocamos o atributo "media" junto ao <code>srcset</code> para podermos trabalhar com a responsividade. Será o atributo <code>media</code> que irá nos dizer até qual tamanho determinada imagem deve ser colocada. 

</br> 
</br> 
</br> 
</br> 

## Áudio
* src ou a tag <code>&lt;source&gt;</code>
* controls 
* type
* loop
* autoplay (raramente irá funcionar na maioria dos browsers)
* muted