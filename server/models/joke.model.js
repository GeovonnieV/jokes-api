// will hold all the schemas / models of the data 
// we will also validate the data before it can be put into mongo    

const mongoose = require("mongoose");

// create a model to setup the data to be written in to the database
const JokeSchema = new mongoose.Schema(
    {
        setup: String,
        punchline: String,
    },
    {
        timestamps: true,
    }
)

const modelName = "Joke";

const Joke = mongoose.model(modelName, JokeSchema);

module.exports = Joke;