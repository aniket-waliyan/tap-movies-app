import { Route, Switch } from 'react-router-dom';
import AddMovie from './pages/AddMovie';

import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

function MoviesRouter() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/add-movie">
                <AddMovie />
            </Route>
            <Route path="/:movieId">
                <MovieDetails />
            </Route>
        </Switch>
    );
}

export default MoviesRouter;
