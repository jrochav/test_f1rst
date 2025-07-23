Feature: Search

  Scenario: Usuário realiza a busca de algum produto
    Given que o usuário está logado
    When o usuário entra na página de produtos
    And digita o tipo de produto que está buscando
    Then o usuário visualiza o produto que pesquisou