#!/bin/bash

echo "start building"

yarn workspace server build 

echo "docker compose up"

sudo curl -L "https://github.com/docker/compose/releases/download/1.28.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose up -d

echo "start db"

yarn db:create

echo "start server"

yarn workspace server node ./dist/src/server.js