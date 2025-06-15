import recipeModel from "../model/recipeModel.js"
import usersModel from "../model/usersModel.js"
const recipeController = {
    getAll: (req, res) => {
        try {
            recipeModel.find()
                .then((data) => {
                    res.status(200).json(data)
                })
                .catch((err) => {
                    res.status(500).json({ message: err.message })
                })
        }
        catch (e) {
            res.status(500).json(e)
        }
    },
    getById: (req, res) => {
        try {
            const id = req.params.id
            recipeModel.findById(id)
                .then((data) => {
                    res.status(200).json(data)
                })
                .catch((err) => {
                    res.status(500).json({ message: err.message })
                })
        }
        catch (e) {
            res.status(500).json(e)
        }
    }
    ,
    post: async (req, res) => {
        try {
            const idUser = req.body.idUser;
            const is = await usersModel.findOne({ idUser: idUser });
            if (!is) {
                return res.status(404).json({ message: "User not found" });
            }
            const newRecipe = new recipeModel(req.body);
            await newRecipe.save();
            res.status(200).send(newRecipe);
        } catch (e) {
            res.status(500).send(e.message);
        }
    }
    ,
    delete: async (req, res) => {
        try {
            const reipce = await recipeModel.findOne({ idRecipe: req.params.idRecipe });
            if (!reipce) {
                return res.status(404).json({ message: "Recipe not found" });
            }
            const user = await usersModel.findOne({ password: req.params.password });
            if (!user) {
                return res.status(404).json({ message: "password id worng" });
            }
            const canDelete = user.idUser == reipce.idUser;
            console.log(user);

            if (canDelete || user.isManager) {
                const deletionResult = await recipeModel.deleteOne({ idRecipe: req.params.idRecipe });
                res.status(200).send(deletionResult);
            }
            else {
                return res.status(403).json({ message: "You are not authorized to delete this recipe" });
            }
        }
        catch (err) {
            res.status(404).send(err.message)
        }
    },
     deleteAll: async (req, res) => {
            recipeModel.deleteMany({})
                .then(() => {
                    console.log("כל המשתמשים נמחקו בהצלחה");
                })
                .catch((err) => {
                    console.error("שגיאה במחיקה:", err.message);
                })
        }
    

    // put: (req, res) => {
    //     try {
    //         recipeModel.findByIdAndUpdate(req.params.id, req.body, { new: true }).
    //             then((u) => {
    //                 res.status(200).send(u)
    //             }).
    //             catch((err) => {
    //                 res.status(500).send(err.message)
    //             })
    //     }
    //     catch (e) {
    //         res.status(404).send(e.message)

    //     }
    // }


}
export default recipeController;
