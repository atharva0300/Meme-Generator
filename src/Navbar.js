import React from 'react'

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a href="/" class="navbar-brand">Meme Generator</a>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav">
                        <a href="/" class="nav-item nav-link active">Home</a>
                        <a href="/" class="nav-item nav-link active">About</a>
                        <a href="/" class="nav-item nav-link active">Contact Us</a>
                        <a href="/" class="nav-item nav-link active">Workspace</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
