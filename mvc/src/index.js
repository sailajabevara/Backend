const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

app.use("/api/user",userRoutes);
//api/user prefix of api 
app.get('/',(req,res)=> {
    res.send("Server started");
})

app.listen(4000,()=>{
    console.log("Server started");
    
})
