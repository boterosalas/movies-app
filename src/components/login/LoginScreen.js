import React, { useContext, useState } from 'react';
import { UserContext } from '../../routers/UserContext';
import './Login.css';

const LoginScreen = ({ history }) => {
    const { setUser } = useContext(UserContext);
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        setUser(formState);
        history.replace('/');
    }

    return (
        <div className="principal-container">
            <h1 className="text-dark">Inicio de sesión</h1>
            <form className="form" onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="inputName" className="form-label">Nombre</label>
                    <input onChange={handleInputChange} value={name} name="name" placeholder="John Doe" type="text" className="form-control" id="inputName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">Correo</label>
                    <input onChange={handleInputChange} value={email} name="email" placeholder="johndoe@example.com" type="email" className="form-control" id="inputEmail" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Ingresar</button>
            </form>
        </div>
    )
}

export default LoginScreen
