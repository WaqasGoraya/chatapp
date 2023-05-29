import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
const port = process.env.PORT || 8000;
const db_url = process.env.DB_URL;
import connectDB from './config/dbConfig.js';
import  Path  from 'path';
import path from 'path';
import router from './routes/web.js';
import bodyParser from 'body-parser';



//static path
app.use(express.json());
app.set(express.static(path.join(process.cwd(),'/public')));
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');




//routes
app.use('/',router);

//DB Config
connectDB(db_url);

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});