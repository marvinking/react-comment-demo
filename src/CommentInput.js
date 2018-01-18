/**
 * Created by marvin on 18/1/18.
 */

import React, { Component } from 'react'

class CommentInput extends Component {
  render () {
    return (
      <div>
        <div>
          <span>用户名: </span>
          <input type="text"/>
        </div>
        <div>
          <span>评论内容: </span>
          <textarea></textarea>
        </div>
        <button>发布</button>
      </div>
    )
  }
}

export default CommentInput
