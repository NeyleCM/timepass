const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(
  // Operador ternario para determinar el mensaje
'<h1>¡Feliz Navidad!</h1>'
)

});
