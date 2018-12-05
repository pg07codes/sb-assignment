/*created by Pranav Gupta(pg07codes) on 4/12/18*/


const express = require("express")
const path = require("path")
const app = express()
const PORT=process.env.PORT || 8888

const expressSession=require("express-session")
const SessionStore=require('express-session-sequelize')(expressSession.Store)
const db=require('./db/models').db
const passport=require("passport")


require("./db/models")


//serving files and parsing request body
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// using a session store to store sessions
const sequelizeSessionStore=new SessionStore({
    db:db
})

// session generation middleware

app.use(expressSession({
    secret:"vfjav;bjavavjb;(for dev only)",
    resave:false,
    saveUninitialized:false,
    //store:sequelizeSessionStore
}))

app.use(passport.initialize())
app.use(passport.session())

// to enable CORS request from react app in development version
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
});


//routing is done here for the API
app.use('/',require('./routes/routing'))


//server starts listening
app.listen(PORT, () =>
    console.log("up at http://localhost:"+PORT)
)
