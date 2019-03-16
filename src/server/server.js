const bodyParser = require('body-parser');
const express = require('express');
const uuid = require('uuid/v4');

const server = express();
const port = 8000;

const ideas = {
  ideas: [{
    id: uuid(),
    'created_date': '10/11/2018',
    title: 'My great idea',
    body: 'More info'
  },
  {
    id: uuid(),
    'created_date': '10/11/2018',
    title: 'Eureka!',
    body: 'I found it'
  },
  {
    id: uuid(),
    'created_date': '10/11/2018',
    title: 'New startup',
    body: 'Something ingenious'
  }]
};

server.use(bodyParser.json());

server.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.get('/ideas', (request, response) => {
  response.status(200);
  response.json(ideas);
});

server.get('/ideas/new', (request, response) => {
  const date = new Date();
  const createdDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  response.status(200);
  response.json({
    id: uuid(),
    created_date: createdDate
  });
});

server.post('/idea/update', (request, response) => {
  response.status(200);
  response.send();
});

server.post('/idea/delete', (request, response) => {
  response.status(200);
  response.send();
});

module.exports = {
  server,
  port
};
