const mongoose = require("mongoose");

mongoose.connect("mogodb://localhost/jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Established a connection to the db"))
  .catch((err) => console.log("There was an error connecting to the DB ", err))