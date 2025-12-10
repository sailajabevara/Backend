// const addUser = (req,res)=>{
//     const {roll,name} = req.body;
//     res.send({
//         RollNumber: roll,
//         Name: name,
//     });
//     app.post("/user/add",(req,res)=> {
//         const {roll,name} = req.body;
//         res.send({
//             RollNumber: roll,
//             Name:name,
//         });
//         module.exports = {addUser}
//     })
// }
// controllers/userController.js

const addUser = (req, res) => {
    const { roll, name } = req.body;

    res.send({
        RollNumber: roll,
        Name: name
    });
};

const getUserByRoll = (req, res) => {
    const { roll } = req.params;

    res.send({
        name: "Sailu",
        RollNumber: roll
    });
};

module.exports = { addUser, getUserByRoll };
