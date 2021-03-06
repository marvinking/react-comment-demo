/**
 * Created by marvin on 18/1/18.
 */

import React, { Component } from 'react'

class Comment extends Component {
  render () {
    let {userName, content} = this.props.comment
    return (
      <div className='comment'>
        <div className="comment-user">
          <span>{userName} :</span>&nbsp;
        </div>
        <p>{content}</p>
      </div>
    )
  }
}

export default Comment
