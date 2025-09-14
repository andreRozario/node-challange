# Desafio Curso Full Cycle 3.0

Criar uma imagem do docker capaz de criar uma aplicação Node JS que seja acessada via proxy reverso com NGinx e que tenha um banco de dados MySQL.

A abordagem que eu utilizei foi:

- Usar a imagem nginx:1.15.0-alpine para criar a imagem de base do proxy reverso;
- Usar a imagem do node:24 para criar a imagem de base da aplicação;
- Usar o multi-stage build para começar um novo stage do build que executará o arquivo gerado;

## Como executar?

- O comando deve ser executado dentro da pasta node:

```bash
  cd node
```

- Faça o build o projeto usando:

```bash
  docker compose up -d --build
```

- A aplicação ficará disponível em:
```bash
  http://localhost:8080/
```