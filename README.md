# Task-Manager

![Badge CONCLUÍDO](http://img.shields.io/static/v1?label=STATUS&message=CONCLUÍDO&color=GREEN&style=for-the-badge)

API criada para o gerenciamento de tarefas, possibilitando a criação, visualização, atualização e remoção de cada tarefa. Os dados são armazenados no banco de dados não relacional MongoDB.

## Instalação

Realizar clone do projeto

```shell
git clone https://github.com/emeath/loja-anime.git
```

Fazer a instalação das dependências do projeto

```shell
npm install
```

Criar um arquivo .env e declarar as variáveis de ambiente de acordo com o arquivo "env.example"

## Uso da API

Para iniciar a aplicação, utilizar no terminal o comando:

```shell
npm run dev
```

Conectar com o Postman na porta de acordo com a sua variável de ambiente


## API Endpoints

| Verbos HTTP | Endpoints | Ação |
| --- | --- | --- |
| POST | /api/user/signup | Registra um novo usuário |
| POST | /api/user/login | Realiza o login com um usuário já criado |
| POST | /api/blog/add | Cria um novo blog |
| GET | /api/user | Retorna todos os usuários |
| GET | /api/blog | Retorna todos os blogs |
| GET | /api/blog/:id | Retorna o blog indicado pelo id |
| GET | /api/blog/user/:id | Retorna o usuário indicado pelo id |
| PUT | /api/blog/update/:id | Atualiza o blog indicado pelo id |
| DELETE | /api/blog/:id | Deleta o blog indicado pelo id |


## Tecnologias Usadas

* [NodeJS](https://nodejs.org/) 
* [ExpressJS](https://www.expresjs.org/)
* [Nodemon](https://nodemon.io/)
* [Postman](https://www.postman.com/)
* [MongoDB](https://www.mongodb.com/) 
* [Mongoose ODM](https://mongoosejs.com/)
