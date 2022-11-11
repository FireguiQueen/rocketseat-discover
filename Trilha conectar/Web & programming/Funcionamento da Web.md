# Web 
- Traduzindo, a palavra "web" significa "rede". A Web é uma maneira de estrutarmos uma troca de dados entre computadores.

>Você possui um computador, e você deseja acessar algum site da web. Em outro lugar do mundo, há um computador onde armazena este site, onde guarda todos os dados. E para se conectar a este computador, para receber as informações deste site, você precisa da web. Pois com a web iremos conseguir fazer esta troca de informações, esta troca de dados. 

</br>

# WebPage
Nada mais é do que uma página na web.
- _Acessamos pelo navegador_
- _Possui um endereço único_
- _Está armazenada no servidor, quando requisitada, o servidor envia uma cópia da página para o cliente_
- _HTML - Hyper Text Markup Language (estruturação da página)_
- _CSS - Cascading Style Sheet (estilo da página)_
- _JavaScript (interações da página)_

>Hyper text: _Texto com imagens, vídeos, textos, hyper links e etc.. <br> Website: É um agrupamento de WebPages._ 

</br>

## Um Website pode ser.:
### Estático
_Um página estática significa que, a página sempre será a mesma. Por exemplo, quando diversos clientes (usuários) solicitam ao servidor uma cópia da página, esta mesma cópia irá vir igual para todo mundo </br>->&nbsp; Não interagem com um banco de dados </br>->&nbsp; Alteração no código é feita de maneira direta e irá mudar para todos </br>->&nbsp; Por não possuir interação com o backend (banco de dados) é quase impossível ser "hackeada" </br>->&nbsp; Melhor em performance_

</br>

