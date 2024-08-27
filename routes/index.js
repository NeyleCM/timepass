const express = require('express');
const router = express.Router(); // Definir un router de Express para manejar la ruta /.

router.get('/', (req, res) => {
  const hora = req.horaActual; //Mostrar la hora actual y un botón que redirige a /endroute.
  res.send(`
    <h1>Bienvenido</h1>
    <p>La hora actual es: ${hora} </p> 
    <a href="/endroute"><button>Entrar</button></a>
  `);
});

module.exports = router;


/*
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const hora = req.horaActual;
  const mensaje = req.query.mensaje ? decodeURIComponent(req.query.mensaje) : ''; // Solo mostrar si existe
  const validarMensaje = mensaje ? `<p style="color: red;">${mensaje}</p>` : ''
  res.send(`
    <h1>Bienvenido</h1>
    <p>La hora actual es: ${hora} </p>
    ${validarMensaje}
    <a href="/endroute"><button>Entrar</button></a>
  `);
});

module.exports = router;*/