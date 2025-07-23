Feature: Cart

  Scenario: Usuário adiciona algum produto em seu carrinho
    Given que o usuário está logado
    When o usuário entra na página de produtos
    And digita o tipo de produto que está buscando
    And o usuário adiciona o produto no carrinho
    Then o produto aparece em seu carrinho