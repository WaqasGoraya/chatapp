import mongoose from "mongoose";

const connectDB = async (db_url) => {
    try {
        const options = {
            dbName: process.env.DB_NAME
        }
        await mongoose.connect(db_url,options);
        console.log('Database Connected');
    } catch (error) {
        console.log('DB Error',error)
    }
}

export default connectDB;