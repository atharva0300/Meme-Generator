import React from 'react'
import Applogo from './Applogo.png';
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a href="/" class="navbar-brand"><img src={Applogo} alt = "logo" width = "40"/>&nbsp; Meme Generator</a>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav">
                    <Link class="nav-item nav-link active" to="/"> Home</Link>
                    <Link class="nav-item nav-link active" to="/about"> About Us</Link>
                    <Link class="nav-item nav-link active" to="/contact"> Contact Us</Link>

                    <a href="/" class="nav-item nav-link active">Workspace</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
