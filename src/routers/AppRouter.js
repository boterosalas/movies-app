import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import LoginScreen from '../components/login/LoginScreen';
import DashboardRoute from './DashboardRoute';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exac path="/login" component={LoginScreen} />
                    <Route exac path="/" component={DashboardRoute} />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
