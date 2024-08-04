const elements = require("../support/elements")

class HomePage{
    visit(){
        cy.visit('https://creative-sherbet-a51eac.netlify.app/')
    }

    pop_up_contem(mesagem){
        cy.get(elements.pop_up).contains(mesagem)
        .should('exist')
        .and('be.visible')
    }

    botao_excluir_curso(){
        cy.get(elements.botao_excluir).click()
    }

}
export default HomePage;