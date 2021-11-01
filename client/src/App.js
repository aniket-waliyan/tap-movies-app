import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Components/Header';
import MoviesRouter from './MoviesRouter';

function App() {
    return (
        <Router>
            <Header />
            <Container className="mt-4">
                <MoviesRouter />
            </Container>
        </Router>
    );
}

export default App;
