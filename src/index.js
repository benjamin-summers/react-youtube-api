import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBdSaPzzbVDMFMYFgkQzBGGpsO7G6mCKQI';

YTSearch(
    {key: API_KEY, term: 'surfboards'}, function(data) {
        console.log(data);
    });

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }

        //ytsearch put into constructor so setstate could be applied to it
        YTSearch(
            {key: API_KEY, term: 'surfboards'}, (videos) =>{
                this.setState({videos})
                // this.setState({ videos: videos })
        });
    }

    render() {
        return (
            <React.Fragment>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
