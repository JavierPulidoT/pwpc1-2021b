// Importando el enrutador de Express
import { Router } from "express";

//2 Crear una instacia del enrutador
const router =  Router(); 

//3 Registrar rutas a mi enrutador

router.get('/about',(_, res)=>{ 
   res.send("<h1> Acerca de ...</h1>\n  Sitio inicial hecho con NodeJS!");
});

router.get(['/','/home'],(_, res)=>{
    console.log('📞 Se ha realizado la petición: "/"');
    res.send("<h1>Mi APP</h1>\n🙋‍♂️ Bienvenido a este sitio");
  });


//Exportando el router de la subruta de admin
export default router;