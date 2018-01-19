/**
 * Created by marvin on 18/1/18.
 */

import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
  constructor () {
    super()
    this.state = {
      comments: []
    }
  }

  componentWillMount () {
    this._loadComments()
  }

  // 加载已存评论列表
  _loadComments () {
    let comments = localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({ comments })
    }
  }

  // 保存评论列表
  _saveComments (comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }


  handleSubmitComment (comment) {
    if (!comment) return
    if (!comment.userName) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')

    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
    this._saveComments(this.state.comments)
  }

  render () {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
}

export default CommentApp
