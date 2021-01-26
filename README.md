# React Express Typescript Example

> A simple react express typescript example with google map app

[demo](https://react-express-typescript-example.vercel.app/)

## Setup

- clone project
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
  - local -> heroku login -> heroku local
  - push to master
    - deploy to stage
  - manual to production
- client
  - vercel
  - push to master
    - deploy to stage
    - manual to production
