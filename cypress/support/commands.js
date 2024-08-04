// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const utils = require("../support/utils")
const CadastroPage = require("../pages/cadastro_page")

const cadastro_page = new CadastroPage

Cypress.Commands.add('cadastrar_curso', (nome_curso, descricao, instrutor, url_page, tipo_curso, endereco, inscricao) => {
    cadastro_page.botao_cadastrar_curso()
    cadastro_page.campo_curso(nome_curso)
    cadastro_page.campo_descricao(descricao)
    cadastro_page.campo_instrutor(instrutor)
    cadastro_page.campo_url_page(url_page)
    cadastro_page.campo_data_inicio('2024/07/01')
    cadastro_page.campo_data_fim('2024/08/04')
    cadastro_page.campo_numero_vaga('25')
    cadastro_page.campo_tipo_curso('Presencial')
    cadastro_page.campo_endereco(endereco)
    cadastro_page.botao_cadastrar_curso()
});