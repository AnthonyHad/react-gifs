import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xT9IgG50Fb7Mi0prBC"
    };

    // this.search("homer thinking"); //called inside the constructor
    // this.search = this.search.bind(this);
    // this.displayGif = this.displayGif.bind(this);
  }


  search = (query) => {
    giphy('3xLkxmK3SDmXh1OB4lRd4e8XX7g4CwyA').search({
      q: query,
      rating: 'g',
      limit: '10'
    }, (err, res) => {
      // updating the state
      this.setState({
        gifs: res.data
      });
    });
  }

  displayGif = (gifId) => {
    this.setState({
      selectedGifId:gifId
    });
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} displayGif={this.displayGif} />
        </div>
      </div>
    );
  }
}

export default App;
