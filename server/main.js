// Importando express

import Express from 'express'
import path from 'path';
//Importar enrutadores
import adminRoute from './routes/admin.route.js';
import homeRoute from './routes/home.route.js';

//Importando helper
import {ROOT_DIR} from './helpers/path.helpers.js';

console.log(`Variable de entorno: ${process.env.NODE_ENV}`)

//Crear una instancia de Express
const app = Express();  //(req,res,next)=> {} event handler

// Insertando Middleware para la lectura de datos de un cliente
app.use(Express.urlencoded({extended: false}));

// Loggin de peticiones
app.use((req,_,next)=>{
    console.log(`📞 Se ha realizado la petición: "${req.method} : ${req.path}"`);
    next();
  });

//Se agrega a la aplicacion la ruta Admin
app.use('/admin',adminRoute);

//Se agrega a la aplicacion la ruta home
app.use(homeRoute);

//404 error
app.use((req,res,next) => {
//  
const ErrorfilePath = path.join(ROOT_DIR, "server","views","error-404.html");
res.status(404).sendFile(ErrorfilePath);
});


/** 
 * codigo de Emojies
 * Ref: https://www.w3schools.com/charsets/ref_emoji.asp
 */

//Poniendo a escuchar la app de express
app.listen(3000,'0.0.0.0',()=>{
    console.log("Servidor escuchando en http://0.0.0.0:3000");
})

