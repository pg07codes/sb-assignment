/*created by Pranav Gupta(pg07codes) on 5/12/18*/

const {student,studentProfDetails}=require("../db/models")

module.exports={
    insertStudent: async function(r,s){
        try{
            const newStudent =
                await student.create({
                    name:r.body.name,
                    age:r.body.age
                })
            await studentProfDetails.create({
                batchYear: r.body.batchYear,
                course:r.body.course,
                company:r.body.company,
                workExp:r.body.workExp,
                studentId: newStudent.id
            })
            s.json({success:true})
        }
        catch(e){
            console.log(e);
        }
        },
}