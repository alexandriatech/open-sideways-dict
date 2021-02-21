# [Open Sideways Dictionary](https://sidewaysdictionary.com)

a clone and open source for [sideways dictionary](https://sidewaysdictionary.com/#/).

### Some tech/stack we use

- React
- React-router-dom
- SCSS (modules)
- Apollo (both client and server)
- NodeJS (v10 for some reason higher versions don't connect to db)
- Express
- Heroku
- PostgreSQL
- Sequelize

### proposed erd tables

https://app.lucidchart.com/invitations/accept/22b5790c-c49b-4d64-ac9e-cb95a391a874

### Install

#### Server

```
# from the root folder
yarn install
cp .env.example ./server/.env
# fill out ./server/.env
#if you don't have a db made
yarn server db:create:all
yarn server db:migrate:all
yarn server db: seed
yarn start:server
```

#### Client

```
# from the root (it should have been installed before)
yarn install
yarn start:server
```
