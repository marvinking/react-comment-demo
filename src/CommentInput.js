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

  componentWillMount () {
    this._loadUserName()
  }

  componentDidMount () {
    this.textarea.focus()
  }

  // 如果localStorage中存在userName，则将userName取出来加载到用户名输入框中
  _loadUserName () {
    let userName = localStorage.getItem('userName')
    if (userName) {
      this.setState({ userName })
    }
  }

  // 将用户名保存到localStorage中
  _saveUserName (userName) {
    localStorage.setItem('userName', userName)
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

  handleUsernameBlur (e) {
    this._saveUserName(e.target.value)
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

export default CommentInput
