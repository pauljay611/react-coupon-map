# React Express Typescript Example

> A simple react express typescript example with google map app

[demo](https://react-express-typescript-example.vercel.app/)

## Setup

- git clone https://github.com/pauljay611/react-express-typescript-example.git
- docker-compose up -d
- yarn
- yarn db:create
- yarn server:start
- yarn client:start

.env file

```
APP_DB=mysql-db-name
APP_DB_USERNAME=mysql-username
APP_DB_PASSWORD=mysql-password
GOOGLE_MAP_KEY=key-of-google-map
```

## Create Table & seeds

- see https://sequelize.org/master/manual/migrations.html

## Deployment

- server
  - heroku
  - push to sta/server pro/server
- client
  - vercel
  - push to sta/client pro/client
