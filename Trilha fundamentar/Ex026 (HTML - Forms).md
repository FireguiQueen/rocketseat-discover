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

## Valores do `type`
- file
> Para o usuário poder selecionar um arquivo de sua máquina

- text
> Para o usuário poder digitar um texto no input

- number
> Apenas números serão aceitas no input

- date
> Input de data, dia, mês e ano

- time
> Input para horário, horas e minutos.. 

- password
> Input para se colocar senha (seja para login ou register). Sua senha irá ficar em formato de "***"

- email
> Input para emails. É parecido com o input do tipo "text", porém este input só irá aceitar a resposta do usuário caso ela contenha "@"


</br>

______________________________________________________________________________

## FORM: Atrbituos básicos

### Method
Quando criamos a tag <code>&lt;form&gt;</code> temos dois valores principais para o atributo <code>method</code>, sendo.: 
* get
> Método mais rápido para o backend receber as informações e é o valor padrão caso você não defina este atributo. Em geral, quando você faz uma pesquisa, você pode perceber que o que você digitou fica na URL do seu browser, e a mesma coisa acontece quando você preenche um formulário. Após colocar informações no formulário, eles irão ficar na sua URL. O valor "GET" é apenas recomendado caso o formulário possua perguntas não confidênciais, tais como.: nome da pessoa, sobrenome, idade e etc.. 

</br>

* post
> É o metódo mais seguro, porém mais lento ao se comunicar com o resto da aplicação. Após colocar informações no formulário, eles NÃO irão ficar na sua URL. O valor "POST" é recomendado caso o formulário tenha perguntas confidênciais, como: cpf, cartão de crédito, senha, usuário e etc..

</br>

______________________________________________________________________________

## FORM: tags filhas

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



    <!-- Caso você queira que determinado grupo de formulário fique desabilitado 
    ou que um input específico fique desabilitado, 
    você pode adicionar o atributo "disabled". O "disabled" 
    só pode ser adicionado numa tag "INPUT" 
    (desabilitando um input especifico) na tag "FIELDSET" (desabilitando todo o grupo, ou seja, todos os inputs que estão neste grupo) -->

    <fieldset name="inf-de-endereço">   <!-- Define um grupo-->
        <legend>Contato </legend>       <!-- Define o nome do agrupamento -->

        Nome: <input type="text"/>      <!-- Formulário pertencente ao grupo -->
        Sobrenome: <input type="text"/> <!-- Formulário pertencente ao grupo -->
        Email: <input diabled type="text"/>     <!-- Foi desativado, porém ainda é visível na página -->
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

__________________________________________________________________________


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

</br>
</br>
</br>

__________________________________________________________________________

## <code>BUTTON</code>
* Representa um botão
* Geralmente utilizado para enviar formulários 

### Buttom: atrbituos básicos
* __TYPE:__ _submit, reset, button_
 > O "reset" faz com que os inputs voltem aos seus valores iniciais, então caso queira que seu formulário resete ao clicar no botão, é importante colocar o atributo VALUE="" em todos os inputs.
 
 > O "submit" envia os dados do formulário para o servidor. Esse é o padrão se o atributo não for especificado para botões associados a um , ou se o atributo for um valor vazio ou inválido.
 
 > O "button" não tem comportamento padrão e não faz nada quando pressionado por padrão. Ele pode fazer com que os scripts do lado do cliente ouçam os eventos do elemento, que são acionados quando os eventos ocorrem.

</br>

* __FORM__ 

* __AUTOFOCUS__ 

* __DISABLED__ 

* __NAME__ 

* __VALUE__ 

_____________________________________________________________________________

## Explicando atributos

* __FORM__ 
 > Indica o formulário que é o proprietário do elemento. Em outras palavras, caso um botão/input esteja fora um formulário, você pode fazer com que o botão/input seja referente a determinado formulário. Por exemplo.: `
 ```html
<form id="contato">
    <fieldset>
        NOME: <input type="text" name="nome-da-pessoa"/>
        EMAIL: <input type="text" name="nome-da-pessoa"/>
    </fieldset>
</form>
 
<button form="contato" type="submit">Enviar informações de contato</button>
```

</br>

* __AUTOFOCUS__ 
> O elemento deve ser focado automaticamente após a página ser carregada.

</br>

* __DISABLED__ 
 > Desabiltia um elemento, porém o mesmo continua vísivel na página, mas com uma aparência mais transparente.

 </br>

* __VALUE__ 
> Define o valor padrão na qual será mostrado no elemento no carregar da página. Utilizamos muito do `value=""` junto a um botão que reseta os campos do formulário, pois o `reset` serve para os campos voltarem o VALOR padrão, e o valor padrão não é nada.

* __NAME__ 
 > É um atributo muito importante para os campos do tipo input/button. Serve para identificar o valor daquela variável no nosso backend. Também que é possível dar um name para um formulário, mesmo que o mesmo não seja processado pelo servidor. </br> 
 > É possível fazer isso:
```html
<form name="matricula">

</form>
```
Assim, podemos acessar esse formulário facilmente pelo Javascript:
```js
document.matricula.submit();
```

</br>
</br>
</br>

_____________________________________________________________________________

# <code>datalist</code>
Contém um conjunto de elementos <code>&lt;option&gt;</code> que representam as opções permitidas ou recomendadas disponíveis para escolher nos inputs. Uma `datalist` é obrigada a estar linkada em algum input, pois como já sabemos, a `datalist` é utilizada para sugerir opções, e para sugerimos opções, precisamos linkar ela a algum input.

* O usuário pode selecionar um dos valores ou colocar um valor diferente da sugestão
* Utilize o atributo `value=".."` dentro da `option` para sugerir um valor principal, coloque o valor "secundário" entre as tags option.
* Utilizamos o atributo `list=".."` para linkar uma `datalist` a um input.

```html
<!-- Sugerindo uma fruta -->
<input list="fruit" type="text" name="my-favorite-fruit">
<datalist id="fruit">
    <option value="Apple">A red fruit</option>
    <option value="Banana">A yellow fruit</option>
    <option value="Mango">A yellow-red-orange fruit</option>
    <option value="Watermelon">A green-red fruit</option>
</datalist>


<!-- Sugerindo um horário -->
<input list="WhatTime" type="time" /> 
<datalist id="WhatTime">
    <option value="01:30"> </option>
</datalist>
```
> Vale lembrar que, o atributo `value=""` só pode receber o que condiz com o "type" do input. Ou seja, se colocarmos que o input é do tipo "time", só podemos colocar números e caracteres de horas (:) no `value=""`. Como pode ver, o exemplo acima foi utilizado um input do tipo "time", então, somos obrigados a colocar o `value=""` com um horário e com ":" para especificar qual valor são as horas, e qual valor são os minutos.

> No exemplo abaixo, estarei utilizando um input do `type="color"`, perceba que na datalist não pode haver strings, somente hexadecimais.
```html
<input type="color" list="ChooseColor">
<datalist id="ChooseColor">
    <!-- Pelo fato do nosso input ser do tipo "color", o value só pode possuir cores HEXADECIMAIS, nada além disto.-->
    <option value="#994553"> </option> 
    <option value="#191499"> </option>
</datalist>
```

> Tipos de input não suportados pelo datalist.: </br> hidden, password, checkbox, radio, file ou qualquer tipo de button.