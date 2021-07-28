import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import LoginScreen from '../components/login/LoginScreen';
import DashboardRoute from './DashboardRoute';
import { UserContext } from './UserContext';


const AppRouter = () => {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }} >
            <Router>
                <div>
                    <Switch>
                        <Route exac path="/login" component={LoginScreen} />
                        <Route exac path="/" component={DashboardRoute} />
                    </Switch>
                </div>
            </Router>
        </UserContext.Provider>
    )
}

export default AppRouter
