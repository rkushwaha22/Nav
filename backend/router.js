const express = require("express")
const path = require("path")
const fs = require("fs")
const router = express.Router()
let newarr = "";

const upload = path.join(__dirname, 'upload');
if (!fs.existsSync(upload)) fs.mkdirSync(upload);

const filepath = path.join(__dirname, 'file.json');
if (!fs.existsSync(filepath)) fs.writeFileSync(filepath, "[]", 'utf-8')

function read() {
    try {
        return JSON.parse(fs.readFileSync(filepath, 'utf-8'))

    } catch (error) {
        return null
    }
}

function write(wdata) {
    return fs.writeFileSync(filepath, JSON.stringify(wdata));
}

router.get("/", (req, res) => {
    res.send("This is home router page ")
})

router.put('/update', (req, res) => {
    let { name, email, password } = req.body
    let data = read();

    console.log(name, email, password);

    let index = data.indexOf(newarr[0])
    console.log("index: ", index);

    if (newarr.length > 0) {

        data.splice(index, 1, req.body)
        console.log(data);
        write(data)
        newarr = data.filter((v) => {
            return v.email == email && v.password == password;
        })
        console.log("newdata", newarr);

        res.send({
            msg: "congrats your data updated successfully",
            data: newarr[0]
        });
    }
});

router.post("/view", (req, res) => {
    let alldata = read()

    res.send({
        msg: "data send to view page",
        data: alldata
    })
})

router.post("/signin", (req, res) => {

    let { email, password } = req.body;
    let data = read();
    console.log(email, password);

    let newarr = data.filter((v) => {
        return v.email == email && v.password == password;
    })
    console.log(newarr);

    if (newarr.length > 0) {
        res.send({
            msg: "congrats you are login in ",
            data: newarr[0]
        });
    } else {
        res.send({
            msg: "Register first"
        })
    }
})


router.post("/signup", (req, res) => {

    let data = read();
    let newarr = data.filter((v) => {
        return v.email == req.body.email;
    })
    console.log(newarr);

    if (newarr.length > 0) {
        res.send({
            msg: "user already plz enter diff email",
        })
    } else {
        data.push(req.body)
        console.log(data);

        write(data)
        res.send({
            msg: "congrats user register successfully",
            data: req.body
        });

    }



    res.send({
        masg: "data received successfully ",
        data: req.body

    })
})



module.exports = router;
