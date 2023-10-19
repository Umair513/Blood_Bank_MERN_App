const bcrypt = require("bcryptjs")
const userModel = require("../models/userModel")

const registerController = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({ email: req.body.email })
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: "User Already Exists"
            })
        }
        // hashed password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        req.body.password = hashedPassword

        //rest data
        const user = new userModel(req.body)
        await user.save()
        return res.status(201).send({
            success: true,
            message: "User Registered Successfully",
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "error in regsiter API",
            error
        })
    }
}

module.exports = { registerController }