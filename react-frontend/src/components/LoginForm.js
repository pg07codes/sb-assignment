/*created by Pranav Gupta(pg07codes) on 5/12/18*/

import React from 'react'
import { Link , withRouter} from 'react-router-dom'
import axios from 'axios'

class LoginForm extends React.Component{

    state={
        username:'',
        password:''
    }

    submitHandler=(e)=>{
        e.preventDefault()
        axios.post('http://127.0.0.1:8888/auth/login',this.state)
            .then(r=>{
                if(r.data.isAdmin===true){
                    this.props.updateState({isAdmin:true})
                    this.props.history.push('/')
                }
            })
            .catch(e=>console.log(e))
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    render(){
        return(
            <form className='mt-5' onSubmit={this.submitHandler}>
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

export default withRouter(LoginForm)