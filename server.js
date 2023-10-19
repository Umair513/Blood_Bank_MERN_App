const express = require("express")
const dotenv = require("dotenv")
const colors = require("colors")
const morgan = require("morgan")
const cors = require("cors")
const connectDB = require("./config/db")

//dotenv config
dotenv.config()
// REST Object


// mongodb connection
connectDB()
const app = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

// routes
app.use("/api/v1/test", require("./routes/testRoutes"))
app.use("/api/vi/auth", require("./routes/authRoutes"))
// Port
const PORT = process.env.PORT || 8080

// listen
app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.DEV_MODE} mode on port ${process.env.PORT}`.bgBlue.white)
})