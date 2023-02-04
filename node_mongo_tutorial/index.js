const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")
//import routes
mongoose.set('strictQuery', false); // new
const app = express();
let dbURI ="mongodb+srv://joselyne:12345@myapi.19iwnvv.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(dbURI)
.then(() => {
  app.use("/api", routes)

  app.listen(3000, () => {
    console.log("Server has started!")
  })
})