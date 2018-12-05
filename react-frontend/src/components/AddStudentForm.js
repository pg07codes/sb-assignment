/*created by Pranav Gupta(pg07codes) on 5/12/18*/

import React from 'react'
import axios from 'axios'
class AddStudentForm extends React.Component{

    state={
        name:'',
        age:'',
        batchYear:'',
        course:'',
        workExp:'',
        company:'',
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
        console.log(e.target.value)

    }

    submitHandler=(e)=>{
        axios.post('http://127.0.0.1:8888/addStudent',this.state)
            .then((s)=>{
                console.log(s)
            })
            .catch(e=>{
            console.log(e)
        })
    }


    render(){
        return(
            <form className='mt-3' onSubmit={this.submitHandler}>
                <div className="form-group">
                    <input onChange={this.handleChange} type="text" className="form-control" id="name" placeholder="Enter name" required/>
                </div>
                <div className="form-group">
                    <input onChange={this.handleChange} type="number" className="form-control" id="age" placeholder="Enter age" required/>
                </div>
                <div className="form-group">
                    <input onChange={this.handleChange} type="number" className="form-control" id="batchYear" placeholder="Enter batchYear" required/>
                </div>
                <div className="form-group">
                    <input onChange={this.handleChange} type="string" className="form-control" id="course" placeholder="Enter course" required/>
                </div>
                <div className="form-group">
                    <input onChange={this.handleChange} type="number" className="form-control" id="workExp" placeholder="Enter work Experience" required/>
                </div>
                <div className="form-group">
                    <input onChange={this.handleChange} type="string" className="form-control" id="company" placeholder="Enter company" required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }

}

export default AddStudentForm