# <code>Form</code>
Representa uma seção de um documento que contém controles interativos que permitem ao usuário submeter informação a um determinado servidor web.

- Captura dados (informações) de entrada (input)
> Por exemplo, pegar o nome do cliente e armazenar numa variável JS

</br>

- Interação com a página
> Por exemplo, clicar no botão '1' (interação) e em outro número para fazer um cálculo na calculadora que está no seu site.

</br>

- Controle 
> Por exemplo, criar mais controles para uma tag vídeo, você poder aumentar, diminiuir o volume e etc..

</br>
</br>


# <code>Inputs</code>
São usados para criar controles interativos para formulários baseados na web para receber dados do usuário. A semântica de um <code>&lt;input&gt;</code> varia consideravelmente dependendo do valor de seu atributo type.

</br>

______________________________________________________________________________

## Form Atrbituos básicos

### Method
Quando criamos a tag <code>&lt;form&gt;</code> temos dois valores principais para o atributo <code>method</code>, sendo.: 
* get
> Método mais rápido para o backend receber as informações e é o valor padrão caso você não defina este atributo. Em geral, quando você faz uma pesquisa, você pode perceber que o que você digitou fica na URL do seu browser, e a mesma coisa acontece quando você preenche um formulário. Após colocar informações no formulário, eles irão ficar na sua URL. O valor "GET" é apenas recomendado caso o formulário possua perguntas não confidênciais, tais como.: nome da pessoa, sobrenome, idade e etc.. 

</br>

* post
> É o metódo mais seguro, porém mais lento ao se comunicar com o resto da aplicação. Após colocar informações no formulário, eles NÃO irão ficar na sua URL. O valor "POST" é recomendado caso o formulário tenha perguntas confidênciais, como: cpf, cartão de crédito, senha, usuário e etc..

</br>

______________________________________________________________________________

### Tags filhas básicas do <code>form </code>

#### <code>fieldset</code>
É usado para agrupar vários controles de input, bem como rótulos (&lt;label&gt;) dentro de um formulário da Web. Em outras palavras, iremos utilizar o <code>fieldset</code> para agrupar diversas questões de formulário, e definir que elas pertencem ao mesmo grupo (o atributo `name=""` não é obrigatório, mas é extremamente recomendado para definir um nome para aquele grupo), ou seja, vamos utilizar do fieldset para dizermos que todas os inputs tem o mesmo propósito.. E este propósito pode varir, pode ser inputs de texto, número, email e tudo isso para fazer seu login. 
No exemplo abaixo, os 3 <code>inputs</code> foram colocado na tag <code>fieldset</code> pois pertencem ao mesmo grupo (o propósito do grupo é ser as informações de contato). O Fieldset é muito utilizado com a tag <code>legend</code>, pois é ela quem dirá o nome agrupamento. 
```html
<!-- EXEMPLO 01: -->
<form>
    <fieldset name="inf-de-contato">       <!-- Define um grupo-->
        <legend>Contato </legend>         <!-- Define o nome do agrupamento -->

        Nome: <input type="text" />       <!-- Formulário pertencente ao grupo -->
        Sobrenome: <input type="text" />  <!-- Formulário pertencente ao grupo -->
        CPF: <input type="numer" />       <!-- Formulário pertencente ao grupo -->
    </fieldset> 



    <!-- Caso você queira que determinado grupo de formulário fique desabilitado, ou seja, o usuário não irá conseguir clicar nos "inputs", você pode adicionar o atributo "disable" -->

    <fieldset name="inf-de-endereço">   <!-- Define um grupo-->
        <legend>Contato </legend>       <!-- Define o nome do agrupamento -->

        Nome: <input type="text"/>      <!-- Formulário pertencente ao grupo -->
        Sobrenome: <input type="text"/> <!-- Formulário pertencente ao grupo -->
        Email: <input type="text"/>     <!-- Formulário pertencente ao grupo -->
    </fieldset> 
</form>


<!-- EXEMPLO 02: -->
<form>
    <fieldset> <!-- Define um grupo-->
        <legend>Falsificador de CPF </legend> <!-- Define o nome do grupo -->

        Nome<input type="text">           <!-- Formulário pertencente ao grupo -->
        Sobrenome<input type="text">      <!-- Formulário pertencente ao grupo -->
        Estado <input type="text">        <!-- Formulário pertencente ao grupo -->
    </fieldset>
</form>
```
> RECOMENDADO O USO DA TAG <code>h2</code> ou <code>h1</code> PARA DEFINIR UM NOME DO FORMULÁRIO CASO A TAG <code>legend</code> não atenda suas necessidades.

</br>

O fieldset também pode ficar fora do formulário, porém o atributo `form=""` será necessário na tag <code>&lt;fieldset&gt;</code>. E o atributo `id=" "` será necessário na tag <code>&lt;form&gt;</code>.
```html
<form id="login">

</form>

<fieldset form="login">
    <legend>Login </code>
    User:     <input type="text"/> 
    Password: <input type="password"/> 
    Email:    <input type="email"/>
</fieldset> 
```

</br>
</br>
</br>

#### <code>label</code>
Representa uma legenda para um item em uma interface do usuário. Em outras palavras, você associa um nome a um input.
```html
<!-- JEITO ERRADO -->
<form>
    Name:     <input type="text"/> 
    Password: <input type="password"/> 
</form>


<!-- JEITO RECOMENDADO -->
<form>
    <!-- O label faz com que a string "name" seja referente ao input de texto, e quando clicamos nesta mesma string, o HTML entende que queremos digitar naquele input, então já podemos começar a digitar -->
    <label> Name:     <input type="text"/>      </label>
    <label> Password: <input type="password"/>  </label>
</form>

<!-- Não é necessário deixar o input dentro da tag LABEL, mas o atributo  FOR=" "  será necessário --> <!-- Mas o atributo for só funciona com ELEMENTOS específicos.: button, input, meter, output, progress, select textarea. -->
<form>
    <label for="nome-da-pessoa">Name </label>

    <input id="nome-da-pessoa" type="text" />
</form>


```


