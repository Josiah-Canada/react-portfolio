const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.get("/", (req,res) => {
    res.download("./new Resume.docx")
})

app.listen(4000)