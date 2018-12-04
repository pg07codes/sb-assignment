/*created by Pranav Gupta(pg07codes) on 5/12/18*/

import React from 'react'
import { Link } from 'react-router-dom'
function NavBar (){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Features</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Pricing</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar