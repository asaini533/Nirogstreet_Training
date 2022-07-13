# README #

This README would normally document whatever steps are necessary to get your application up and running.

* start node server

./start_api.sh dev 

* create database in postgres container

cd functions

sh ./create-db.sh dev 
(or)
sequelize db:create --env dev

* Run migration scripts
sh ./run_migration.sh
(or)
sequelize db:migrate --env dev

* Create migration file

sequelize migration:generate --name add-column-adhaar-users-table

* create seed file

sequelize seed:generate

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact