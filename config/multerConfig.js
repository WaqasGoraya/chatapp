import multer from "multer";
import  Path  from "path";

const multerStorage = multer.diskStorage({

    destination: (req,file,cb) => {
        cb(null,'public/images');
    },
    filename: (req,file,cb) => {
        const file_name = Date.now() +"_"+file.originalname; 
        cb(null,file_name);
    }
});

const uploadStorage = multer({ storage: multerStorage });

export default uploadStorage;