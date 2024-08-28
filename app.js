const express = require('express');
const app = express();
const port = 3000;

// Middlewares y rutas
const horaMiddleware = require('./middlewares/horaMiddleware');
const validarHora = require('./middlewares/validarHora');
const indexRoute = require('./routes/index');
const endRoute = require('./routes/endroute');

// Middleware para todas las rutas
app.use(horaMiddleware);

// Rutas específicas
app.use('/endroute', validarHora, endRoute);
app.use('/', indexRoute);

/* Se puede combinar middlewares y rutas dentro de un solo app.use, pero el orden importa. Por ejemplo:
app.use('/endroute', horaMiddleware, validarHora, endRoute);
 En este caso, tanto horaMiddleware como validarHora se ejecutan en esa secuencia antes de llegar a endRoute. 
 Solo se pasa a endRoute si ambos middlewares permiten la continuación.*/


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});