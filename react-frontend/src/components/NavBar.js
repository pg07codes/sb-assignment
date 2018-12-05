/*created by Pranav Gupta(pg07codes) on 5/12/18*/

import React from 'react'
import { Link } from 'react-router-dom'
function NavBar (props){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                {props.isAdmin?<ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/addStudent">Add New Student</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn btn-primary" href="http://localhost:8888/auth/logout">Logout</a>
                    </li>
                </ul>:
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                }

            </div>
        </nav>
    )
}

export default NavBar