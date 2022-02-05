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

- create model index.js file
    - require User class
    - export an object that contains the User class
    (pulls out any of our classes)

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

require packages, database

## 7- Create routes
index.js 
    - require router and call .Router()
server.js
    - require routes folder
    - set router after body parser

create apiRoutes
- copy lines inside index.js
- paste into apiRoutes index.js

routes > index.js
- require apiRoutes
- prepend /api to every route declared in apiRoutes

create userRoutes inside apiRoutes folder
- copy what's in apiRoutes file

apiRoutes > index.js
- require userRoutes
- prepend /users to every route

userRoutes > index.js
- logic will go in controller

## 8- Create controllers
create folder 'controllers'
create userController.js file

create a variable that pulls out the User model, then grab the index inside of the models folder

module.exports - export object with many functions/methods

createUser:
- pull out username, email + pw from req.body
- check if those exist
- try catch to attempt to create a user

getAllUsers:
- try catch to get all users

require methods within userController file in userRoutes > index.js
- create route for get and post requests from userController

## 9- Test that routes work
start server and test routes on postman
- create a post request to create a user

## 10- Create views (front end)
create views folder
create layouts folder within views

create file in layouts: main.handlebars
- create html
- add {{{ body }}} to <body>

create allUsers.handlebars file in views folder

update userController getAllUsers function 
- don't return json
- return res.render('') 
    - first param: name of handlebars file you want to render it to
    - second param: an object with the data you want this template to have access to the moment it renders

create another view
singleUser.handlebars
- create template for single user page
- create function to get user by id (in userController)
- wire up controller to your route (userRoutes)

Build the view
Build the controller
Wire up the controller to your route


main.handlebars - single page application
- it's the main template that will be rendered no matter what

res.render - will look in views folder for a template with the same name declared in endpoint function
- will inject variables we passed in
- can access any variables passed in

will take template and render in the body {{{body}}} and render template to the page








































