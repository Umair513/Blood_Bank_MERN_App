const express = require("express")
const dotenv = require("dotenv")
const colors = require("colors")
const morgan = require("morgan")
const cors = require("cors")

//dotenv config
dotenv.config()
// REST Object

const app = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

// routes
app.use("/api/v1/test", require("./routes/testRoutes"))

// Port
const PORT = process.env.PORT || 8080

// listen
app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.DEV_MODE} mode on port ${process.env.PORT}`.bgBlue.white)
})