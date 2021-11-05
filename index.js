//1.- Importar el modulo http
import http from 'http';

// 2.- Crear servidor
// cb (callback) es una *funcion* que se ejecutara
// ante cualquier peticion de un recurso a nuestro server
// (request, response)
const server = http.createServer((req, res)=>{
    console.log("Se ha recibido una peticion.");
    //Logeando-Registrar informacion de la peticion
    console.log(`Informacion de la peticion`);
    console.log(`url: ${req.url}`);   //interpolacion
    console.log(`Request Method: ${req.method}`) ;    //metodo de peticion
    console.log(`Plataforma del cliente: ${req.headers['sec-ch-ua-platform']}`) ;  
    // Respondemos
    res.write('Esta es la Respuesta del servidor');
    // Terminar la conexion
    res.end();
});

// 3.- Pongo a trabajar el servidor
// le paso un callback que escribira en la consola
// cuando el servidor este escuchando
// Mi IP 192.168.1.64:3000
server.listen(3000, '192.168.100.64', () => {
    console.log("Servidor escuchando en http://192.168.100.64:3000");
});