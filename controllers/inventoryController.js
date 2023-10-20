const inventoryModel = require("../models/inventoryModel")
const userModel = require("../models/userModel")

const createInventoryController = async (req, res) => {
    try {
        const { email, inventoryType } = req.body
        const user = await userModel.findOne({ email })
        if (!user) {
            throw new Error("User Not found")
        }
        if (inventoryType === "in" && user.role !== "donor") {
            throw new Error("Not a donor Account")
        }
        if (inventoryType === "out" && user.role !== "hospital") {
            throw new Error("Not a Hospital")
        }

        const inventory = new inventoryModel(req.body)
        await inventory.save()
        return res.status(201).send({
            success: true,
            message: "New Blood Record Added"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Error in create inventori API",
            error
        })
    }
}

const getInventoryController = async (req, res) => {
    try {
        const inventory = await inventoryModel.find({
            organization: req.body.userId
        }).populate("donor").populate("hospital").sort({ createdAt: -1 })
        return res.status(200).send({
            success: true,
            message: "get all records succssfully",
            inventory
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Error in Getting All inventories",
            error
        })
    }
}

module.exports = { createInventoryController, getInventoryController }