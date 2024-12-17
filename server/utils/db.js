import mongoose from "mongoose";

const dbCon = async()=>{
    try {
      await  mongoose.connect(process.env.DB_URL);
        console.log("DB connected");
        
    } catch (error) {
        console.log(error);
    }
}

export {dbCon};