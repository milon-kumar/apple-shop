import app from "./app.js";
import dotenv from "dotenv"

dotenv.config({
    path:"./config.env",
});


app.listen(process.env.APP_PORT || 8000,()=>{
    console.log(`Server Started On http://localhost:${process.env.APP_PORT || 8000}`);
})