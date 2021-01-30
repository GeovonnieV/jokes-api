// holds all the logic for each module (ie creating, updating, etc...)

// get the model we need
const Joke = require("../models/joke.model");

// exports all the logic to be used else where
module.exports = {
    // helloWorld is the key to the function that holds the logic
    helloWorld: (req,res) => {
        return res.send("Hello World")
    },

    getAllJokes: (req,res) => {
        Joke.find()
            .then((allJokes) => {
                res.json(allJokes);
            })
            .catch((err) => {
                console.log(res.json(err));
            })
    },

    createJoke: (req,res) => {
        Joke.create(req.body)
            .then((newJokeFromDb) => {
                res.json(newJokeFromDb);
            })
            .catch((err) => res.json(err));
    } 
}


