// Import Express
const express = require("express");
//object creation
const app = express();
app.use(express.json());

//http://localhost:port
//http://127.0.0.1:port

//define routes
app.get("/",(req,res) => {
    // res.send("Server Running")
});
app.get("/home",(req,res) => {
    res.send({"message": "This is home","Roll No":"23P31A4207"})
    
    
})
// Start the server
app.listen(3000,() => {
    console.log("Server running at port number");

    
})
//passing the data
//path -- // :
//query -- // ?
// body --

//path
app.get("/user/:roll", (req,res) => {
    res.send(`Roll number ${req.params.roll}`)
})

//query
app.get("/users/search",(req,res) => {
    //object destructure  (to get the data)
    console.log(req.query);
    const {roll,name} = req.query;
    res.send ({
        roll: `${name}`,
        name: `${roll}`
    })
    
})

app.post("/user/add",(req,res,next)=>{
    //object destructure
    const {roll,name,branch,collage,section,gender,age,mobile,state,status} = req.body;
    res.send({
        RollNumber :roll,
        Name: name,
        Branch :branch,
        Collage: collage,
        Section: section,
        Gender :gender,
        Age: age,
        Mobile:mobile,
        State:state,
        Status:status


    })
})