# GoBarber backend

![GoStack Bootcamp](https://camo.githubusercontent.com/d25397e9df01fe7882dcc1cbc96bdf052ffd7d0c/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732e706e67)

## Sobre 🚀 

Nesse projeto, foi criado um backend para o aplicativo GoBarber. Esta sendo realizado durante o bootcamp da Rocketseat.

Essa é uma backend lida com:

1. Cadastros de usuarios;
2. Autenticação de usuarios;
3. Conexão com o banco de dados;
4. Agendamentos;


## Instalação

Configure e crie o banco de acordo com a config:

```
{
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "docker",
    "database": "gobarber_gostack",
    "entities": [
        "./src/models/*.ts"
    ],
    "migrations": [
        "./src/database/migrations/*.ts"
    ],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }
 }
```

Utilize os comandos para instalar as dependencias:

```sh
npm install 
or
yarn
or
yarn instal
```

## Configuração para Desenvolvimento

Para executar a aplicação:

```
yarn dev:server
```

## Meta

Pedro Lisboa – [@Pedro-lbrt](https://www.linkedin.com/in/pedro-lbrt/...) – pegu_lisboa@hotmail.com

[https://github.com/pedro-lisboa/GoBarber-backend](https://github.com/pedro-lisboa/)
