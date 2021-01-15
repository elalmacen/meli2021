# Challenge Mercado Libre 2021

Solución:

https://www.dropbox.com/t/e7obalToOERJtbc8

## Requisitos

 - Node >= v13.10.1
 - Git

## Instalacion

    cd back 
    npm install
    cd ../
    cd front/meli
    npm install     

## Instrucciones

### Desde /back

    npm start

### Endpoints back

    http://localhost:3011/api/items?q=:q

    http://localhost:3011/api/items/:item

### Desde /front/meli

    npm start

### URL Front

    http://localhost:3000

### API test

    cd back/
    npm test

### Front test

    cd front/meli
    npm run test -- --coverage --watchAll=false --u
