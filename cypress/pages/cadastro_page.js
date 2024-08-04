const elements = require("../support/elements")
import HomePage from "../pages/home_page";

class CadastroPage extends HomePage{
    campo_curso(nome_curso) {
        cy.get(elements.campo_nome_curso).type(nome_curso)
    }
    campo_descricao(descricao) {
        cy.get(elements.campo_descricao_curso).type(descricao)
    }
    campo_instrutor(instrutor) {
        cy.get(elements.campo_instrutor_nome).type(instrutor)
    }
    campo_url_page(url_page) {
        cy.get(elements.campo_url_img_capa).type(url_page)
    }

    campo_data_inicio(data_inicio) {
        const formattedDate = data_inicio.replaceAll('/', '-'); // Substitui '/' por '-'
        cy.get(elements.campo_data_inicio).type(formattedDate)
    }
    campo_data_fim(data_fim) {
        const formattedDate = data_fim.replaceAll('/', '-');
        cy.get(elements.campo_data_fim).type(formattedDate)
    }

    campo_numero_vaga(numero_vaga) {
        cy.get(elements.campo_numero_vaga).type(numero_vaga)
    }
    campo_tipo_curso(tipo_curso) {
        cy.get(elements.select_tipo_curso).type(tipo_curso, {force:true})
        cy.contains(tipo_curso).click()
    }

    campo_endereco(endereco) {
        cy.get(elements.campo_endereco).type(endereco)
    }
    campo_inscricao(inscricao) {
        cy.get(elements.campo_inscricao).type(inscricao)
    }

    botao_cadastrar_curso(){
        cy.get(elements.botao_cadastrar_curso).click()
    }

}
export default CadastroPage;