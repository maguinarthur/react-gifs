import React, { Component } from 'react';
import giphy from 'giphy-api';

const GIPHY_API_KEY = '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedGifs: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    }
  }

  search = (query) => {
    giphy(GIPHY_API_KEY).search({
      q: query,
      rating: 'g',
      limit: 5
    }, (error, result) => {
      this.setState({ searchedGifs: result.data });
    });
  }

  click = (id) => {
    this.setState({ selectedGifId: id });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          < SearchBar searchFunction={this.search}/>,
          < Gif id={this.state.selectedGifId}/>
        </div>
        <div className="right-scene">
          < GifList searchedGifs={this.state.searchedGifs} clickFunction={this.click}/>
        </div>
      </div>
    )
  }
}

export default App;
