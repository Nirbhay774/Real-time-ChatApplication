
import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import chats from '../backend/data/data.js'
import Connection from './Config/db.js';
import router from './Routes/UserRoute.js';
import dotenv from 'dotenv'
import ChatRoute from './Routes/ChatRoute.js'

const app = express();


app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
dotenv.config();


const port = 3500;
app.get("/" , (req , res)=>{
    res.send("your app is redy ")
})
//get the data 
// app.get("/app/auth/v1" , (req , res)=>{
//     res.send(
//       chats)
// })

//connect to the db 
Connection();   



//User Route 
app.use("/app/auth/v1" , router)

//Chat route 
app.use("/api/chat", ChatRoute);


app.listen(port , ()=>{
    console.log("The app is running at "  +port )
})