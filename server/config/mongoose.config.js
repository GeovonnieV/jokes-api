// all info needed to connect using mongoose to work witn Mongo
const mongoose = require("mongoose");

// configure DB 
const dbName = "another-joke-api"

// connects mongoose to our db
mongoose.connect("mongodb://localhost/" + dbName,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
})
        .then(() => console.log("successfully connected with DB " + dbName))
        .catch((err) => console.log("something went wrong while connecting to the db " + err));