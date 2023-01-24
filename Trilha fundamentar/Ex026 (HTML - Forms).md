# Forms

## Para que serve?

- Capturar dados (informações) de entrada (input)
> Por exemplo, pegar o nome do cliente e armazenar numa variável JS

</br>

- Interação com a página
> Por exemplo, clicar no botão '1' (interação) e capturar seus dados para fazer um cálculo na calculadora

</br>

- Controle 
> Por exemplo controle de uma tag vídeo, você poder aumentar, diminiuir o volume e etc..

</br>

______________________________________________________________________________

## <code>form</code>
O elemento form é utilizado para fazer formulários. Os formulários representam uma seção de documento que contém controles interativos para o envio de informações.

### Atrbituos básicos

#### Method
Quando criamos a tag <code>&lt;form&gt;</code> temos dois valores principais para o atributo <code>method</code>, sendo.: 
* get
> Método mais rápido para o backend receber as informações e é o valor padrão caso você não defina este atributo. Em geral, quando você faz uma pesquisa, você pode perceber que o que você digitou fica na URL do seu browser, e a mesma coisa acontece quando você preenche um formulário. Após colocar informações no formulário, eles irão ficar na sua URL. O valor "GET" é apenas recomendado caso o formulário possua perguntas não confidênciais, tais como.: nome da pessoa, sobrenome, idade e etc.. 

</br>

* post
> É o metódo mais seguro, porém mais lento ao se comunicar com o resto da aplicação. Após colocar informações no formulário, eles NÃO irão ficar na sua URL. O valor "POST" é recomendado caso o formulário tenha perguntas confidênciais, como: cpf, cartão de crédito, senha, usuário e etc..


______________________________________________________________________________

### Tags filhas básicas

#### <code>fieldset</code>
É usado para agrupar vários controles de input, bem como rótulos (&lt;label&gt;) dentro de um formulário da Web. Em outras palavras, iremos utilizar o <code>fieldset</code> para agrupar diversas questões de formulário, e definir que elas pertencem ao mesmo grupo (o atributo `name=""` não é obrigatório, mas é extremamente recomendado para definir um nome para aquele grupo). 
No exemplo abaixo, os 3 <code>inputs</code> foram colocado na tag <code>fieldset</code> pois pertencem ao mesmo grupo. O Fieldset é muito utilizado com a tag <code>legend</code>, pois é ela quem dirá o nome agrupamento.
```html
<!-- EXEMPLO 01: -->
<form>
    <fieldset name="inf-de-contato">            <!-- Define um grupo-->
        <legend>Contato </legend>               <!-- Define o nome do agrupamento -->

        <input type="text">Nome: </input>       <!-- Formulário pertencente ao grupo -->
        <input type="text">Sobrenome: </input>  <!-- Formulário pertencente ao grupo -->
        <input type="text">Email: </input>      <!-- Formulário pertencente ao grupo -->
    </fieldset> 
</form>


<!-- EXEMPLO 02: -->
<form>
    <fieldset> <!-- Define um grupo-->
        <legend>Falsificador de CPF </legend> <!-- Define o nome do grupo -->

        <input type="text">Nome: </input>       <!-- Formulário pertencente ao grupo -->
        <input type="text">Sobrenome: </input>  <!-- Formulário pertencente ao grupo -->
        <input type="text">CPF: </input>        <!-- Formulário pertencente ao grupo -->
    </fieldset>
</form>
```
> RECOMENDADO O USO DA TAG <code>h2</code> ou <code>h1</code> PARA DEFINIR UM NOME DO FORMULÁRIO, CASO A TAG <code>legend</code> não atenda suas necessidades.

</br>

O fieldset também pode ficar fora um formulário, porém o atributo `form=""` será necessário junto na tag <code>&lt;fielset&gt;</code>, e o atributo `id=" "` será necessário na tag <code>&lt;form&gt;</code>.
```html
<form id="login">

</form>

<fieldset form="login">
    <legend>Login </code>
    <input type="text">User: </input> 
    <input type="password">Password: </input>
    <input type="email">Email: </input>
</fieldset> 
```

