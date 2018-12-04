/*created by Pranav Gupta(pg07codes) on 4/12/18*/


const express = require("express")
const path = require("path")
const app = express()
const PORT=process.env.PORT || 8888
bb
//serving files and parsing request body
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// to enable CORS request from react app in development version
app.use("/", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next();
});

//home route
app.get("/",(r,s)=> {
    s.json({name:'pg the boss'})
})

//server starts listening
app.listen(PORT, () =>
    console.log("up at http://localhost:"+PORT)
)
