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

5. Levantar proyecto de Nest

```
yarn start:dev
```

6. Reconstruir la base de datos con la semilla

```
http://localhost:3000/api/seed
```

## Stack usado

- MongoDB
- Nest
- Docker
