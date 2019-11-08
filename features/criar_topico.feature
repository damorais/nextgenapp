
Feature: Criar um tópico de discussão
	Eu, enquanto um usuário anônimo do fórum
	Devo conseguir criar um novo tópico de discussão
	De forma que eu possa me comunicar a comunidade

	Scenario: Devo conseguir acessar a página de criação de novo tópico
		Given Estou na página "Tópicos"
		When Eu clico no link "Adicionar Novo Tópico"
		Then Devo ser redirecionado para a página "Novo Tópico"

	@wip
	Scenario: Devo conseguir criar um novo tópico
		Given Estou na página "Novo Tópico"
		When Eu crio um tópico com o título "Meu Tópico Bacana"
		And Com a mensagem "Este é um tópico qualquer"
		And Eu clico em "Salvar"
		Then Devo ser redirecionado para a página "Tópicos"
		And Um tópico com o título "Meu Tópico Bacana" deve ter sido criado

	Scenario: Não devo conseguir criar um tópico sem título e descrição
		Given Estou na página "Novo Tópico"
		And Eu não preencho o título e a descrição do novo tópico
		When Eu clico em "Salvar"
		Then Eu devo permanecer na página "Novo Tópico"
		And Uma mensagem de erro "Falha ao criar o tópico" deve ser exibida