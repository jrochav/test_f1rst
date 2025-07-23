# Testes Automatizados - Projeto QA Web

Este repositório contém automações de testes end-to-end utilizando Cypress com BDD (Cucumber), voltado para a validação funcional de uma aplicação web e validação de Get na API.

## Tecnologias Utilizadas

- [Cypress]
- [Cucumber]
- [JavaScript]
- [Node.js]
- `.env`

## Pré-requisitos

Antes de iniciar, você precisa ter as seguintes ferramentas instaladas:

- [Node.js]
- [npm]
- [Git]

## Instalação do Projeto

```bash
# Clone o repositório
git clone https://github.com/jrochav/test_f1rst.git

# Acesse o diretório do projeto
cd test_f1rst

# Instale as dependências
npm install
```

## Variáveis de Ambiente
Existe um arquivo '.env' onde os dados estão configurados, eles podem ser alterados para valores validos e continuará funcionando. O '.env.example', deve levar apenas o exemplo de como montar o '.env' por se tratar de valores sensiveis, porém, por se tratar de um teste, os valores estão sendo informados e devem ser copiados no '.env'.

## Cenários de Teste

1. **Login de usuário válido**  
   Verifica se o usuário consegue acessar o sistema com credenciais válidas.

2. **Busca de produto através do input**  
   Testa a funcionalidade de pesquisa de produtos no campo de busca.

3. **Inserir produto no carrinho**  
   Adiciona o produto selecionado ao carrinho de compras.

4. **Validar o carrinho antes da compra**  
   Confirma se o produto e a quantidade no carrinho estão corretos. Se o step do cart rodar mais de uma vez, leva a um aviso e erro para o usuário, pois ele só havia incluido uma peça.

5. **Validar API e trazer conteúdo**  
   Realiza requisição na API Trello e verifica campos da resposta.

**Observação:**
Os testes seguem o padrão solicitado no teste, porém, podem ser executados individualmente.

## Como Executar os Testes
```bash
npx cypress open (via interface cypress)
```

## Autor
```bash
João Victor Rocha
QA Senior | Automação de Testes
https://www.linkedin.com/in/jrochav
```
