const express = require("express");
const app = express();

const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// create our mongo db connection
// put the config file in here because that file makes connection to db
require("./config/mongoose.config");

// add the routs
require("./routes/joke.route")(app);


app.listen(8000, () => {
    console.log(`App is listening on port ${port}`)
})