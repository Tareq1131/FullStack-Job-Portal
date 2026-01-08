import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

const app = express();
app.get("/home",(req,res)=>{
    return res.status(200).json({
        message:"I am comming from backend",
        success: true
    })
});

// middleware 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}

app.use(cors(corsOptions));


const PORT = 3004;
app.listen(PORT,()=>{
 console.log(`Server running at port ${PORT}`);
})

