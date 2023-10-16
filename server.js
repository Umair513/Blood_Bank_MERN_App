const express = require("express")

// REST Object

const app = express()

// routes
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Welcome to Blood Bank App Server",
    })
})

// Port
const PORT = 8080

// listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})