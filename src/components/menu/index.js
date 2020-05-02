import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class Menu extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/paises">Pais</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/aeroportos">Aeroporto</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/rotas">Rota</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br />
            </>
        )
    }
}
