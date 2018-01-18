/**
 * Created by marvin on 18/1/18.
 */

import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {

  handleSubmitComment (comment) {
    console.log(11, comment);
  }

  render () {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList />
      </div>
    )
  }
}

export default CommentApp
