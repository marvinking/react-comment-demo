/**
 * Created by marvin on 18/1/18.
 */

import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  render () {
    return (
      <div>
        {this.props.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
      </div>
    )
  }
}

export default CommentList
