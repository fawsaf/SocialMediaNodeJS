const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet"); 

// const morgan = require("morgan");
const userRoute = require('./routes/users.js')
const authRoute = require('./routes/auth.js');
const postRoute = require('./routes/posts.js');
const app = express();
dotenv.config(); 
const cors = require('cors');


mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true})
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error); 
  });

//middleware
app.use(express.json());
app.use(helmet());
// Enable CORS for all routes
app.use(cors());

// app.use(morgan('common'));
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.get('/', (req,res)=>{
    res.send("welcome to home page");
})

app.listen(8800, ()=>{
    
    console.log("backend server is running!!");
})