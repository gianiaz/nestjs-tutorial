REGISTRY := "gianiaz/"

shell:
	@docker-compose run --rm node zsh

setup:
	@docker-compose run --rm node npm install

start:
	@docker-compose run --rm --service-ports node npm run start:dev

docker-build-node:
	@docker build -t ${REGISTRY}node docker/


bold := "\\033[1m"
normal := "\\033[0m"
boldunderline := "\\033[1m\\033[4m"
titlebg := "\\e[41m\\e[97m"


.SILENT:
