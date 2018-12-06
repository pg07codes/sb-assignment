/*created by Pranav Gupta(pg07codes) on 5/12/18*/



import React from 'react'
import StudentCard from './StudentCard'


function StudentGroup (props){

    let StudentCards=props.students.map(s=><StudentCard sInfo={s}/>)
    if(props.year===undefined){
        return(
            <div className='container m-3'>
                <div className="alert alert-success" role="alert">
                    {props.course}
                </div>
                <div className="row m-1">
                    {StudentCards}
                </div>

            </div>
        )
    }
    return(
        <div className='container m-3'>
            <div className="alert alert-success" role="alert">
                {props.year}
            </div>
            <div className="row m-1">
                {StudentCards}
            </div>

        </div>
    )

}

export default StudentGroup