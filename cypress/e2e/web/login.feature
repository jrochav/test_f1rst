Feature: Login

  Scenario: Usuário faz login com êxito
    Given que o usuário entre na página de login
    When ele informa seus dados de acesso corretamente
    Then o usuário está conectado com êxito na tela inicial