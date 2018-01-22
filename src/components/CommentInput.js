/**
 * Created by marvin on 18/1/22.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CommentInput extends Component {
  static propTypes = {
    userName: PropTypes.any,
    onSubmit: PropTypes.func,
    onUserNameInputBlur: PropTypes.func
  }

  static defaultProps = {
    userName: ''
  }

  constructor (props) {
    super(props)
    this.state = {
      userName: props.userName,
      content: ''
    }
  }

  componentDidMount () {
    this.textarea.focus()
  }

  handleUsernameBlur (e) {
    if (this.props.onUserNameInputBlur) {
      this.props.onUserNameInputBlur(e.target.value)
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
      this.props.onSubmit({
        userName: this.state.userName,
        content: this.state.content,
        createdAt: +new Date()
      })
    }

    this.setState({
      content: ''
    })
  }

  render () {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className='comment-field-name'>用户名: </span>
          <div className='comment-field-input'>
            <input
              type="text"
              value={this.state.userName}
              onChange={this.handleUsernameChange.bind(this)}
              onBlur={this.handleUsernameBlur.bind(this)}
            />
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
