import express from 'express';
import dotenv from 'dotenv';
import { dbCon } from './utils/db.js';
import routers from './routes/routes.js';
import cors from 'cors';

dotenv.config();
const app = express();

// console.log(process.env.PORT);

dbCon();

app.use(express.json());
app.use(cors());
app.use('/api', routers);

app.listen(process.env.PORT  || 4000,()=>{
    console.log(`Server is running on port: ${process.env.PORT}`);
})