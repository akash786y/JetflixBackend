const User = require('../models/user')

async function getLoginData(req, res){
    try {
        
        let {name, email, password} = req.body;
        
        let user = new User({name, email, password});
        await user.save();
        console.log('User saved')

        res.code(200).send('User saved succesfully');

    } catch (error) {
        console.log(error);
        res.code(500).send('User not saved!');
    }
}

module.exports = {getLoginData};

