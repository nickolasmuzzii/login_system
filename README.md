# login_system
## Creating a login and logon system using node.js and Angular

### Montar uma tela de cadastro de usuário, onde será utilizado:
    - Angular como framework para o frontend, e utilizando os componentes da biblioteca Angular Material (biblioteca nativa do angular).
    - Backend utilizando o typeorm em Nodejs implementando conexão com banco mysql.
### Os campos do banco e tela respectivamente serão:

    - Nome (utilizar componente de campo do angular material)

    - E-mail (utilizar componente de campo com validação de e-mail do angular material)

    - Data de nascimento (utilizar componente de data do angular material)

    - CEP (utilizar componente de campo do angular material e aplicar máscara) e Efetuar busca CEP

    - Endereço (utilizar componente de campo do angular material)

    - Cidade (utilizar componente de campo do angular material)

    - Estado (utilizar componente de campo do angular material)

    - Senha (utilizar componente de campo do angular material)

## Desafio:
- Pode aplicar a responsividade utilizando flex-layout ou bootstrap, caso tenha conhecimento sobre.

### Para rodar
- Entrar na pasta ui -> npm install
- para rodar o front end -> ng s
- criar um database em mysql
- colocar no .env os dados do seu database
- Na pasta api rodar o seguinte comando -> yarn  typeorm migration:run --dataSource src/ormconfig.ts
- para rodar o backend -> npm run dev

# Detalhes do sistema
- Realizar cadastro no sistema
- Realizar login no sistema
- Visualizar informações cadastradas
- Rota de listagem não permite acesso caso não possua cadastro
- Ao digitar o cep no input e clicar fora uma função
    preenche os outros campos do form de endereço
# Env
- O modelo do arquivo .env está dentro da pasta da api, basta adicionar suas informações la.
