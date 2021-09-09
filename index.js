const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
// const bodyParser = require('body-parser')


// set up express

const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({extended: true}));
app.use(cors());


app.get('/', (req, res)=>{
  res.send('Welcome Rasheed, wlecome to my home')
})

const PORT = process.env.PORT || 6827; 

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

// set up mongoose

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);

// set up routes



app.use('/api/products', require('./routers/productRouter'));








