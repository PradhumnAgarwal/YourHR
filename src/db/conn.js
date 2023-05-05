const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://pradhumnagarwal94:yourHR@cluster0.ka93dyl.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
}).then(() => {
    console.log("DB connected")
}).catch((e) => {
console.log(e)
})