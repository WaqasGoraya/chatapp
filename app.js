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


//static path
app.set(express.static(path.join(process.cwd(),'/public')));
app.set('view engine','ejs');

//routes
app.use('/',router);

//DB Config
connectDB(db_url);

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});