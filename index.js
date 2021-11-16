//1.- Importar el modulo http
import http from 'http';
import fs from "fs";  //me permite interacruar con archivos S.O servidor
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
        res.write(`
        <html>
            <head>
                <title>Enter the message</title>
            </head>
            <body>
                <h1>Send Message</h1>
                <form action ="/message" method="POST">
                <input type="text" name="message">
                <button type="submit" >send</button>
                </form>
            </body>
            </html>
        `);

        //Cerrando Conexion
        res.end();
    }else if(url === '/message' && method === "POST"){
        //1. Se crea una variable para guardar los datos de entrada
        let body = [];
        //2. Registrar un manejador para la entrada de datos
        req.on("data",(chunk) => { //manejador de EVENTOS
            //2.1 Registrando los trozos que llegan al backend
            console.log("Recibiendo datos");
            console.log(chunk);
            //2.2 Acumulo los datos de entrada
            body.push(chunk);
            console.log(`Datos Recibidos: ${body}`);
            //2.3 Proteccion en caso de recepcion masiva de datos  ANTI HACK
            if(body.length > 1e6) req.socket.destroy();      
        });
 // EjecutaOperacion(ARGS1,ARG2,ARG3, cb)
    // Modelo Asincrono
    // Suma2Numeros(1,2,cb)
    /*
    1. let res = Suma2Numeros(1,2);
    2. console.log(res) // undefined
    */

        //3. Registrando un manejador de fin de recepcion de datos
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            //Guardando el mensaje en un archivo
            fs.writeFile('message.txt' , message, (err)=>{
                //verificar si hubo error
                if(err){
                    console.log("No se pudo grabar el archivo");
                    res.statusCode = 500; //Internqal Server Error
                    res.setHeader("Content-Type", "text/html");
                    res.write("ERROR WHEN LOADING FILE");
                    return res.end();
                }
                //En caso de no haber error
                //establecer el status code de redireccionamineto
                res.statusCode = 302;
                //Establecer la ruta de direccionamiento
                res.setHeader('Location','/');
                //Finalizo coneccion
                return res.end();
            });
         
        });
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