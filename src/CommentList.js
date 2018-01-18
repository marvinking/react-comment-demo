/**
 * Created by marvin on 18/1/18.
 */

import React, { Component } from 'react'

class CommentList extends Component {
  render () {
    const comments = [
      {username: 'Jerry', content: 'Hello'},
      {username: 'Tomy', content: 'World'},
      {username: 'Lucy', content: 'Good'}
    ]

    return (
      <div>
        {comments.map((comment, index) => {
          return (
            <div key={index}>
              {comment.username}: {comment.content}
            </div>
          )
        })}
      </div>
    )
  }
}

export default CommentList
