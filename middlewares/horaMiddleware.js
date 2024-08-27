const hourMiddleware = (req, res, next) => {
    const now = new Date();
    const hour = now.getHours()
    const minuts = now.minuts()
    const seconds = now.seconds()

    // ---- >   Formatear la fecha para asegurarse de que siempre tiene dos dígitos
  
    /*padStart(2, '0'): Rellenar la cadena con ceros si es necesario
  El método .padStart(targetLength, padString) rellena la cadena original con el carácter especificado (padString) al principio de la cadena, hasta que alcance la longitud deseada (targetLength).
  En este caso:
  targetLength es 2, lo que significa que queremos que la cadena tenga al menos 2 caracteres.
  padString es '0', que es el carácter que se usará para rellenar la cadena si es necesario.*/
  
    // ---- >   Formatear la fecha para asegurarse de que siempre tiene dos dígitos
    const formattedHour = hour.toString().padStart(2, '0');
    const formattedMinuts = minuts.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
  
    const currentTime = `${formattedHour}/${formattedMinuts}/${formattedSeconds}`;
    req.dateType = `Hoy es ${currentTime}`;
  
        console.log(currentTime)
    /* Operador ternario para determinar si es Navidad o cuántos días faltan
    
    res.locals.isChristmas = day === 25 && month === 12;
    res.locals.daysUntilChristmas = !res.locals.isChristmas
      ? Math.ceil((new Date(year, 11, 25) - now) / (24 * 60 * 60 * 1000))
      : 0;
  */
  
    // Determinar si es Navidad
    const isChristmas = day === 25 && month === 12;
    res.locals.isChristmas = isChristmas;
  
    // Calcular los días restantes para Navidad
    const christmasDate = new Date(year, 11, 25); // 25 de diciembre
  
    // Si ya ha pasado el 25 de diciembre este año, calcular para el próximo año
    if (now > christmasDate) {
      christmasDate.setFullYear(year + 1);
    }
  
    const miliseconds = christmasDate - now;
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    res.locals.daysUntilChristmas = Math.ceil(miliseconds / millisecondsPerDay);
  
    next();
  };
  
  module.exports = hourMiddleware;