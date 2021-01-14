# Challenge Mercado Libre 2021

Solución:

https://www.dropbox.com/t/5sPQDqbGCDa0AMBE

## Requisitos

 - Node >= v13.10.1
 - Git

## Instalacion

    cd front/meli
    npm install
    cd ../..
    cd back 
    npm install

## Instrucciones

### Desde /back

    npm start

### Endpoints back

    http://localhost:3011/api/items?q=q

    http://localhost:3011/api/items/:item

### Desde /front/meli

    npm start

### URL FRONT

    http://localhost:3000

### API test

    cd back/
    npm test

### Front test

    npm run test -- --coverage --watchAll=false --u
