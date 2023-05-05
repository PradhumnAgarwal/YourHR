const express = require("express")
const path = require("path")
const app = express();
const hbs = require("hbs");
require("./db/conn")
const Register = require("./models/register")
const port = process.env.PORT || 3000

const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views")

app.use(express.static(static_path))
app.set("view engine", "hbs")
app.set("views", template_path)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get("/", (req, res) => {
    res.render("index")
})
app.get("/register", (req, res) => {
    res.render("registration")
})
app.post("/register", async (req, res) => {
    try {
        const password = req.body.password
        const conpassword = req.body.conpassword
        if (password === conpassword) {
            const registerUser = new Register({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                resume: req.body.resume,
            })
            const registered = await registerUser.save();
            res.status(201).redirect("/")
        } else {
            res.send(
                "Password are not matching"
            )
        }

    } catch (error) {
        res.status(400).send(error)
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})