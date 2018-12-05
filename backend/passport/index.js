/*created by Pranav Gupta(pg07codes) on 5/12/18*/


const passport = require('passport')
const localStrategy = require('./strategies').localStrategy
const sHandler = require('../controllers/sessionHandler')


passport.use(localStrategy)

passport.serializeUser(function (user, done) {

    done(null, user.username)
})

passport.deserializeUser(function(username, done) {

    sHandler.getAdmin(username)
        .then((user) => done(null, user))
        .catch((err) => done(err))
})

module.exports = passport