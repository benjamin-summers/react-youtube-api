import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
import './style/style.css';

const API_KEY = 'AIzaSyBdSaPzzbVDMFMYFgkQzBGGpsO7G6mCKQI';

YTSearch(
    {key: API_KEY, term: 'surfboards'}, function(data) {
        console.log(data);
    });

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        }

        //ytsearch put into constructor so setstate could be applied to it
        YTSearch(
            {key: API_KEY, term: 'surfboards'}, (videos) =>{
                this.setState({
                    videos: videos,
                    selectedVideo: videos[0]
                })
                // this.setState({ videos: videos })
        });
    }

    render() {
        return (
            <React.Fragment>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
