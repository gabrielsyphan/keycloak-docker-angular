# Keycloak + Postgres + Docker + Angular #

## Dependencies ##
To run this project, you should run the docker first, open the keycloak page and create:
* Realm: demo
* Client: app-demo
* Any user, so you can sign in

## Initialization ##
* Open this folder on your terminal
* Run "docker-compose up -d"
* Enter the keycloakConnect folder
* Run "npm i"
* Still in the same folder, run "ng server"

## URLs ##
* Angular project will run in "http://localhost:4200"
* Keycloak will run in "http://localhost:8080"
* Postgres will run in "http://localhost:5432"
* PgAdmin will run in "http://localhost:9090"

## Access ##
Pgadmin email: admin@admin.com
Pgadmin password: root
Postgress server to connect pgadmin: postgres_container

Postgres user: postgres
Postgres password: admin
