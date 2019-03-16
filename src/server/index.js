const { server, port } = require('./server');

server.listen(port, () => {
  console.log(`Server is listening on: ${port}`);
});
