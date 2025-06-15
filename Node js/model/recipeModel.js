import mongoose from "mongoose";
import validators from "../validators/validators.js";

const recipeModel = new mongoose.Schema({
    idRecipe: {
        type: String,
        require: true,

    },
    idUser: {
        type: String,
        ref: "userCollection ",
        required: true,
    },
    name: {
        type: String,
        require: true,
        // validate: {
        //     validator: (value) => validators.isValidName(value)
        // }

    }
    ,
    description: {
        type: String,
        require: false,
        // validate: {
        //     validator: (value) => validators.isValidDescription(value)
        // }
    }
    ,
    level: {
        type: String,
        require: false,
        // validate: {
        //     validator: (value) => validators.isValidLevel(value)

        // }
    }
    ,

    durationOfTime: {
        type: String,
        require: false,
        // validate: {
        //     validator: (value) => validators.isValidDuration(value)
        // }

    }
    ,
    type: {
        type: String,
        require: false,
        // validate: {
        //     validator: (value) => validators.isValidType(value)
        // }
    },
    ingredients: {
        type: Array,
        require: false,
        // validate: {
        //     validator: (value) => validators.isValidIngredients(value)
        // }
    }
    ,
    amount: {
        type: String,
        require: false,
        // validate: {
        //     validator: (value) => validators.isValidAmount(value)
        // }
    }
    ,
    image: {
        type: String,
        require: false,
        validate: {
            validator: (value) => validators.isValidImage(value)
        }
    }
})
export default mongoose.model("recipeCollection", recipeModel);