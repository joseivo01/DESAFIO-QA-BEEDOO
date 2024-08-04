const utils = require("../../support/utils")
const CadastroPage = require("../../pages/cadastro_page")

const cadastro_page = new CadastroPage

describe('cadastro Tests', () => {
  let nome_curso, descricao, instrutor, url_page, tipo_curso, endereco, inscricao;

  beforeEach(() => {
    cadastro_page.visit()
    cadastro_page.botao_cadastrar_curso()

    nome_curso = utils.generate_string('curso');
    descricao = utils.generate_string('descricao');
    instrutor = utils.generate_string('Julio')
    url_page = 'https://encurtador.com.br/fHcec' //url encurtada
    tipo_curso = utils.generate_string('Presencial')
    endereco = utils.generate_string('Antonio Castro,587')
    inscricao = utils.generate_string('www.google.com')
  });

  it('Deve cadastrar um curso com sucesso', () => {
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
    cadastro_page.pop_up_contem('Curso cadastrado com sucesso!')
  });

  it('Deve cadastrar um curso com 3 caracteres', () => {
    cadastro_page.campo_curso("Olá")
    cadastro_page.campo_descricao(descricao)
    cadastro_page.campo_instrutor(instrutor)
    cadastro_page.campo_url_page(url_page)
    cadastro_page.campo_data_inicio('2024/07/01')
    cadastro_page.campo_data_fim('2024/08/04')
    cadastro_page.campo_numero_vaga('25')
    cadastro_page.campo_tipo_curso('Presencial')
    cadastro_page.campo_endereco(endereco)
    cadastro_page.botao_cadastrar_curso()
    cadastro_page.pop_up_contem('Curso cadastrado com sucesso!')
  })
  it('Deve cadastrar um curso com 80 caracteres', () => {
    nome_curso = utils.generate_string_exact("", 80)
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
    cadastro_page.pop_up_contem('Curso cadastrado com sucesso!')
  })

//   Estes cenários abaixo irão falhar, escolhi não desenvolvelos por escolha propria.
//   Caso desejem que eu desenvolva posso fazer sem problemas

//   it('Deve cadastrar um curso com com campo nome de curso em branco', () => {})
//   it('Deve cadastrar um curso com sem campo nome', () => {})
//   it('Deve cadastrar um curso com data final anterior a data inicio', () => {})
//   it('Deve cadastrar um curso com sucesso', () => {})
  
});
  