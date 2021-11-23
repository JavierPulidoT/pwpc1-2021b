//1.- Importar el modulo http
import http from 'http';
//2. importando el module de routes
import routes from "./routes.js"
// 3. Importando express
import Express from 'express'

//Crear una instancia de Express
const app = Express();  //(req,res,next)=> {} event handler

//Registrando el primer middleware
app.use((req, res, next)=>{
    //registrando un mensaje en el log
    console.log("Estoy en el middleware 1");
    next()//Dar la instruccion de Pasar al siguiente Midleware
});

//Registrando el segundo middleware
app.use((req, res, next)=>{
    console.log("Estoy en el middleware 2");
    next() //Dar la instruccion de Pasar al siguiente Midleware
});

//Registrando el tercer middleware
app.use((req, res)=>{
    console.log("Estoy en el middleware 3");
    console.log("Emitiendo Respuesta al cliente");
   res.send("<h1> Mi respuesta </h1>\n Hola!");
});

/** 
 * codigo de Emojies
 * Ref: https://www.w3schools.com/charsets/ref_emoji.asp
 */

//Poniendo a escuchar la app de express
app.listen(3000,'0.0.0.0',()=>{
    console.log("Servidor escuchando en http://0.0.0.0:3000");
})

/*
// 2.- Crear servidor
// cb (callback) es una *funcion* que se ejecutara
// ante cualquier peticion de un recurso a nuestro server
// (request, response)
const server = http.createServer(app);
// 3.- Pongo a trabajar el servidor
// le paso un callback que escribira en la consola
// cuando el servidor este escuchando
// Mi IP 192.168.1.64:3000
server.listen(3000, '0.0.0.0', () => {  
});
*/