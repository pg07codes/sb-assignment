/*created by Pranav Gupta(pg07codes) on 5/12/18*/

const Router=require("express").Router()
const ctrl=require("../controllers/studentHandlers")

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

module.exports=Router