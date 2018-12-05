/*created by Pranav Gupta(pg07codes) on 5/12/18*/

const LocalStrategy = require('passport-local').Strategy
const admin = require('../db/models').admin
const bcrypt= require('bcrypt')

const localStrategy = new LocalStrategy(
    (username, password, done) => {
        admin.findOne({
            where: {
                username: username
            }
        }).then((user) => {

            if (!user) {
                //Wrong username
                console.log('wrong username and auth failed')
                return done(null, false, {message: 'Wrong username'})
            }

            bcrypt.compare(password, user.password, function(err, res) {
                if(res){
                    console.log('succesfull authentication')
                    return done(null, user)
                }
                else {
                    // Correct username, wrong password
                    console.log('Correct username, wrong password and auth failed')
                    return done(null, false, {message: 'Wrong password'})
                }
            })
        }).catch((err) => {
            return done(err)
        })
    })

module.exports= {localStrategy}