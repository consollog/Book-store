import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs';

export const singup = async (req, res) => {
    try {

        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User alredy exists" })
        }
        const hashpassword = await bcryptjs.hash(password, 8)
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashpassword,
        })
        await createdUser.save();
        res.status(201).json({
            message: "User created successefully", user: {
                _id: createdUser._id,
                email: createdUser.email,
                password: createdUser.password
            }
        })
    } catch (error) {
        console.log("Error:", error.message)
        res.status(500).json("Internal server error")
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcryptjs.compare(password, user.password)
        if (!email || !isMatch) {
            return res.status(400).json({ message: "Invalide username and password" })
        } else {
            res.status(200).json({
                message: "Login Successfully",
                user: {
                    _id: user._id,
                    email: user.email,
                    fullname: user.fullname,
                },
            })
        }
    } catch (error) {
        console.log("Error:", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}