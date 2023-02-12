const express = require("express");
//const  dotenv = require("dotenv");
const Router = express.Router();
const app = express();
const mongoose = require("mongoose")
const cors =require('cors')
const bodyParser = require ('body-parser');
const postRoutes = require("./routes/contacts");
const userpostsRoutes = require("./routes/user");
const PostRoutess = require('./routes/posts.routes');
//const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/contacts", postRoutes);

app.use("/user", userpostsRoutes);
app.use('/getallposts', PostRoutess);


mongoose.set("strictQuery", false);
// const dbURI =
//   "mongodb+srv://joselyne:12345@myapi.19iwnvv.mongodb.net/?retryWrites=true&w=majority";
const dbURI = "mongodb://127.0.0.1:27017/myBrandDb";
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to database!");
}).catch(e => console.log(e));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
