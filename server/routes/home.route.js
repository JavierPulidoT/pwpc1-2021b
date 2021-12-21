// 1 Importando el enrutador de Express
import { Router } from "express";
// Importando el modulo Path de node
// para trabajar con rutas absolutas
import path from "path";
// Importando Helper
import { ROOT_DIR } from '../helpers/path.helper.js';

// Importando el acceso a los datos
import { products } from './admin.route.js'

// 2 Crear una instancia del enrutador
const router = Router();

//3 Registrar rutas a mi enrutador

router.get("/about", (_, res) => {
  console.log("📒 Sirviendo recurso: 'about.html'");
  res.render('about');
});

// La ruta raíz entra en todo tipo de petición
router.get(["/", "/home"], (_, res) => {
  console.log(`📔 Inventario de productos: ${JSON.stringify(products)}`);
  console.log("📒 Sirviendo recurso: 'shop.html'");
  res.render('shop');
});
//Exportando el router de la subruta de admin
export default router;