const express = require("express");
const app = express();
const cors = require('cors')

app.use(express.json())

var corsOptions= {
    origin : "http://localhost:5173",
    method : "GET,POST,PUT,DELETE",
    optionsSuccessStatus:200 
}

app.use(cors(corsOptions))

const router = require("./router.js")
app.use("/", router)


// app.get("/", (req, res) => {
//     res.send("This is home page ")
// })


app.listen(3005, () => {
    console.log("server runnig on http://localhost:3005");

})