.PHONY: up down console

MAKEPATH := $(abspath $(lastword $(MAKEFILE_LIST)))
PWD := $(dir $(MAKEPATH))

up:
	docker-compose up
	#docker exec -it meli-node-app npm install
	#docker exec -it meli-node-app npm start

down:
	docker-compose down

console:
	docker exec -it meli-node-app bash