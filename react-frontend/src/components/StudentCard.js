/*created by Pranav Gupta(pg07codes) on 5/12/18*/


import React from 'react'

function StudentCard (props){
    let style={
        width: "15rem",
        height:"10rem"
    }
    return(
        <div className="col-md-4 col-sm-6 mb-2">
            <div className="card bg-light" style={style}>
                <div className="card-body">
                    <h5 className="card-title">{props.sInfo.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted"> works @ {props.sInfo.studentProfDetail.company}</h6>
                    <p className="card-text">With a total work experience of
                        {" " + props.sInfo.studentProfDetail.workExp} years,{props.sInfo.name} did his major in
                        {" " + props.sInfo.studentProfDetail.course}, batch of {" " + props.sInfo.studentProfDetail.batchYear} .</p>
                </div>
            </div>
        </div>

    )
}

export default StudentCard