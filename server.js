//const https = require('https');
const express = require("express");

const app = express();

app.use(express.static(__dirname + '/HTML'));


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/HTML/home.html");
})

app.post("/giveaway_submit",(req,res)=>{
    console.log("ok");
    res.sendStatus(200)
})

app.listen(3000,()=>{
    console.log('server running at 3000');
})