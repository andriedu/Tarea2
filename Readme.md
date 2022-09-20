//Tener postgres instalado o una imagen ejecutada
//comando para correr imagen
docker build -t tarea1 .
docker run --rm --name vmtarea -d -p 3000:3000 tarea1
//direccion de users
http://localhost:3000/users