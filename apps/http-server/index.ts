import express from "express";

const app = express();

app.get("/health",(req,res)=>{
    res.send("Helloooo");
})

app.listen(3001)