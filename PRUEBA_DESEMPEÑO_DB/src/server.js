import 'dotenv/config';    //importa la configuracion dele dotenv para usar el .env
import app from './app.js';  //traemos todas las configuraciones que hicimos en app.js

const PORT = process.env.APP_PORT || 3000;  //define el purto

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// es para escichar las peticiones http
// recibe una funcion callback que se ejecuta cuando el sevidor arranca
