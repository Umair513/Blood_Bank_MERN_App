const express = require("express")

// REST Object

const app = express()

// routes
app.use("/api/v1/test", require("./routes/testRoutes"))

// Port
const PORT = 8080

// listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})