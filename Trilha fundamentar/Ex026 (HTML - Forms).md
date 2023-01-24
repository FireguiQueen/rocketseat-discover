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

## Dominando os "forms"
- Javascript
- Validação
- Controles customizados
- Estilização
______________________________________________________________________________

## <code>form</code>
O elemento form é utilizado para fazer formulários. Os formulários representam uma seção de documento que contém controles interativos para o envio de informações.

### Atrbituos básicos

</br>

#### Method
Quando criamos a tag <code>&lt;form&gt;</code> temos dois valores principais para o atributo <code>method</code>, sendo.: 
* get
> Método mais rápido para o backend receber as informações e é o valor padrão caso você não defina este atributo. Em geral, quando você faz uma pesquisa, você pode perceber que o que você digitou fica na URL do seu browser, e a mesma coisa acontece quando você preenche um formulário. Após colocar informações no formulário, eles irão ficar na sua URL. O valor "GET" é apenas recomendado caso o formulário possua perguntas não confidênciais, tais como.: nome da pessoa, sobrenome, idade e etc.. 

</br>

* post
> É o metódo mais seguro, porém mais lento ao se comunicar com o resto da aplicação. Após colocar informações no formulário, eles NÃO irão ficar na sua URL. O valor "POST" é recomendado caso o formulário tenha perguntas confidênciais, como: cpf, cartão de crédito, senha, usuário e etc..


