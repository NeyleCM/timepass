const express = require('express');
const router = express.Router(); // Definir un router de Express para manejar la ruta /endroute.

router.get('/', (req, res) => {
  res.send(`
    <h1>RUTA FINAL</h1>
    <p>¡Bienvenido a la ruta final!</p>
  `);
});

module.exports = router;