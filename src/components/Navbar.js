import React from 'react'
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="https://surajraj95066.github.io/project-react/">FoldHope</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active" style={{ marginRight: '15px' }}>
                            <Link to="/Working" style={{ color: 'white', textDecoration: 'none' }}>Procedure</Link>
                        </li>
                        <li className="nav-item" style={{ marginRight: '15px' }}>
                            <Link to="/Data1" style={{ color: 'white', textDecoration: 'none' }}>Survey Report</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}
