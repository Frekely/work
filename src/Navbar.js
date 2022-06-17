import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container-fluid">
                <a className="navbar-brand f2 ml5" href="#">Atomic</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav f4">
                        <li className="nav-item">
                            <a className="nav-link active mr3" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item ml">
                            <a className="nav-link active mr3" href="#">About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle mr3" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Service
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active mr3" href="#">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active mr3" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active mr6" href="#">Contact</a>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;