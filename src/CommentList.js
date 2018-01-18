/**
 * Created by marvin on 18/1/18.
 */

import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
  render () {
    const comments = [
      {username: 'Jerry', content: 'Hello'},
      {username: 'Tomy', content: 'World'},
      {username: 'Lucy', content: 'Good'}
    ]

    return (
      <div>
        {comments.map((comment, index) => <Comment key={index} comment={comment} />)}
      </div>
    )
  }
}

export default CommentList
