import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { UserContext } from '../../../routers/UserContext';

const Navbar = () => {
    let history = useHistory();
    const { setUser } = useContext(UserContext);
    const [textSearch, setTextSearch] = useState('');

    const searchMovie = (e) => {
        e.preventDefault();
        if (textSearch.trim().length === 0) return;
        history.push(`/search/${textSearch}`);
    }

    const onLogoutClick = () => {
        setUser(null);
        history.push('/login');
    }

    return (
        <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark mb-5">
            <NavLink
                activeClassName="active"
                className="navbar-brand"
                exact
                to="/"
            >
                MoviesApp
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto"></ul>
                <form className="form-inline my-2 my-lg-0" onSubmit={searchMovie}>
                    <input value={textSearch} onChange={(e) => { setTextSearch(e.target.value) }} className="form-control mr-sm-2" type="text" placeholder="Search a movie" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <span
                            className="nav-item nav-link pointer"
                            onClick={onLogoutClick}
                        >
                            Logout
                        </span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;