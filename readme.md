REST API do projeto integrador Digital House - Locar

Padrão do .env:

# .env file
DBUSERNAME=usuariodobanco
PASSWORD=senha
DATABASE=bancodedados
HOSTADDRESS=127.0.0.1
LOGGING=false

//Logging=true se quiser o sequelize em modo verboso.


Na primeira execução, execute no seu banco de dados mysql o seguinte comando:
// create schema dhlocar;

Em seguida, execute na pasta raiz do projeto:
npm install
npm start

Faça qualquer get do arquivo testes.http (por enquanto é assim).

Após a resposta do get, encerre o node com CTRL+C.
Mova o .env para a pasta /src e rode os seguintes comandos, a partir da pasta raiz do projeto:
// npm install --save-dev sequelize-cli
// cd src
// npx sequelize-cli db:seed:all
// cd ..

Devolva o .env para onde estava e:
// npm start


Agora faça o login, usando a requisição no arquivo testes.http, e para as outras requisições (que pedem autenticação) use o token gerado.

Esse processo será facilitado em breve.

Ainda não descrevi quais endpoints precisam de token.

Para acessar o repositório do React Front, acesse:https://github.com/lrNas/React-ProjetoIntegrador/
