/*created by Pranav Gupta(pg07codes) on 5/12/18*/

import React from 'react'
import { Link } from 'react-router-dom'

class LoginForm extends React.Component{

    state={
        username:'',
        password:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    render(){
        return(
            <form className='mt-5'>
                <div className="form-group">
                    <label htmlFor="username">Email address</label>
                    <input onChange={this.handleChange} type="text" className="form-control" id="username" placeholder="Enter Username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={this.handleChange} type="password" className="form-control" id="password" placeholder="Enter Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }

}

export default LoginForm