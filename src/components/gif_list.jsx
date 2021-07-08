import React, { Component } from 'react';

import Gif from './gif';

class GifList extends Component {
  render() {
    return (
      <div className="gif-list">
        {this.props.searchedGifs.map(gif => {
          return < Gif id={gif.id} key={gif.id} clickFunction={this.props.clickFunction} />
        })}
      </div>
    )
  }
}

export default GifList;
