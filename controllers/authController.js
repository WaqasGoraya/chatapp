import userModel from "../models/userModel.js";

class authController {
        static register = (req,res) => {
            res.render('register');
        }
        static save = (req,res) => {

        }
        static login = (req,res) => {
            res.render('login');
        }
        static auth = (req,res) => {

        }
}

export default authController;