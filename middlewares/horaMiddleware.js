const horaMiddleware = (req, res, next) => {
    const now = new Date();
    const hour = now.getHours(); // Obtiene la hora actual
    const minutes = now.getMinutes()
    const formattedHour = hour.toString().padStart(2, '0'); //Formatea la hora y los minutos para tener un formato de dos dígitos.
    const formattedMinuts = minutes.toString().padStart(2, '0');
    const horaActual = `${formattedHour}:${formattedMinuts}`;
    req.horaActual = horaActual //Agregar la horaActual al obj req
    next();
  };

  module.exports = horaMiddleware