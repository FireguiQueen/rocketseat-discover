# Media


## <code>VIDEO</code>
* Elemento para vídeos que precisam ser baixados, renderizados.. Utiliza-se vídeos que já estão no repositório. 


### Atributos
* Poster (que imagem/gif será mostrado enquanto o vídeo não carrega)
* loop (faz com que seu vídeo se repita após acabar)
* width (define a largura do vídeo)
* height (define a altura do vídeo) 
* controls (permite o usuário "mexer" no vídeo.: som, pausa, minuto do vídeo..)
* src (diretório onde se encontra o vídeo. Isto é opcional; ao invés disso você pode usar o elemento <code>&lt;source&gt;</code> dentro do bloco do vídeo para especificar o vídeo a ser incorporado)
* autoplay (fará com que o vídeo comece automaticamente. Quase nenhum browser aceita isto, e caso aceite, você provavelmente terá que fazer uso da tag "muted" junto a "autoplay". Para conseguir fazer o vídeo ser desmutado, adicione o atributo "controls" ou faça um botão utilizando JS que desmute o vídeo.
* muted (vídeo irá ficar mutado; o usuário pode desmutar através do controls ou de um botão de unmute feito pelo javascript)
* type (importante para dizer qual o tipo de arquivo.. Exemplos.: <code>type="video/mp4"</code> ; <code>type="video/mwv"</code>
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


## <code>SOURCE</code>
* O elemento HTML <code>&lt;source&gt;</code> especifica vários recursos de mídia para o elemento <code>&lt;picture&gt;</code>, o <code>&lt;audio&gt;</code> ou o elemento <code>&lt;video&gt;</code>
* É comumente usado para oferecer o mesmo conteúdo de mídia em vários formatos diferentes, a fim de fornecer compatibilidade com uma ampla gama de navegadores, dado o seu suporte diferente para formatos de arquivo de imagem e formatos de arquivo de mídia.

#### Iremos trabalhar com um formato e um vídeo específico
```html
<video src="./videos/pentakill.mp4" type="video/mp4"> 

</video> 
```

#### Iremos trabalhar com vários formatos
```html
<video muted autoplay> 
    <source type="video/mp4" src="./videos/Flor.mp4">

    <!-- Caso o browser não consiga renderizar o vídeo acima, este será colocado-->
    <source type="video/wmv" src="./videos/Flor.wmv">

    <!-- Caso o browser não consiga renderizar o vídeo acima, este será colocado-->
    <source type="video/flv" src="./videos/Flor.flv">
</video> 
```

##### Notas importantes
>Uso do atributo <code>srcset</code> é obrigatório se o pai do elemento for um elemento <code>&lt;picture&gt;</code>, mas não permitido se o pai do elemento for um elemento <code>&lt;audio&gt;</code> ou <code>&lt;video&gt;</code>. </br> O srcset é uma lista de uma ou mais cadeias de caracteres, separadas por vírgulas, indicando um conjunto de imagens possíveis representadas pela origem para o navegador usar. Caso você não utilize a tag <code>img</code> dentro da <code>picture</code>, você userá a tarce <code>source</code> e nela será necessário passar o atributo "srcset" para setar a imagem que deseja. 

> Colocamos o atributo "media" junto ao <code>srcset</code> para podermos trabalhar com a responsividade. Será o atributo <code>media</code> que irá nos dizer até qual tamanho determinada imagem deve ser colocada. 

</br> 
</br> 
</br> 
</br> 

## <code>&lt;Áudio&gt;</code>
* tag muito utilizada junto ao JS para fazer controles mais avançados e bonitos
* src ou a tag <code>&lt;source&gt;</code>
* controls (atributo obrigatório para a maioria dos browsers)
* type (tipo do áudio.. Exemplo: '.mp4')
* loop (deixa o áudio em loop)
* autoplay (fará com o que raramente irá funcionar na maioria dos browsers)
* muted (deixa o áudio mutado quando começar)
* preload (none: não carrega nada do áudio ; metadata: carrega informações do áudio como o seu comprimento ; auto: infica que o áudio tem alta propriedade e deve ser baixado assim que abrir a página)

#### Só podemos trabalhar com um formato de vídeo (e caso não renderize, uma tag p será mostrada)
```html
<audio src="./videos/miau.mp4" type="audio/mp3">
    <p>Sorry, your audio cant be loaded </p>
</audio>
```

#### Podemos trabalhar com diversos formatos de áudio (e caso não renderize, o browser irá tentar renderizar outro formato de áudio)
<audio controls>
    <source src="./videos/papagaio.mp3" loop muted>
</audio>
```


## <code>IFRAME</code>
O elemento HTML <code>&lt;iframe&gt;</code> (ou elemento HTML inline frame) representa um contexto de navegação aninhado, efetivamente incorporando outra página HTML para a página atual.

### Atributos 
* src (onde o conteúdo externo se encontra)
* height (altura do conteúdo)
* width (largura do conteúdo)
* title (pra acessibilidade)
* allowfullscreen (permitir full screen se for um vídeo do youtube por exemplo)

#### Notas imporantes
> Lembre-se, o iframe é uma tag que se "comunica" com o site externo. Ou seja, não é só pegar a URL de uma foto/vídeo que e o iframe irá colocar no seu site. É necessário que o site que você está pegando a foto/vídeo possua suporte a esta tag. Então é importante se lembrar que, caso você queira pegar um conteúdo externo, vá no site que deseja pegar e procure onde você pode copiar o código do iframe dele. O Youtube da esta opção no botão de compartilhamento, a mesma coisa vale para o imgur e Google maps por exemplo.

```html
    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2191.0428008580243!2d-44.067306417406805!3d-22.54616476857401!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1674363002459!5m2!1spt-BR!2sbr" width="50%" height="400px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>
```


</br> 
</br> 
</br> 
</br> 


## <code>IMG</code>
O elemento <code>&lt;img&gt;</code> (ou HTML Image Element) representa a inserção de imagem no documento, sendo implementado também pelo HTML5 para uma melhor experiência com o elemento <code>&lt;figure&gt;</code> e <code>&lt;figcaption&gt;</code>.

### Dando título a imagem 
O elemento <code>&lt;figure&gt;</code> HTML representa conteúdo autocontido, potencialmente com uma legenda opcional, que é especificada usando o elemento <code>&lt;figcaption&gt;</code>. A figura, sua legenda e seu conteúdo são referenciados como uma única unidade, sendo assim, a imagem e a sua legenda feita pelo <code>&lt;figcaption&gt;</code> devem estar dentro do elemento <code>&lt;figure&gt;</code>.
```html
<figure>
    <img src="./images/foguete.png" alt="Rocket's image">
    <figcaption>Foguete dando ré em uma imagem </figcaption>
<figure>
```

### Atributos
* src (onde se encontra o caminho para a imagem: pode ser da web ou do seu repositório)
* alt (o que será mostrado caso a imagem não carregue ; utilizado também para acessilibidade, por exemplo se sua imagem for de um urso, tente colocar <code>alt="Imagem de urso"</code>)
* title (título da imagem, quando o mouse descansar por cima o título será mostrado)
* height (definir o altura da imagem)
* width (definar a largura da imagem)

#### Nortas importantes
> É uma tag self-closing, ou seja, você não pode colocar <code>&lt;img&gt;</code> para fechar a tag

```html
<!-- Usando imagem online -->
<img src="https://imgur.com/t/beans/yqgbl46" alt="Dog's image"/>

<!-- Imagem do diretório -->
<img src="./images/cavalos/cavaloPreto.png" alt="Black horse's image" />
```


