/**
 * Created by marvin on 18/1/18.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number
  }

  componentWillMount () {
    this._updateTimeString()
    this.timer = setInterval(this._updateTimeString.bind(this), 5000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  _updateTimeString () {
    const comment = this.props.comment
    const timeInterval = (+Date.now() - comment.createdAt) / 1000
    this.setState({
      timeString: timeInterval > 60
        ? (timeInterval / 60 > 60
          ? (timeInterval / 60 / 60 > 24
              ? `${Math.round(timeInterval / 60 / 60 / 24)} 天前`
              : `${Math.round(timeInterval / 60 / 60)} 小时前`
            )
          : `${Math.round(timeInterval / 60)} 分钟前`
        )
        : `${Math.round(Math.max(timeInterval, 1))} 秒前`
    })
  }

  _getProcessedContent (content) {
    return content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }

  handleDeleteComment () {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index)
    }
  }

  render () {
    const { comment } = this.props
    return (
      <div className='comment'>
        <div className="comment-user">
          <span>{comment.userName} :</span>&nbsp;
        </div>
        <p dangerouslySetInnerHTML={{
          __html: this._getProcessedContent(comment.content)
        }}></p>
        {/*<p>{comment.content}</p>*/}
        <div className="comment-createdtime">{this.state.timeString}</div>
        <div className="comment-delete" onClick={this.handleDeleteComment.bind(this)}>删除</div>
      </div>
    )
  }
}

export default Comment
