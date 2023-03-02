# Estrutura padrão

* header  <!-- Para criar cabeçalho                                                          -->
* nav     <!-- Para naveção dentro do seu site                                               -->
* main    <!-- Conteúdo principal da página                                                  -->
* aside   <!-- Para a barra lateral (geralmente usada para ADs)                              -->
* section <!-- Para criar seções no seu site, como um shoopping, cada loja é uma seção       -->
* footer  <!-- Para o rodapé da página, a parte de baixo                                     -->

</br>

## `header`

</br>

Header global da página 
```html 
<body>
    <header> </header>

    <main>
        <h1> </h1>
        <p> </p>
    </main>
</body>
```

</br>

Header pertencente a uma seção, e não a página toda
```html 
<body>
    <section id="roupas-vermelhas">
        <header> </header>
    </section>

    <section id="roupas-laranjas">
        <header> </header>
    </section>

</body>
```

______________________________________________________

## `nav`
A tag `nav` é utilizada para navegações de extrema importância no seu site.
Como por exemplo acessar outras páginas do mesmo site.
Mas não é obrigatória para todos os links externos.
Por exemplo, caso sua `nav` seja colocada no `footer`, isto não é necessário.

</br>

Geralmente é utilizada junto ao header
```html
<body>
    <header>
        <nav>
            <ul>
                <li> </li>
                <li> </li>
                <li> </li>
            </ul>
        </nav>
    </header>
</body>
```

______________________________________________________

## `main`
Para mostrar qual o nosso principal conteúdo. 
Nossa funcionalidade principal da aplicação.

</br>

```html
<body>
    <main>
        <h1>Receitas </h1>

        <h2>Torta de limão</h2>
        <ul>
            <li>Suco de limão </li>
            <li>Leite condensado e creme de leite </li>
            <li>Biscoito de maizena </li>
        </ul>


        
        <h2>Torta de limão</h2>
        <ul>
            <li>Suco de maçã </li>
            <li>Leite condensado e creme de leite </li>
            <li>Biscoito de maizena </li>
        </ul>
    </main>
```


______________________________________________________

## `article`
Serve para mostrar conteúdos independentes dentro de uma tag section.
Por exemplo, nós usamos a `section` para separar os conteúdos, mas e para separar conteúdos
dentro da section, se for necessário? Para isso temos o `article`.

</br>

```html
<body>
    <main>
        <section id="avioes">
            <article>
                <h2>Aviões elétricos</h2>
                <p> ..... </p>
            </article>

            <article>
                <h2>Aviões a base de gasolina </h2>
                <p>.... </p>
            </article>
        </section>
    </main>
</body>
```

______________________________________________________

## `aside`
A tag aside é para conteúdos levemente relacionados ao conteúdo principal, como explicações do conteúdo, glossários, links extras, biografia do autor, informações de perfil e etc.
Por exemplo, quando você entra num artigo, e ao lado está "artigos relacionados", isto foi colocado usando a tag `aside`.


______________________________________________________

## `footer`
Fica ao final da página.
Geralmente possui informações do autor da página, endereço da empresa/pessoa, contato, sitemap, opção de voltar ao topo.
</body>