import multer from 'multer';


const fileFilter = (req, file, cb) => {
    req.originalname = file.originalname
    if (file.originalname.match(/\.(png|jpg|PNG|JPG|gif)$/))
        cb(null, true)
    else
        cb(new Error('invalid file type'))
}



//אחסון התמונה
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})


//יצוא של התמונה
export const myimage = multer({
    storage,
    // limit: {
    //     fileSize: 1024 * 1024 * 2
    // },
    fileFilter
})