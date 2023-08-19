const User = require("../models/userModel");

const bcrypt = require("bcryptjs");

exports.signUp = async (req, res) => {
    const {username , password} = req.body;
    
    
    try {
        const hashpassword = await bcrypt.hash(password, 12); 
        const newUser = await User.create({
            username,
            password: hashpassword
        });
        res.status(201).json({
            status: "success",
            data: {
                user: newUser
            }
        });
        
        }catch (e) {
            res.status(400).json({
                status: "ERROR",
            });
        
    };
};


exports.login = async (req, res) => {
    const {username, password} = req.body;
    try{
        const user = await User.findOne({username});
        
        if (!user) {
            return  res.status(404).json({
                status: "fail",
                message: "User not found"
                
            })
        }
        // Hash the password the user is trynna log in with then compare it to stored hash password .
        //         pswrd user tried to login with , password from DB 
        const pswrdIsCorrect = await bcrypt.compare(password, user.password);

        if (!pswrdIsCorrect) {
            return res.status(400).json({
                status: "fail",
                message: "Your password / username is incorrect D:"
            });
        } else {
            return res.status(200).json({
                status: "success",
                message: "Your password is correct :D "
            });
        };  

    }catch (e) {
        res.status(400).json({
            status: "ERROR",
        });
    };

};