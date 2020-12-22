import React from "react"
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light static-top header-a">
            <div className="container nav-container">
                <Link to="/"><h1 className="navbar-brand brand" href="#">IPL</h1></Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/discover">
                <div className="collapse navbar-collapse alink" id="navbarSupportedContent">
                   
                    <ul className="navbar-nav ml-auto">


                        <a className="btn btn-outline-dark start" href="#">Get Started</a>

                    </ul>
           

                </div>
                </Link>

            </div>
        </nav>
    );
}

export default Nav;