## Instructions

## 1- Create folder
create git ignore file - .gitignore
generate package.json - npm init -y
install packages - npm i ___ 
    express
    dotenv
    mysql2
    sequelize
    handlebars
    express-handlebars

## 2- Create db folder
create schema.sql file
    - Drop db if exists, create db
fire off in workbench

## 3- Create .env file
    - DB_NAME
    - DB_USER
    - DB_PASSWORD

## 4- Create connection to database
- create config folder
- create index.js file
    - require sequelize and .env file
    - create connection to database
        - db environmental variables
        - configuration of database


    - require sequelize <const Sequelize = require('sequelize')> 
    - require env file (allow file to read environmental variables)
        <require('dotenv').config()>
    - connect to database
        <const sequelize = new Sequelize ()>
        - takes a few params: name of db, user, password
            - declare environmental variables
                <process.env.DB_NAME>
        - pass a configuration object = config to database
                <{ host: 'localhost', dialect: 'mysql', port: 3306 }>
            - export file

## 5- Create models
- create models folder
- create model file - User.js
    - require sequelize variables
        < const { Model, DataTypes } = require('sequelize') >
    - require sequelize connection
        < const sequelize = require('../config') >
    - create User class to extend model class from sequelize
    - create User table
        < User.init({}, {}) >

User table takes two params
1st object - columns
2nd object - configuration to db (which db will this table be used for)
- sequelize, timestamps, freezeTableName, modelName

Export User class

## 6- Test that everything works
create server.js file
require necessary things:
    - express
    - express-handlebars
    - require User model (temporarily)
        (see if it creates table in our db)
    - database
    - handlebars

create app
create port

use handlebars as templating engine
    - tell node we're using handlebars as our templating engine
    - configures handlebars as the view engine

configure body parser

run server and see if everything works
















































