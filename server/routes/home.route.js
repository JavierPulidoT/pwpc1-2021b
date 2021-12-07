// Importando el enrutador de Express
import { Router } from "express";
// Importando el Mudulo Path de node
//Para trabajar con rutas absolutas
import path from 'path'

//2 Crear una instacia del enrutador
const router =  Router(); 

//3 Registrar rutas a mi enrutador

router.get('/about',(_, res)=>{ 
   res.send("<h1> Acerca de ...</h1>\n  Sitio inicial hecho con NodeJS!");
});

router.get(['/','/home'],(_, res)=>{
    console.log('📞 Se ha realizado la petición: "/"');
    const filePath = path.join(path.resolve(),"server","views","shop.html");                
    res.sendFile(filePath);                   //ruta obsulutas y Rutas relativas
  });


//Exportando el router de la subruta de admin
export default router;