#!/bin/bash

echo "start building"

rm -rf ./node_modules 

echo "yarn"

yarn 

echo "build"

yarn workspace server build 

echo "start db"

yarn db:create

echo "start server"

yarn workspace server node ./dist/src/server.js