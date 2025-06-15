
const validators = {  
  isValidAddress: (address) => {
        const addressRegex = /^[a-zA-Z0-9\s,.'-]{3,}$/;
        return addressRegex.test(address);
    },  
    isValidPhoneNumber: (phoneNumber) => {
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;
        return phoneRegex.test(phoneNumber);
    },   
    isValidPassword: (password) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegex.test(password);
    },
    isValidName: (name) => {
        const nameRegex = /^[a-zA-Z\s]{2,}$/;
        return nameRegex.test(name);
    },
    isValidDescription: (description) => {
        const descriptionRegex = /^[a-zA-Z0-9\s.,'!&-]{10,}$/;
        return descriptionRegex.test(description);
    },
    isValidLevel: (level) => {
        const levelRegex = /^(easy|medium|hard)$/i;
        return levelRegex.test(level);
    },
    isValidDuration: (duration) => {
        const durationRegex = /^\d+\s(min|hour|day)$/i;
        return durationRegex.test(duration);
    },
    isValidType: (type) => {
        const typeRegex = /^(starter|main|dessert)$/i;
        return typeRegex.test(type);
    },
    isValidIngredients: (ingredients) => {
    const ingredientsRegex = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    if (!Array.isArray(ingredients)) return false;

    return ingredients.every(item => ingredientsRegex.test(item));
},
    isValidAmount: (amount) => {
        const amountRegex = /^\d+$/;
        return amountRegex.test(amount);
    },
    isValidImage: (image) => {
        const imageRegex = /\.(jpg|jpeg|png|gif)$/i;
        return imageRegex.test(image);
    },
    isValidId: (id) => {
        const idRegex = /^[0-9a-fA-F]{24}$/;
        return idRegex.test(id);
    }, 
}
export default validators;