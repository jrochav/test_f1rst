Feature: API Trello

  Scenario: Buscar ação e validar campo name da lista
    Given que a API do Trello está disponível
    When eu faço um GET na API Trello para a ação "<env>"
    And o campo "data.list.name" deve conter algum valor
    Then o status code da resposta deve ser 200