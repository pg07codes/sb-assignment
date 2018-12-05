/*created by Pranav Gupta(pg07codes) on 4/12/18*/

const Sequelize=require('sequelize')
const dt=Sequelize.DataTypes
const dbconfig=require('../config.json').DB

const db=new Sequelize(dbconfig.NAME,dbconfig.USER,dbconfig.PASSWORD,{
    dialect:'mysql'
})

//define models here
const student=db.define('student',{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type:dt.INTEGER
    },
    name:{
        allowNull:false,
        type:dt.STRING
    },
    age:{
        allowNull:false,
        type:dt.INTEGER
    }

})
const studentProfDetail=db.define('studentProfDetail',{
    batchYear:{
        allowNull:false,
        type:dt.INTEGER
    },
    course:{
        allowNull:false,
        type:dt.STRING
    },
    workExp:{
        allowNull:false,
        type:dt.INTEGER
    },
    company:{
        allowNull:false,
        type:dt.STRING
    }
})

// for two way binding/querying of models and joining tables

studentProfDetail.belongsTo(student)
student.hasOne(studentProfDetail)


const admin=db.define('admin',{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type:dt.INTEGER
    },
    username:{
        allowNull:false,
        unique:true,
        type:dt.STRING
    },
    password:{
        allowNull:false,
        type:dt.STRING
    }
})

// The below line is only for development purpose to
// create an admin after 5s(so that table has been created after force destroy).
// (should only be uncommented if admin table is empty(i.e. when no admin exists))
//
// setTimeout(()=>{
//     admin.create(require('../config').CREDS)
// },5000)

db.sync({
    //alter:true
    //force:true
}).then(()=>console.log("db is synced"))

module.exports={db,student,studentProfDetail,admin}
