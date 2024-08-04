const HomePage = require("../../pages/home_page")
const utils = require("../../support/utils")

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

    // Este teste gerará um falso positivo visto que a mensagem de exclusão acontece
    // no entanto o curso ainda permanece na listagem.
    it('Deve deletar um curso com sucesso', () => {
        cy.cadastrar_curso(nome_curso, descricao, instrutor, url_page, endereco, inscricao)
        home_page.botao_excluir_curso()
        home_page.pop_up_contem('Curso excluído com sucesso!')
    });
});
  