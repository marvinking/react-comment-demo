/**
 * Created by marvin on 18/1/18.
 */

import React, { Component } from 'react'

class CommentInput extends Component {
  render () {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className='comment-field-name'>用户名: </span>
          <div className='comment-field-input'>
            <input type="text"/>
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容: </span>
          <div className='comment-field-input'>
            <textarea></textarea>
          </div>
        </div>
        <div className='comment-field-button'>
          <button>发布</button>
        </div>
      </div>
    )
  }
}

export default CommentInput
