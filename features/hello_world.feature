Feature: Devo conseguir acessar a página inicial da aplicação e receber uma mensagem de boas vindas
    Eu, enquanto um usuário comum
    Devo receber uma mensagem de boas vindas
    Para que eu possa usar a aplicação

    Scenario: Ver a mensagem de boas vindas na página inicial
        When Eu acesso a página inicial da aplicação
        Then Devo ver a mensagem "Hello World!"
    