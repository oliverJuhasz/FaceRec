const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs")
const cors = require("cors");
const knex = require('knex')

const register = require('./controllers/register')
const signin = require("./controllers/signin")

const db =  knex({
client: 'pg',
connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '5642',
    database : 'smart-brain'
}
});

app.use(bodyParser.json());
app.use(cors())


app.get("/", (req, res) => {
    db.select("*").from("users")
    .returning("*")
    .then(users => {
        res.json(users)
    })

});

app.post("/signin", (req, res) => {signin.handleSignin(req, res, db, bcrypt)});

app.post("/register", (req, res) => { register.handleRegister(req, res, db, bcrypt) });

app.get("/profile/:id", (req, res) => {
    const { id } = req.params;
    db.select("*").from("users").where("id", id)
    .then(user => {
        if (user.length) {
        res.json(user[0])
    } else {
        res.status(400).json("not found")
    }

    }
    )
    .catch(err => res.status(400).json("error getting user"))

    }
);

app.put("/image", (req, res) => {
    const { id } = req.body;
    db("users").where("id", "=", id)
    .increment("entries", 1)
    .returning("entries")
    .then(entries => {
        response.json(entries[0])
    })
    .catch(err => res.status(400).json("unable to get entries"))

    }
);


app.listen(3001, () => {
    console.log("app is running on port 3001");
});


/*
/ --> res = this is working
/signin --> POST success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT --> user
*/