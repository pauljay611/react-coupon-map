# React Coupon Map

## Environments

- docker 20.10.0
- node.js 10.16.3

## setup

- clone project
- docker-compose up -d
- yarn
- yarn db:create
- yarn server:start

.env file

```
APP_DB=mysql-db-name
APP_DB_USERNAME=mysql-username
APP_DB_PASSWORD=mysql-password
GOOGLE_MAP_KEY=key-of-google-map
```

## create Table & seeds

- cd server && npx sequelize-cli model:generate --name Coupon --attributes ID:number,name:string
- edit models & migrates
- npx sequelize-cli db:migrate
- npx sequelize-cli seed:generate --name coupon
- edit seeders
- npx sequelize-cli db:seed:all
