Feature: Devo conseguir acessar a aplicação
    Scenario: Acesso a página inicial
        When Eu acesso a página inicial
        Then Devo ver a mensagem "Hello, World!"