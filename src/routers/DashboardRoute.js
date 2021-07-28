import React, { useContext, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Footer from '../components/shared/footer/Footer';
import HomeScreen from '../components/home/HomeScreen';
import MovieScreen from '../components/movie/MovieScreen';
import SearchScreen from '../components/search/SearchScreen';
import Navbar from '../components/shared/navbar/Navbar';
import { UserContext } from './UserContext';
import './DashboardRoute.css';

const DashboardRoute = () => {
    let history = useHistory();
    const { user } = useContext(UserContext);
    useEffect(() => {
        if (!user) {
            history.push('/login');
        }
    }, [user, history])
    return (
        <>
            {
                user &&
                <>
                    <Navbar />
                    <main className="container mt-7">
                        <Switch>
                            <Route exact path="/" component={HomeScreen} />
                            <Route exact path="/search/:text" component={SearchScreen} />
                            <Route exact path="/movie/:id" component={MovieScreen} />
                            <Redirect to="/" />
                        </Switch>
                    </main>
                    <Footer />
                </>
            }
        </>
    )
}

export default DashboardRoute
