# Estrutura padrão

* header  <!-- Para criar cabeçalho                                                          -->
* nav     <!-- Para naveção dentro do seu site                                               -->
* main    <!-- Conteúdo principal da página                                                  -->
* aside   <!-- Para a barra lateral (geralmente usada para ADs)                              -->
* section <!-- Para criar seções no seu site, como um shoopping, cada loja é uma seção       -->
* footer  <!-- Para o rodapé da página, a parte de baixo                                     -->


## header

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
    <header> </header>

    <section id="roupas-vermelhas">
        <header> </header>
    </section>

    <section id="roupas-laranjas">
        <header> </header>
    </section>
    
</body>
```