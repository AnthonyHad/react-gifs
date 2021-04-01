import React, { Component } from 'react';

class Gif extends Component { // reusable component with any id
  handleClick = () => {
    if (this.props.displayGif) {
      this.props.displayGif(this.props.id)
    }
  }

  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif?cid=ecf05e47b9rtoxvlp2dpzkzubdjxb8bbcavskstvgrfpxs22&rid=giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}


export default Gif;
