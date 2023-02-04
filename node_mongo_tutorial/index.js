const express = require("express");
const Router = express.Router();
const app = express();
const mongoose = require("mongoose")
const cors =require('cors')
const bodyParser = require ('body-parser');
const postRoutes=require('./routes/posts')
app.use(cors())
app.use(bodyParser.json())
app.use('/posts',postRoutes)
app.get('/posts',(req,res)=>{
    res.send("we are on posts")
    })
    mongoose.set('strictQuery', false); // new
let dbURI ="mongodb+srv://joselyne:12345@myapi.19iwnvv.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(dbURI)
.then(() => {
  const app = express()
});
app.listen(3000);

