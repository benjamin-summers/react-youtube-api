import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBdSaPzzbVDMFMYFgkQzBGGpsO7G6mCKQI';

YTSearch(
    {key: API_KEY, term: 'surfboards'}, function(data) {console.log(data)}
    );

class App extends Component {
    render() {
        return (
            <SearchBar />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
