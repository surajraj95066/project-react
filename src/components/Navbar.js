import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://surajraj95066.github.io/project-react/">FoldHope</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <Link to="/Working" className="nav-link">Procedure</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Data1" className="nav-link">Survey Report</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}