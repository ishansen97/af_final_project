import React, {Component} from "react";
import Aflogo from '../aflogo.svg';
import "bootstrap/dist/css/bootstrap.css";

class NavBar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <a className="navbar-brand" href="#">
                    <img className="App-logo" src={Aflogo}/>
                </a>
                <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item active">
                            <a className="nav-link text-white ml-4" href="#">
                                <i className="fas fa-user-graduate"></i> &nbsp; Student Corner <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white ml-4" href="#">
                                <i className="fas fa-book"></i> &nbsp; Courses
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white ml-4" href="#">
                                <i className="fas fa-user-circle"></i> &nbsp; Profile
                            </a>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}

export default NavBar;