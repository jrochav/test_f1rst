Feature: Purchase

  Scenario: Usuário valida o produto incluído no carrinho na tela de pagamentos
    Given que o usuário está logado
    When o usuário entra em seu carrinho
    And valida se os produtos conferem com o que ele inseriu
    Then o usuário segue para o pagamento