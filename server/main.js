// Importando express
import Express from 'express';
import path from 'path';

// Importar enrutadores
import { router as adminRoute } from "./routes/admin.route.js";
import homeRoute from "./routes/home.route.js";

//Importando helper
import {ROOT_DIR} from './helpers/path.helper.js';

//Importando el motor de plantillas
import {engine} from 'express-handlebars';

//import ExpressHandlebars  from "express-handlebars";
console.log(`Variable de entorno: ${process.env.NODE_ENV}`);

//Crear una instancia de Express
const app = Express();  //(req,res,next)=> {} event handler

//Creando la instancia del motor de plantillas
const hbsTemplateEngine = engine({
  extname: ".hbs",
  defaultLayout: "main",
});

//Registro el motor de plantillas
app.engine("hbs", hbsTemplateEngine);

//Seleccionar en la App el motor a utilizar
app.set("view engine","hbs");

//Establecer las rutas de las vistas
app.set('views',path.join(ROOT_DIR,'server','views'));

// Insertando Middleware para la lectura de datos de un cliente
app.use(Express.urlencoded({extended: false}));

// Loggin de peticiones
app.use((req,_,next)=>{
    console.log(`📞 Se ha realizado la petición: "${req.method} : ${req.path}"`);
    next();
  });

  //Registrando el middlerware que maneja
  //el servicio de archivo
app.use(Express.static(path.join(ROOT_DIR,'public')));


//Se agrega a la aplicacion la ruta Admin
app.use('/admin',adminRoute);

//Se agrega a la aplicacion la ruta home
app.use(homeRoute);

//404 error
app.use((req,res,next) => {
//  

console.log("🚫 Recurso no encontrado: 'error-404.hbs'");
res.render("error-404");
});
//const ErrorfilePath = path.join(ROOT_DIR, "server","views","error-404.html");
//res.status(404).sendFile(ErrorfilePath);
//});


/** 
 * codigo de Emojies
 * Ref: https://www.w3schools.com/charsets/ref_emoji.asp
 */

//Poniendo a escuchar la app de express
app.listen(3000,'0.0.0.0',()=>{
    console.log("Servidor escuchando en http://0.0.0.0:3000");
})