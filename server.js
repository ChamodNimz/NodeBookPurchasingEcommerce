const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const config = require("./config");
const cors = require("cors");
const initPassport = require("./middlewares/passport");

// connect mongoDb
mongoose.connect(config.database_cloud, { useNewUrlParser: true })
        .then(function () {
            console.log('mongoDB connected');
        })
        .catch(function () {
            console.log('Error :');
        })

// set port
const port = process.env.PORT || config.port;

// routes setup
const auth = require("./routes/auth");
const adminRouter = require("./routes/admin");
const customerRouter = require("./routes/customer");

// app initialize
const app = express();

//#region - middlewares

// implement cors
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// implement passport
app.use(passport.initialize());
// app.use(passport.session());
// Passing passport instance to passport.js to Extract JWT and athenticate and authorize end points
require("./middlewares/passport")(passport);

//#endregion

// routes bind
app.use("/api/admin", adminRouter); // admin routes
//app.use('/api/customer', customerRouter); // customer routes
app.use("/api/auth", auth); // customer routes

/**
 * server setup
 */

const server = app.listen(port, ()=> {
  console.log("server started ....");
});

process.on("uncaughtException", (error)=> {
  console.log(error.message);
});
