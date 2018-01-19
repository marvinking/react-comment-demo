/**
 * Created by marvin on 18/1/18.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }

  constructor () {
    super()
    this.state = {
      userName: '',
      content: ''
    }
  }

  handleUsernameChange (e) {
    this.setState({
      userName: e.target.value
    })
  }

  handleContentChange (e) {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit () {
    if (this.props.onSubmit) {
      const { userName, content } = this.state
      this.props.onSubmit({userName, content})
    }
    this.setState({
      content: ''
    })
  }

  componentDidMount () {
    this.textarea.focus()
  }

  render () {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className='comment-field-name'>用户名: </span>
          <div className='comment-field-input'>
            <input type="text" value={this.state.userName} onChange={this.handleUsernameChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容: </span>
          <div className='comment-field-input'>
            <textarea ref={textarea => this.textarea = textarea} value={this.state.content} onChange={this.handleContentChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>发布</button>
        </div>
      </div>
    )
  }
}

export default CommentInput
