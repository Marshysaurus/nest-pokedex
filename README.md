<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
  <a href="http://mongodb.com" target="blank"><img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" width="200" alt="MongoDB Logo" /></a>
  <a href="https://www.docker.com/" target="blank"><img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" width="200" alt="Docker Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Instalar dependencias del proyecto

```
yarn install
```

3. Tener Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```
docker-compose up -d
```

5. Clonar el archivo **.env.template** y renombrar la copa a **.env**

6. Llenar las variables de entorno definidas en el **.env**

7. Ejecutar la aplicación en dev:

```
yarn start:dev
```

8. Reconstruir la base de datos con la semilla

```
http://localhost:3000/api/seed
```

## Stack usado

- MongoDB
- Nest
- Docker
