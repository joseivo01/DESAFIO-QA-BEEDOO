# Beedoo Challenge - Software Quality Analyst

## Descrição do Projeto

Este projeto foi desenvolvido como parte do processo seletivo para o cargo de Analista de Qualidade de Software Júnior. O desafio foi dividido em duas etapas.
as infomações abaixo descrevem as userstories bem como a motivação de construção de cada uma delas, conforme descrito no link com as informações da etapa do teste:
### 1. User Story: Criar Curso

**Título:** Como Administrador, quero criar novos cursos no sistema para disponibilizar conteúdo educacional aos alunos e professores.

**Descrição:**

- **Como** Administrador,
- **Eu quero** criar um novo curso no sistema,
- **Para que** eu possa disponibilizar o conteúdo educacional adequado para os alunos e professores, com detalhes como descrição do curso, nome do instrutor e tipo de curso.

**Critérios de Aceitação:**

- O formulário de criação de curso deve permitir a inserção de:
  - **Nome do curso**: obrigatório, alfanumérico, maximo até 80 caracteres, minimo 3.
  - **Descrição do curso**: obrigatório, alfanumérico, sem limite de caracteres.
  - **Instrutor**: obrigatório, alfabetico, selecionável via select-box com opção de digitação.
  - **URL da capa**: opcional.
  - **Data de início**: obrigatória.
  - **Data de fim**: obrigatória, data não deve ser anterior à data de início.
  - **Número de vagas**: obrigatório, aceita apenas números.
  - **Tipo de curso**: obrigatório, via select-box.
  - **Endereço**: obrigatório, alfanumérico, exibido somente para cursos presenciais.
  - **URL de inscrição**: obrigatório, alfanumérico, exibido para cursos online.
- Após a criação, o curso deve ser redirecionado para a lista de cursos disponíveis.

**Decisões Tomadas:**

- **Foco na Qualidade**: Os critérios foram estabelecidos para garantir que os campos obrigatórios sejam validados, seguindo convenções de usabilidade e regras de negócio específicas. Isso assegura que o sistema atenda às necessidades dos usuários finais e mantenha a integridade dos dados.

---

### 2. User Story: Excluir Curso

**Título:** Como Administrador, quero excluir cursos antigos ou desatualizados para manter o conteúdo relevante no sistema.

**Descrição:**

- **Como** Administrador,
- **Eu quero** excluir cursos desatualizados ou desnecessários,
- **Para que** eu possa manter o sistema organizado e relevante para os usuários.

**Critérios de Aceitação:**

- O administrador deve poder selecionar e excluir um curso da lista.
- O sistema deve solicitar uma confirmação antes da exclusão.
- Após a exclusão, a lista de cursos deve ser atualizada, removendo o curso excluído.
- Uma notificação (pop-up) deve confirmar a exclusão bem-sucedida.

**Decisões Tomadas:**

- **Prevenção de Erros**: A confirmação antes da exclusão evita remoções acidentais de cursos importantes.
- **Feedback ao Usuário**: A notificação confirma ao administrador que a ação foi concluída com sucesso.

---

### 3. User Story: Listar Cursos Criados

**Título:** Como Administrador, quero visualizar uma lista de todos os cursos criados para gerenciar facilmente o conteúdo disponível no sistema.

**Descrição:**

- **Como** Administrador,
- **Eu quero** visualizar uma lista de todos os cursos criados,
- **Para que** eu possa gerenciar ou excluir cursos conforme necessário.

**Critérios de Aceitação:**

- A lista deve exibir todos os cursos com informações como título, data de criação e status (ativo/inativo).
- Deve ser possível ordenar e filtrar os cursos por título, data, ou status.
- A lista deve incluir links ou botões para editar ou excluir cursos diretamente.

**Decisões Tomadas:**

- **Facilidade de Gerenciamento**: A inclusão de filtros e ordenações permite ao administrador localizar e gerenciar cursos de forma eficiente.
- **Acesso Direto**: Links ou botões para edição e exclusão facilitam a manutenção dos cursos diretamente na lista.


## Links Importantes

- **Planilha do plano de Teste com as informações de execução:** [Planilha do google Docs Link](https://docs.google.com/spreadsheets/d/1-4aVVDsoIWcUGEztUQKS4h2q4ZRNH1q-b6iCuolKEWk/edit?usp=sharing)
- **Casos de testes(link de execução enexado a casa asserção):** [Documento do google Drive Link](https://docs.google.com/document/d/16QXPkHT-FwD58_MADrThGxlaxc8Fdkc59gDf-cBCGZY/edit?usp=sharing)

## Conclusão

Este projeto foi desenvolvido com foco na qualidade e na cobertura completa dos cenários de teste. A atenção aos detalhes e a documentação cuidadosa garantem que todas as funcionalidades foram testadas de maneira abrangente e que os resultados são claros e acionáveis.
