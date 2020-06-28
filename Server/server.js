const cors = require("cors")
const express = require("express")
const dotenv = require("dotenv")
const session = require("express-session")
const passport = require("passport")
const mongoose = require("mongoose")
const MongoStore = require("connect-mongo")(session) //  ToStore Session In DataBase


const connectDB = require("./config/db") // Import function to Connect To Db

// Init App
const app = express()
// Load Config
dotenv.config({ path: "./config/config.env" })
// passport config
require("./config/passport")(passport)
// ConnectDB
connectDB()

// CORS
app.use(
   cors({
      origin: "http://localhost:3000",
   })
)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Authorization", "Access-Control-Allow-Headers", "Origin","X-Requested-With", "Content-Type", "Accept");
    next();
});

// session Middleware
app.use(
   session({
      secret: process.env.COOKIEKEY,
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({
         mongooseConnection: mongoose.connection, // Store Session In DataBase
         ttl: 10 * 24 * 60 * 60, // = 10 days
      }),
   })
)

// initialize passport
app.use(passport.initialize())
app.use(passport.session())

// set up routes
app.use("/auth", require("./routes/authRoutes"))
app.use("/", require("./routes"))

const port = process.env.PORT || 5000
app.listen(port, console.log(`Server Running on Port ${port}...`))
