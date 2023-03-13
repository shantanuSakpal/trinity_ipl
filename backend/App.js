const express = require('express');
const app = express()
const http = require('http');
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config({ path: "backend/config/config.env" })

const connectToDB = require('./config/db');
connectToDB();
const PORT = 4000

app.use(
    cors({
        origin: "http://localhost:3000",
    })
)

const Player = require("./models/player")

app.get("/", (req, res) => {
    res.send("server here")
})

app.get("/players", (req, res) => {
    console.log("geting all players")
    const players = Player.find({})
    Player.find({}).then((err, players) => {
        if (err) {
            res.send(err)
        }
        else {
            res.json(players)
        }
    })


})
app.get("/players/:id", (req, res) => {
    console.log("geting one player")
    const player = Player.find({
        _id: req.params.id
    })
    player.then((err, book) => {
        if (err) {
            res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
            res.status(500).send(err)
        }
        else {
            res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
            res.status(200).json(player)
        }
    })


})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

