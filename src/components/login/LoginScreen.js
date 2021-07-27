import React from 'react';
import './login.css';

const LoginScreen = ({ history }) => {


    const handleLogin = () => {
        history.replace('/');
    }

    return (
        <div className="principal-container">
            <h1>Login</h1>
            <form className="form">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary" onClick={handleLogin}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default LoginScreen
