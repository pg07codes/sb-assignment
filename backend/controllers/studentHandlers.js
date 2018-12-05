/*created by Pranav Gupta(pg07codes) on 5/12/18*/

const {student,studentProfDetail}=require("../db/models")

module.exports={
    insertStudent: async function(r,s){
        try{
            const newStudent =
                await student.create({
                    name:r.body.name,
                    age:r.body.age
                })
            await studentProfDetail.create({
                batchYear: r.body.batchYear,
                course:r.body.course,
                company:r.body.company,
                workExp:r.body.workExp,
                studentId: newStudent.id
            })
            return (new Promise((res)=>{
                res({success:true})
            }))
        }
        catch(e){
            console.log(e);
            return (new Promise((res)=>{
                res({error:e})
            }))
        }
        },
    getAllStudents: async function(){

        // joining both the table on id and then fetching json data

        try{
            const data=await student.findAll({
                include:[{
                    model:studentProfDetail
                }]
            })
            return (new Promise((res)=>{
                res(data)
            }))
        }
        catch(e){
            console.log(e);
            return (new Promise((res)=>{
                res({error:e})
            }))
        }
    },
}