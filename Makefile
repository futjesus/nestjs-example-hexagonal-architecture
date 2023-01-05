database-up:
	docker run -d --name postgresql -p 5432:5432 -e POSTGRES_USER=database -e POSTGRES_DB=database -e POSTGRES_PASSWORD=database postgres
	docker run -d --name mysql -p 3306:3306 -e MYSQL_DATABASE=database -e MYSQL_ROOT_PASSWORD=database mysql