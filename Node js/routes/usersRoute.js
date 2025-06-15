import bodyParser from "body-parser";
import { Router } from "express";
import usersController from "../controllers/usersController.js";
import userMiddleware from "../middleware/usersMiddlewar.js";

const usersRoute = Router()
usersRoute.use(bodyParser.json())
usersRoute.get('/getAll',usersController.getAll)
usersRoute.post('/getByNameAndPassword',usersController.getByNameAndPassword)
usersRoute.post('/getByNameAndEmail',usersController.getByNameAndEmail)
usersRoute.post('/post',userMiddleware.writeNameFile,usersController.post)
usersRoute.put('/put/:id',usersController.put)
usersRoute.post('/addRecipeFavorite/:idUser/:idRecipe',usersController.addRecipeFavorite)
usersRoute.get('/getRecipeFavorite/:idUser',usersController.getRecipeFavorite)
usersRoute.delete('/delete',usersController.delete)
export default usersRoute;