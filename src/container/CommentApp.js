/**
 * Created by marvin on 18/1/22.
 */

import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

export default class CommentApp extends Component {
  render () {
    return (
      <div className="wrapper">
        <CommentList/>
        <CommentInput/>
      </div>
    )
  }
}
