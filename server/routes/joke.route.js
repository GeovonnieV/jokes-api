// will handle all of our routes for each model
// it is better to have them out of server.js
// this is also where we could check to see if a user has permissions to use the route

// get the logic from controller
const jokesController = require("../controllers/joke.controller");

module.exports = (app) => {
    // goes to the controller and calls the funtion that has the logic we need
    app.get("/", jokesController.helloWorld);
    app.get("/api/jokes", jokesController.getAllJokes);
    app.post("/api/jokes", jokesController.createJoke);
}

