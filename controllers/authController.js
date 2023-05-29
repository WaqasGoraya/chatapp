import userModel from "../models/userModel.js";

class authController {
        static register = (req,res) => {
            res.render('register');
        }
        static save = (req,res) => {
            const {name,email,password,image} = req.body;
            console.log(req.body);
        }
        static login = (req,res) => {
            res.render('login');
        }
        static auth = (req,res) => {
            const {email,password} = req.body;
        }
}

export default authController;