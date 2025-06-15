import recipeModel from "../model/recipeModel.js";
import usersModel from "../model/usersModel.js";
const userController = {
    getAll: (req, res) => {
        try {
            usersModel.find().
                then((data) => {
                    res.status(200).json(data)
                }).
                catch((err) => {
                    res.status(500).json(err)
                })
        }
        catch (e) {
            res.status(404).send(e.message)
        }
    },
    getByNameAndPassword: (req, res) => {
        try {
            const { name, password } = req.body;
            usersModel.findOne({ name, password }).
                then((user) => {
                    res.status(200).json(user)
                }).
                catch((e) => {
                    res.status(500).json(e.message)
                })

        }
        catch (err) {
            res.status(404).json(err.message)
        }
    },
  getByNameAndEmail: (req, res) => {
        try {
            const { name, email } = req.body;
            usersModel.findOne({ name, email }).
                then((user) => {
                    res.status(200).json(user)
                }).
                catch((e) => {
                    res.status(500).json(e.message)
                })

        }
        catch (err) {
            res.status(404).json(err.message)
        }
    },
    post: (req, res) => {
        const newUser = new usersModel(req.body);
        newUser.save()
            .then(user => res.status(201).json(user))
            .catch(err => res.status(500).json({ message: err.message }));
    },

    put: (req, res) => {
        usersModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(user => {
                if (user) {
                    res.status(200).json(user);
                } else {
                    res.status(404).json({ message: "User not found" });
                }
            })
            .catch(err => res.status(500).json({ message: err.message }));
    },
    addRecipeFavorite: async (req, res) => {
        try {
            const user = await usersModel.findOne({ idUser: req.params.idUser });
            const recipe = await recipeModel.findOne({ idRecipe: req.params.idRecipe });
            if (!user)
                return res.status(404).json({ message: "idUser id worng" });
            // if (user.FavoriteRecipes.some(r => r.idRecipe === req.params.idRecipe))
            //     return res.status(400).json({ message: "Recipe already in favorites" });
            // }
            user.FavoriteRecipes.push(recipe.idRecipe);
            await user.save();
            res.status(200).json({ message: "Recipe added to favorites", FavoriteRecipes: user.FavoriteRecipes });
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
    ,
    getRecipeFavorite: async (req, res) => {
        try {
            const user = await usersModel.findOne({ idUser: req.params.idUser })
            const recipeIds = user.FavoriteRecipes
            const favoriteRecipes = await recipeModel.find({ idRecipe: { $in: recipeIds } });
            const names = favoriteRecipes.map(r => r.name);
            res.status(200).json({ names });
        } catch (err) {
            res.status(500).send(err.message);
        }
    },
    delete: async (req, res) => {
        usersModel.deleteMany({})
            .then(() => {
                console.log("כל המשתמשים נמחקו בהצלחה");
            })
            .catch((err) => {
                console.error("שגיאה במחיקה:", err.message);
            })
    }

}
export default userController;


