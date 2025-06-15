import bodyParser from"body-parser"
import { Router } from "express";
import recipeController from "../controllers/recipeController.js"
import { myimage } from "../upload.js";
const recipeRoute = Router()
 recipeRoute.use(bodyParser.json())
recipeRoute.get('/getAll',recipeController.getAll)
recipeRoute.get('/getById/:id',recipeController.getById)
recipeRoute.post('/post', recipeController.post)
recipeRoute.delete('/delete/:idRecipe/:password',recipeController.delete)
recipeRoute.post('/',myimage.single('image') ,recipeController.post)
recipeRoute.delete('/deletAll',recipeController.deleteAll)

// recipeRoute.put('/put/:id',recipeController.put)

export default recipeRoute;
