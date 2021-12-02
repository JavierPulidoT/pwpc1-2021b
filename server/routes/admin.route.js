// Importando el enrutador de Express
import { Router } from "express";   //R mayuscula objeto que nos va a permitir crear cosas

//2 Crear una instacia del enrutador
const router =  Router();  //Router ,objeto enrutador

//3 Registrar rutas a mi enrutador
//Formulario sirve para agregar productos
//GET: /admin/add-product
router.get('/add-product',(_, res)=>{
    res.send(`
        <form action="add-product" method="POST">
        <label for="product-name"> Nombre del Producto</label>
        <input type = "text" name="name" id="product-name">
        <button type="submit">Agregar Producto</button>
        </form>
    `);
});
//Procesa el formulario para agregar productos
//POST: /admin/add-product
router.post('/add-product',(req, res)=>{
//Desestructurando el body de la peticion
const {body} = req;
//Respondiendo en JSON el body
res.json(body);
});

//Exportando el router de la subruta de admin
export default router;