### Dinâmico
_Uma página dinâmica se altera conforme a solicitação. Por exemplo, quando acessamos o perfil de alguém no Facebook, estamos indo para uma página dinâmica, pois este mesmo perfil possui uma foto, uma biografia, vídeos e etc.. <br>->&nbsp; Interage com um banco de dados <br>->&nbsp; Alteração sem mexer no código (pois até mesmo o cliente pode fazer a alteração, como trocar uma foto em seu perfil </br> Recomendação de leitura: https://mydroulisblog.netlify.app/site-estatico-x-site-dinamico-x-spa/_

</br>

_______________________________________________________________________________________________________________

# Ações internas com um simples click

## Pensamento simples
<ol>
<li> Digitar https://aternos.org/ </li>  
<li> Pressionar enter  </li>  
<li> Visualizar o site </li>  
</ol>

</br>


## Pensamento "avançado"
<ol>

### <li> Você digita a URL https://aternos.org/ </li>
> URL (Uniform Resource Locator) </br> _É um localizador e identificador de recursos (conteúdos) na internet. </br> URL se trata do endereço COMPLETO de um conteúdo (sites, documentos, imagens, vídeos..) localizado na internet._ 
     
>HTTP (HyperText Transfer Protocol) </br> _Utilizamos do HTTP fazer a comunicação entre computadores._ 
	  
>Função: Trocar mensagens (informações) entre computadores. </br> Mensagens: São informações, e são enviadas de um computador para outro em diversos pedaços (chunks).   

### <li>Se inicia uma linha de comunicação, através do TCP. Esta linha comunica seu computador (cliente) até o computador que armazena o conteúdo web (servidor) </li>

>Cliente: _É o computador, dispositivo ou aplicativo que faz o pedido para acessar o site. </br> Neste caso, é o browser(Chrome, Opera, Edge, Brave..)_

>Servidor: _É o computador que recebe esses pedidos de acesso e envia respostas a esses pedidos._

>TCP: _Transmition Control Protocol. A função do TCP é garantir que os pacotes (os dados) cheguem corretamente ao destino_  
 
### <li> A URL colocada é convertida em um endereço IP através do DNS</li>

>IP: _Internet protocol é o endereço dos computadores (dispositivos conectados a internet), sendo eles clientes ou servidores._
   
>DNS: _Domain name system (sistema de nomes de domínios). A função é converter um domínio para um endereço de IP_

>Domínio: _Nome dado a um IP. Invés de digitarmos o endereço IP de uma máquina (servidor) para pedir acesso aos dados, nós iremos digitar seu domínio, e assim iniciar uma comunicação através do TCP. <br> Exemplos: www.youtube.com.br (domínio) 45.42.52.74 (IP)  

### <li>Seu pedido (cliente) está percorrendo por diversos proxies. </li>

> Proxy: _Qualquer dispositivo no caminho (entre cliente e servidor) -> Modem, roteador, outros computadores/dispositivos e etc.._

>Proxies podem ser tanto do cliente quanto do servidor. A função das proxies é encaminhar os pacotes (dados) até chegar ao cliente.  Os pacotes passam por diversos computadores do servidor (caso haja), da sua operadora de Internet, até seu roteador e assim chega no seu dispositivo. 	 
 
#### <li>Seu pedido chega ao servidor</li>

#### <li>O servidor analisa seu pedido e dá uma resposta ao cliente. Esta análise procura saber em qual lugar da máquina (cliente) que irá entender o que foi pedido, neste caso, o browser</li>

#### <li>Se a resposta do servidor for positiva (permissão para acessar o conteúdo), o conteúdo pedido pelo cliente é retornado através de uma cópia e por um caminho semelhente. Este mesmo conteúdo passa pela linha de comunicação (TCP) que foi criada anteriormente</li>

#### <li>O browser recebe esses pedaços (conteúdos) e monta a tela do site para o cliente </li>

#### <li>Todo este percurso é feito novamente. Pois para cada recurso (html, css, javascript..) é feito uma nova conexão</li>
</ol>

</br>

## RESUMO 

>__Protocol__ </br> um conjunto de regras 

>__URL (Uniform Resource locator)__ </br> Localiza e identifica conteúdos na web

>__HTTP__ (HyperText Protocol) </br> Trocar informações entre computadores na web

>__Client__ </br> Computador, dispositivo ou aplicativo que deseja visualizar o conteúdo. o cliente quem faz os pedidos para acessar um site na web.

>__Servidor__ </br> Computador que recebe esses pedidos (feitos pelo cliente) e da uma resposta a eles. 

>__TCP (Transmition Control Protocol)__ </br> Protocolo de controle de transmissão  a função é garantir que os pacotes cheguem corretamente ao destino (entre cliente e servidor). 

>__IP (Internet Protocol)__ </br> Endereço dado aos dispositovs que estão conectados a internet (clientes e servidores)

>__Domínio__ </br> Nomeia um endereço IP (vários números) a um nome simples. </br>-> o ip aonde o google está localizado: 142.251.129.46 </br> -> o que digitamos para acessar o site da Google: Google.com 

>__DNS (Domain Name System)__ </br> Converte um domínio para um endereço IP. </br> Para acessar o site do Youtube por exemplo, seria NECESSÁRIO digitar o endereço IP onde se localiza o Youtube (142.250.69.206). </br> Invés de digitarmos estes números, basta digitar "www.youtube.com". </br> Isto ocorre pois, atráves da DNS, é feita a conversão de "www.youtube.com" para o IP onde se encontra o site youtube (142.250.69.206).

>__Proxies/Proxy__ </br> Qualquer dispositivo conectado a internet entre cliente e servidor (modem, roteadores, computadores etc). </br> O proxy garante que as informações sejam entregues tanto ao cliente quanto ao servidor. </br> As proxies são de ambos os lados, do servidor e do cliente.. Afinal, existem informações vindas do cliente e do servidor. 

</br>

______________________________________________________________________________________________________________
### Pegando o IP de um site pelo CMD 
<ol>
<li>Abra o CMD </li>
<li>Digite "ping" seguido do endereço do site desejado (sem o WWW) </li>
<ol> </br>

```
> ping google.com 
```
