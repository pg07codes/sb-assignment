/*created by Pranav Gupta(pg07codes) on 5/12/18*/

const admin=require("../db/models").admin


module.exports={
    getAdmin:(username)=>{
        admin.findOne({
            where:{
                username:username
            }
        }).then(d=>d)
            .catch(e=>console.log(e))
    }
}