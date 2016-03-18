import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyAAb7eSMxZZ5dL_low26wdGT1Hi4qiRfUs';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('surfboards');
    }
    render() {
        const state = this.state;

        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                <VideoDetail video={state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={state.videos} />
            </div>
        );
    }
    videoSearch(term) {
        YTSearch({
            key: API_KEY,
            term: term
        }, videos => this.setState({
            videos,
            selectedVideo: videos[0]
        }));
    }
}

ReactDom.render(<App />, document.getElementById('app'));