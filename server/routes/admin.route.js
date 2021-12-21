// Importando el enrutador de Express
import { Router } from "express";   //R mayuscula objeto que nos va a permitir crear cosas
//Importando el modulo Path 
import path from "path";
//Importando helper
import {ROOT_DIR} from "../helpers/path.helper.js";

// Base de datos volatil
export const products = [];

//2 Crear una instacia del enrutador
export const router =  Router();  //Router ,objeto enrutador

//3 Registrar rutas a mi enrutador
//Formulario sirve para agregar productos
//GET: /admin/add-product

router.get("/add-product", (_, res) => {
  console.log("📒 Sirviendo recurso: 'add-product.html'");
  res.render("add-product");
});

//Procesa el formulario para agregar productos
//POST: /admin/add-product
router.post("/add-product", (req, res) => {
  // Desestructurando el body de la petición
  const { name } = req.body;
  // Guarda en la base de datos el nombre del producto
  products.push({name});
  // Redirecciono a la pantalla principal
  res.redirect('/');
});

// Exportando el router de la subruta de admin
// export default router;