import fs from 'fs'
const userMiddleware = {
    writeNameFile: (req, res, next) => {
        fs.appendFileSync('C:/Users/משתמש/Documents/תכנות/תכנות שנה ב/Project Angular Node js/Node js/file/nameUsers.txt', JSON.stringify(req.body.name) + " date: " + new Date() + "\n");
        next();
    }
}
export default userMiddleware