import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    this.props.clickFunction(this.props.id);
  }

  render() {
    const url = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={url} class="gif" onClick={this.handleClick} />
    )
  }
}

export default Gif;
