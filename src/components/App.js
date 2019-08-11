import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

  state = {videos : [], selectedVideo : null};

  componentDidMount(){
      this.callVideoApi('best trailers');
  }

  onVideoSelect = video => {
      this.setState({selectedVideo: video});
  }

  callVideoApi = async (term) => {

      const videos = await youtube.get('/search', {
        params: {
          q: term
        }
      });
      this.setState({videos : videos.data.items, selectedVideo:videos.data.items[0]});
      //console.log(videos);

  }

  render(){
    return(
      <div className="ui container">
            <SearchBar onSearchTermEntered= {this.callVideoApi}/>
            <div className= "ui grid">
                <div className= "ui row">
                      <div className= "eleven wide column">
                          <VideoDetail video= {this.state.selectedVideo}/>
                      </div>
                      <div className= "five wide column">
                          <VideoList videos = {this.state.videos} onVideoSelect= {this.onVideoSelect}/>
                      </div>
                </div>
            </div>
      </div>
    );
  }
}
export default App;
