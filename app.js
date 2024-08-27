const express = require('express');
const app = express();
const routes = require('./routes');
const middlewares = require('./middlewares');

// Usa el middleware en la ruta principal
app.use('/', middlewares, routes);

app.listen(3000, () => {
  console.log('El servidor está escuchando en el puerto 3000');
});
