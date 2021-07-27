import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav w-100 justify-content-between">
                        <li>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink
                                        activeClassName="active"
                                        className="nav-item nav-link"
                                        exact
                                        to="/characters"
                                    >
                                        Characters
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        activeClassName="active"
                                        className="nav-item nav-link"
                                        exact
                                        to="/comics"
                                    >
                                        Comics
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        activeClassName="active"
                                        className="nav-item nav-link"
                                        exact
                                        to="/series"
                                    >
                                        Series
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        activeClassName="active"
                                        className="nav-item nav-link"
                                        exact
                                        to="/events"
                                    >
                                        Events
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        activeClassName="active"
                                        className="nav-item nav-link"
                                        exact
                                        to="/stories"
                                    >
                                        Stories
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/login"
                            >
                                Logout
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;