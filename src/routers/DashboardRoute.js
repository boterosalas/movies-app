import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import CharactersScreen from '../components/characters/CharactersScreen';
import ComicsScreen from '../components/comics/ComicsScreen';
import EventsScreen from '../components/events/EventsScreen';
import SeriesScreen from '../components/series/SeriesScreen';
import StoriesScreen from '../components/stories/StoriesScreen';
import Navbar from '../components/ui/Navbar';

const DashboardRoute = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/characters" component={CharactersScreen} />
                    <Route exact path="/comics" component={ComicsScreen} />
                    <Route exact path="/series" component={SeriesScreen} />
                    <Route exact path="/events" component={EventsScreen} />
                    <Route exact path="/stories" component={StoriesScreen} />
                    <Redirect to="/characters" />
                </Switch>
            </div>
        </>
    )
}

export default DashboardRoute
