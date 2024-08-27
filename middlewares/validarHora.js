const validarHora = (req, res, next) => {
    const hora = req.horaActual;
  
    hora >= 12 && hora <= 24  //Verificar si la hora (req.horaActual) está en el rango
    ? next() //Si es válida, llama a next() para pasar al siguiente middleware o ruta (endRoute).
    : res.send(`
        <h1>Aún no son las 12:00 hrs</h1>
        <a href="/">Volver a la página principal</a>
      `);
    }

  module.exports = validarHora

/*
  const validarHora = (req, res, next) => {
    const hora = req.horaActual;
  
    hora >= 12 && hora <= 24 
    ? next() // Continúa a la ruta /endroute
    : res.locals.mensaje = 'Aún no es la hora, espera hasta las 12:00 hrs para entrar';  // Configurar el mensaje solo si la hora no es válida
    return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }

  module.exports = validarHora
  */