up:
	docker compose up
down:
	docker compose down
clear:
	docker image rm $(docker image list -q)
lint:
	cd frontend && bun lint