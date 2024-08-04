module.exports = {
    botao_listar_cursos: 'span.q-focus-helper ~ span.q-btn__content > span.block:contains("Listar cursos"):first',

    pop_up: 'div.q-notification__content > div.q-notification__message',
    botao_excluir: '.q-card__actions > button.non-selectable > span > span.block:contains("Excluir curso"):first',

    campo_nome_curso: 'input[aria-label="Nome do curso"]',
    campo_descricao_curso: 'textarea[aria-label="Descrição do curso"]',
    campo_instrutor_nome: 'input[aria-label="Instrutor"]',
    campo_url_img_capa: 'input[aria-label="Url da imagem de capa"]',
    campo_data_inicio: 'input[aria-label="Data de início"]',
    campo_data_fim: 'input[aria-label="Data de fim"]',
    campo_numero_vaga: 'input[aria-label="Número de vagas"]',
    select_tipo_curso: 'input[aria-label="Tipo de curso"]',
    campo_endereco: 'input[aria-label="Endereço"]',
    campo_inscricao: 'input[aria-label="Link de inscrição"]',

    botao_cadastrar_curso: 'span.q-focus-helper ~ span.q-btn__content > span.block:contains("Cadastrar curso"):last'
}