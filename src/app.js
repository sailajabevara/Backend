const express =  require("express");
const mongoose = require("mongoose");
const app =  express();

app.get("/",(req,res) => {
    res.send("Server started");
})
app.listen(5000, async ()=> {
    console.log("Server running");
    await mongoose.connect("mongodb+srv://db_user:KzvY2BJLV59X6dQ1@basics.7ixffob.mongodb.net/basics")
    console.log(mongoose.connection.name);
    
})