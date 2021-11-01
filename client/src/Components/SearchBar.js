import { Button, Form } from 'react-bootstrap';

function SearchBar({ setSearchText }) {
    let searchItem = '';

    const searchField = (value) => {
        searchItem = value;
    };

    // TODO: Handle the search field after the refresh button is clicked

    const onClickRefresh = () => {
        setSearchText('');
        searchItem = '';
    };

    return (
        <div className="d-flex justify-content-around">
            <Form.Control
                className="m-2 rounded-3"
                type="text"
                placeholder="Search a Movie"
                onChange={(e) => searchField(e.target.value)}
            />
            <Button
                className="m-2"
                variant="primary"
                onClick={() => setSearchText(searchItem)}
            >
                Search{' '}
            </Button>
            <Button className="m-2" variant="success" onClick={onClickRefresh}>
                Refresh{' '}
            </Button>
        </div>
    );
}

export default SearchBar;
