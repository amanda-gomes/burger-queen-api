# Burger Queen - API com Node.js

## Índice

- [1. Preâmbulo](#1-preâmbulo)
- [2. Resumo do projeto](#2-resumo-do-projeto)
- [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
- [4. Critérios de aceitação mínimos do projeto](#5-critérios-de-aceitação-mínimos-do-projeto)
- [5. Dicas e leituras complementares](#6-dicas-e-leituras-complementares)
- [6. HTTP API Checklist](#7-http-api-checklist)

## 1. Preâmbulo

Um pequeno restaurante de hambúrgueres, que está crescendo, precisa de um
sistema através do qual ele possa receber pedidos usando um _tablet_ e enviá-los
para a cozinha para que eles sejam preparados de forma eficiente.

Nossa cliente nos pediu para desenvolver uma API que possa ser integrada com uma interface,
na qual outra equipe de desenvolvedoras está trabalhando.

## 2. Resumo do projeto

Por uma API, neste caso, nos referimos a um _servidor web_, que é
basicamente um programa que _escuta_ uma porta de rede, através da qual
podemos enviar _requisições_ (_request_) e obter _respostas_ (_response_).

Um servidor web deve _gerenciar_ as requisições recebidas e produzir respostas àquelas
requisições que serão enviadas de volta para o _cliente_. Quando falamos sobre
_aplcações de servidor_, isso implica uma arquitetura _cliente / servidor_,
onde o cliente é o programa que faz as requisições através de uma rede (por
exemplo, o navegador, cURL, etc), e o _servidor_ é o programa que recebe
essas requisições e respostas.

O [Node.js](https://nodejs.org/) nos permite criar servidores Web super eficientes
de uma forma relativamente simples, tudo isso usando JavaScript!

A cliente nos deu um [link para a documentação](https://documenter.getpostman.com/view/1721181/RWgozeom)
que especifica o comportamento esperado da API que iremos disponibilizar por 
HTTP. Lá você pode encontrar todos os detalhes de quais _endpoints_ você deve 
implementar na aplicação, quais parâmetros são esperados, o que eles devem 
responder, etc.

## 3. Objetivos de aprendizagem

O principal objetivo de aprendizagem é ganhar experiência com o **Node.js**
como uma ferramenta para desenvolver _aplicações de servidores_, junto com uma
série de ferramentas comuns usadas neste tipo de contexto (Express como
framework, MongoDB ou MySQL como banco de dados, ferramentas de autenticação, 
etc).

Neste projeto você irá construir um servidor web que deve _servir_ `JSON`
via `HTTP` e implementá-lo em um servidor na nuvem.

Para completar o projeto, você terá que se familiarizar com conceitos como
**rotas** (_routes_), **URLs**, **HTTP** e **REST** (verbs, request, response, headers,
body, status codes...), **JSON**, **JWT** (_JSON Web Tokens_), **conexão com um banco de dados**, **variáveis de ambiente**, **deployment**, etc.

## 4. Critérios mínimos de aceitação do projeto

### 4.1 API

Segundo o estabelecido pela [documentação](https://documenter.getpostman.com/view/1721181/RWgozeom)
entregue por nossa cliente, a API deve conter os seguintes endpoints:

#### 4.1,1 `/`

* `GET /`

#### 4.1.2 `/users`

* `GET /users`
* `GET /users/:uid`
* `POST /users`
* `PUT /users/:uid`
* `DELETE /users/:uid`

#### 4.1.3 `/products`

* `GET /products`
* `GET /products/:productid`
* `POST /products`
* `PUT /products/:productid`
* `DELETE /products/:productid`

#### 4.1.4 `/orders`

* `GET /orders`
* `GET /orders/:orderid`
* `POST /orders`
* `PUT /orders/:orderid`
* `DELETE /orders/:orderid`

### 4.2 CLI

A cliente solicitou que o aplicativo tenha um comando **`npm start`**
que deve ser utilizado para executar a nossa aplicação node e que também pode
receber informações de configuração, como a porta na qual ouvir, em que
banco de dados conectar, etc. Estes dados de configuração serão diferentes entre
ambientes diferentes (desenvolvimento e produção, por exemplo).

## 5. Dicas e leituras complementares

* [Express](https://expressjs.com/)
* [Heroku](https://docs.docker.com/)
* [Postman](https://www.getpostman.com)
* [Variáveis de ambiente - Wikipedia](https://pt.wikipedia.org/wiki/Vari%C3%A1vel_de_ambiente)
* [`process.env` - Node.js docs](https://nodejs.org/api/process.html#process_process_env)
* TODO: providers de VPS recomendados.
* [ssh](https://pt.wikipedia.org/wiki/Secure_Shell)
* [Swagger](https://swagger.io/)

***

## 6. HTTP API Checklist

### 6.1 `/`

* [ ] `GET /`

### 6.2 `/users`

* [ ] `GET /users`
* [ ] `GET /users/:uid`
* [ ] `POST /users`
* [ ] `PUT /users/:uid`
* [ ] `DELETE /users/:uid`

### 6.3 `/products`

* [ ] `GET /products`
* [ ] `GET /products/:productid`
* [ ] `POST /products`
* [ ] `PUT /products/:productid`
* [ ] `DELETE /products/:productid`

### 6.4 `/orders`

* [ ] `GET /orders`
* [ ] `GET /orders/:orderid`
* [ ] `POST /orders`
* [ ] `PUT /orders/:orderid`
* [ ] `DELETE /orders/:orderid`