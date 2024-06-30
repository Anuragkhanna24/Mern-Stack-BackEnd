

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
 const userRoutes = require('./routes/userRoutes');

const app = express();

// MongoDB connection
mongoose.connect('mongodb://0.0.0.0:27017/userDB', {
  //useNewUrlParser: true,
   //useUnifiedTopology: true,
   //useCreateIndex: true,
    //useFindAndModify: false,
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Middleware
app.use(bodyParser.json());
app.use(function (req, res, next) {
  // console.log("secure");
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,Authkey,AccessToken"
  );

  // Pass to next layer of middleware
  next();
});
//console.log("ram");
// Routes
app.use(userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/uploads', express.static('uploads'));