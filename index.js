//1.- Importar el modulo http
import http from 'http';

// 2.- Crear servidor
// cb (callback) es una *funcion* que se ejecutara
// ante cualquier peticion de un recurso a nuestro server
// (request, response)
const server = http.createServer((req, res)=>{
    //Informa en la consola del servidor que se recibe una peticion
    console.log("Se ha recibido una peticion.");

    //Logeando-Registrar informacion de la peticion
    console.log(`Informacion de la peticion`);
    console.log(`url: ${req.url}`);   //interpolacion
    console.log(`Request Method: ${req.method}`);    //metodo de peticion

    // Establecer el tipo de contenido que se entregara al cliente
    res.setHeader('Content-Type' , 'text/html');

    //Envio el contenido
    res.write("<html>");
    res.write("<head><title>My App</title></head>");
    res.write(`<body><h1>Hello from the server</h1><p style="color:red">Recuerso solicitado: ${req.url}</p></body>`);
    res.write("</html>");

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