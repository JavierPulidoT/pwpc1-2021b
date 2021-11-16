//1.- Importar el modulo http
import http from 'http';
//2. importando el module de routes
import routes from "./routes.js"

/** 
 * codigo de Emojies
 * Ref: https://www.w3schools.com/charsets/ref_emoji.asp
 */

// 2.- Crear servidor
// cb (callback) es una *funcion* que se ejecutara
// ante cualquier peticion de un recurso a nuestro server
// (request, response)
const server = http.createServer(routes.requestHandler);
// 3.- Pongo a trabajar el servidor
// le paso un callback que escribira en la consola
// cuando el servidor este escuchando
// Mi IP 192.168.1.64:3000
server.listen(3000, '192.168.100.64', () => {
    console.log("Servidor escuchando en http://192.168.100.64:3000");
});