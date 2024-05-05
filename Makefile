up:
	sudo docker compose up
down:
	sudo docker compose down
clear:
	sudo docker image rm $(sudo docker image list -q)