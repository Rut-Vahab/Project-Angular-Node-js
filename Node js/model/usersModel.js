import validators from "../validators/validators.js";
import moongoose from "mongoose";

const usersModel = new moongoose.Schema({
    idUser: {
        type: String,
        required: true      
    }
        ,
        name: {
            type: String,
            require: true,
            validate: {
                validator: (value) => validators.isValidName(value)
            }
        },
        password: {
            type: String,
            require: true,
            validate: {
                validator: (value) => validators.isValidPassword(value)
            }
        },
        address: {
            type: String,
            require: false,
            validate: {
                validator: (value) => validators.isValidAddress(value)
            }
        },
        phoneNumber: {
            type: String,
            require: false,
            validate: {
                validator: (value) => validators.isValidPhoneNumber(value)
            }
        },
        isManager : {
            type: Boolean,
            required: false,
            default: false
        }
        ,FavoriteRecipes:{
            type:Array
        }
        ,
        email: {
            type: String,
            require: false,
        //     validate: {
        //         validator: (value) => validators.isValidEmail(value)
        //     }
     }

    })
export default moongoose.model("userCollection", usersModel);
