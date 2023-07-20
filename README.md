# Task-Manager

![Badge CONCLUÍDO](http://img.shields.io/static/v1?label=STATUS&message=CONCLUÍDO&color=GREEN&style=for-the-badge)

API criada para o gerenciamento de tarefas, possibilitando a criação, visualização, atualização e remoção de cada tarefa. Os dados são armazenados no banco de dados não relacional MongoDB.

![Task-API](https://github.com/mateus-montagnini/Task-Manager/assets/83839165/3584a821-b031-489f-86c3-7dbb271a0d29)


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
| POST | /api/v1/tasks | Registra uma nova tarefa |
| GET | /api/v1/tasks | Retorna todas as tarefas |
| GET | /api/v1/tasks/:id | Retorna uma única tarefa |
| PATCH | /api/v1/update/:id | Atualiza a tarefa indicada pelo id |
| DELETE | /api/v1/:id | Deleta a tarefa indicado pelo id |


## Tecnologias Usadas

* [NodeJS](https://nodejs.org/) 
* [ExpressJS](https://www.expresjs.org/)
* [Nodemon](https://nodemon.io/)
* [Postman](https://www.postman.com/)
* [MongoDB](https://www.mongodb.com/) 
* [Mongoose ODM](https://mongoosejs.com/)
