const express=require("express");
const app=express();
app.get("/",function(req,resp){
    resp.sendFile("./public/Sahas.html",{root:__dirname});})
app.listen(3000);
console.log("running on port number : 3000");