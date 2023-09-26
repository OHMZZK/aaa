const express = require('express');
const mongoose = require('mongoose');
const app = express();
const http = require('http');
const server = http.createServer(app);


mongoose.connect(
    "mongodb+srv://ohmohmohma30412:ohm0966477158@ohm1918.maf3klm.mongodb.net/JJ?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
    }
);
const Premium = mongoose.model("uuus", new mongoose.Schema({ _uuid: String, _name: String }));

app.get("/", (req, res) => {
    res.send("<h1>Hello Bro</h1>");
});

app.get("/UUU", (req, res) => {
    Premium.find({})
        .then((UUU) => res.json(UUU))
        .catch((error) =>
            res.status(400).json({ message: "Some thing went wrong" })
        );
});

app.get("/UUU/:uuid", (req, res) => {
    const uuid = req.params.uuid;
    Premium.findOne({ _uuid: uuid }).then((UUU) => res.json(UUU)).catch((error) =>res.status(400)
    .json({ message: "Some thing went wrong" })  );
        
});
app.listen(9999, () => console.log('ok'));



server.listen(3000,() =>{console.log("Stat normal")});

