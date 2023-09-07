import router from "./routes/api.js";
import mongoose from "mongoose"
import express from "express";
import cors from "cors";
import expressMongoSanitize from "express-mongo-sanitize";
import rateLimit from 'express-rate-limit'
import helmet from "helmet";
import hpp from "hpp";
import xssClean from "xss-clean";
const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use(limiter)
app.use(expressMongoSanitize());
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(xssClean());

app.use('/api/v1/',router);

app.use('*',(req,res)=>{
    res.status(404).json({
        status:false,
        type:"failed",
        message:"404 Notfound",
    });
});


    const DB_URL = "mongodb+srv://<username>:<password>@cluster0.ezckhds.mongodb.net/db-appleshop";
    const options = {
        user:"milonkumar",
        pass:"65KUMARdev",
        autoIndex:true,
    }
    mongoose.connect(DB_URL,options).then(()=>{
        console.log("Database Connection Success");
    }).catch((e)=>{
        console.log('Database Connection Fail');
        console.log(e);
    })


export default app;