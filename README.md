Desafio para Desenvolvedor Frontend promovido pela EQI investimentos. <a href="https://github.com/eqi-investimentos/desafio-frontend">Link para o repositório e wireframes</a>

## Como executar e acessar o projeto
Requisitos: Docker, Docker-compose.

Clone <a href="https://github.com/eqi-investimentos/desafio-fake-api">este repositório</a> criado para o desafio e siga as instruções do README.

Após executar a API abra um terminal na pasta do projeto e execute:
```bash
docker-compose up
```
O projeto estará disponível para acesso no navegador no http://localhost:3005 (pois a porta 3000 estará ocupada com a API).

## Quais diferenciais foram implantados no projeto?

Dentre os especificados no README do desafio:
 - containerização com Docker-compose.
 - Responsividade básica.
 - Cuidados com otimização.
 - Testes unitários no front-end com Jest.

Para executar os testes unitários execute:
```bash
docker-compose exec frontend-challenge sh -c "yarn test"
```
Foram utilizadas, para conclusão do projeto, as seguintes ferramentas:
 - Framework: Next.js.
 - Estilização: SASS.
 - Containerização: Docker-compose.
 - Consumo da API: Axios.
 - Gráficos: Highcharts.js.
 - Linguagem principal: React-Typescript.
 - Testes: Jest e React-Testing-Library.
