/*created by Pranav Gupta(pg07codes) on 5/12/18*/

const Router=require("express").Router()
const ctrl=require("../controllers/studentHandlers")
const passport=require("../passport")


Router.get("/",(r,s)=> {
    s.json({'this is an api server':'For Development Purpose Only'})
})

Router.post('/addStudent',async(r,s)=>{

    status=await ctrl.insertStudent(r,s)
    s.json(status)
})

Router.get('/getAllStudents',async (r,s)=>{
    const data=await ctrl.getAllStudents()
    s.send(data)
})

Router.post('/auth/login',passport.authenticate('local'),(req,res)=>{
    res.send({isAdmin:true})
})

Router.get('/auth/logout',(r,s)=>{
    if(r.isAuthenticated()){
        r.logout()
        r.session.destroy()
        s.send({isAdmin:false})
    }
    else
        s.redirect('http://localhost:3000') // this is a fix for now as i find a way to setCookies in browser
})

Router.get('/auth/verifyAdmin',(r,s)=>{
    if(r.isAuthenticated())
        return (s.JSON({isAdmin:true}))
    else
        return(s.JSON({isAdmin:false}))
})


module.exports=Router