import React, { Component } from 'react';

export default class ColorBox extends Component {

  variableThing = this.props.opacity

  render() {
    console.log(this.variableThing);
    const opacity = this.props.opacity
    const divStyle = {
      color: 'white',
      opacity: opacity
    };

    if (opacity > 0.11) {
      return (
        <div className="color-box" style={divStyle}>
          <ColorBox opacity={opacity-.1}/>
        </div>
      )
    } else {
      return null
    }
  }

}
