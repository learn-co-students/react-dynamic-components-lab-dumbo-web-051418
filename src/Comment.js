import React, { Component } from 'react';

class Comment extends Component {
  render() {

    return (
      <div className="comment">
        {this.props.commentText}

      </div>
    )

  }
}

export default Comment


//
// it should expect a single prop (the text of a comment), which can be used in the component via: this.props.commentText. This prop is passed in src/BlogPost.js
// it should have a single <div> in its render() method
// the <div> should have a className="comment" attribute
// Note: The BlogPost component needs minor alteration to properly pass the contents of its commentsArray to each of the Comment components that it is rendering
// Don't forget - we can unpack variable values directly with JSX by wrapping them in {}, i.e. {this.props.commentText}
