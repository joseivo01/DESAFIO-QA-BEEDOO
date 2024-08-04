const utils = require("../../support/utils")
const HomePage = require("../../pages/home_page")

const home_page = new HomePage

describe('Deletar Tests', () => {
    let nome_curso, descricao, instrutor, url_page, endereco, inscricao;

    beforeEach(() => {
        home_page.visit()
        
        nome_curso = utils.generate_string('curso');
        descricao = utils.generate_string('descricao');
        instrutor = utils.generate_string('Julio')
        url_page = 'https://encurtador.com.br/fHcec' //url encurtada
        endereco = utils.generate_string('Antonio Castro,587')
        inscricao = utils.generate_string('www.google.com')
    });

    it('Deve deletar um curso com sucesso', () => {
        cy.cadastrar_curso(nome_curso, descricao, instrutor, url_page, endereco, inscricao)
        cy.contains(nome_curso).should('exist').and('be.visible')
    });
});
  