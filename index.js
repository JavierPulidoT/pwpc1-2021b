//1.- Importar el modulo http
import http from 'http';
/**
 * codigo de Emojies
 * Ref: https://www.w3schools.com/charsets/ref_emoji.asp
 */

// 2.- Crear servidor
// cb (callback) es una *funcion* que se ejecutara
// ante cualquier peticion de un recurso a nuestro server
// (request, response)
const server = http.createServer((req, res)=>{
    //Obteniendo el recurso solicitado
    let { url , method} = req;   //desestructuracion

        //Informa en la consola del servidor que se recibe una peticion
        console.log(`Se ha solicitado el siguiente recurso: ${method} : ${req}`);

    //filtrar url
    if(url === '/'){
        //Respuesta ante "Get /"
        //1.Estableciendo el tipo de retorno como HTML
        res.setHeader('Content-Type' , 'text/html');
        //2. Escribiendo la respuesta
        res.write('<html>');
        res.write('<head><title>My App</title></head>');
        res.write('<body><h1>&#9889; Hello from my server</h1></body>');
        res.write('</html>');
        //Cerrando Conexion
        res.end();

    }else if(url === '/author'){
        //Respuesta ante "Get /"
        //1.Estableciendo el tipo de retorno como HTML
        res.setHeader('Content-Type' , 'text/html');
        let url_image = 'https://pbs.twimg.com/profile_images/1347250713307582467/pYru9Bz6_400x400.jpg';
        //2. Escribiendo la respuesta
        res.write('<html>');
        res.write('<head><title>My App</title></head>');
        res.write('<body>');
        res.write('<h1>&#9889; Autor</h1>');
        res.write('<p>Javier Pulido - Web Developer</p>');
        res.write(`<img width="300px" src="${url_image}" alt=Foto Javier Pulido">`);
        res.write('</body>');
        res.write('</html>');
        //Cerrando Conexion
        res.end();
    }
        else{
        //Se registra el Recurso No encontrado
        console.log(`No se ha encontrado el recurso: ${url}`);
        //Recurso No encontrado
            //1.Estableciendo el tipo de retorno como HTML
            res.setHeader('Content-Type' , 'text/html');
            //2. Escribiendo la respuesta
            res.write('<html>');
            res.write('<head><title>My App</title></head>');
            res.write('<body><h1>Error 404 - Recurso no encontrado &#9940</h1></body>');
            res.write('</html>');
            //Cerrando Conexion
            res.end()
    }
});

// 3.- Pongo a trabajar el servidor
// le paso un callback que escribira en la consola
// cuando el servidor este escuchando
// Mi IP 192.168.1.64:3000
server.listen(3000, '192.168.100.64', () => {
    console.log("Servidor escuchando en http://192.168.100.64:3000");
});