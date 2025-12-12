

const getUserByRoll = (req, res) => {
    const { roll } = req.params;

    res.send({
        
        RollNumber: roll
    });
};

module.exports = {  getUserByRoll };