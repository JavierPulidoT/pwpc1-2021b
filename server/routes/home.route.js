// Importando el enrutador de Express
import { Router } from "express";
// Importando el Mudulo Path de node
//Para trabajar con rutas absolutas
import path from 'path'
//Importando helper
import {ROOT_DIR} from '../helpers/path.helpers.js';

//2 Crear una instacia del enrutador
const router =  Router(); 

//3 Registrar rutas a mi enrutador

router.get('/about',(_, res)=>{  //about.html  //path.resolve
   const AboutfilePath = path.join(ROOT_DIR, "server","views","about.html");
   res.sendFile(AboutfilePath);
});

router.get(['/','/home'],(_, res)=>{ //shop.html
    console.log('📞 Se ha realizado la petición: "/"');
    const ShopfilePath = path.join(ROOT_DIR,"server","views","shop.html");                
    res.sendFile(ShopfilePath);                  //ruta obsulutas y Rutas relativas
  });


//Exportando el router de la subruta de admin
export default router;