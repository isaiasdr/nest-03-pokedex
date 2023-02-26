<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# Execute in development

1. Clone the repository
2. Execute
```
yarn install
```
3. Nest CLI installed
```
npm i -g @nestjs/cli
```

4. up the database
```
docker-compose up -d
```

5. copy __.env.template__ to __.env__ and set enviroment variables needed
```
cp .env.template .env
```

6. Execute the app in development mode:
```
yarn start:dev
```

7. seed database for tests
```
http://localhost:3000/api/v2/seed
```

## Stack used
* MongoDB
* Nest