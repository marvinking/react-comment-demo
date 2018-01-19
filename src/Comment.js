/**
 * Created by marvin on 18/1/18.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired
  }

  componentWillMount () {
    this._updateTimeString()
  }

  _updateTimeString () {
    const comment = this.props.comment
    const timeInterval = (+Date.now() - comment.createdAt) / 1000
    this.setState({
      timeString: timeInterval > 60
        ? `${Math.round(timeInterval / 60)} 分钟前`
        : `${Math.round(Math.max(timeInterval, 1))} 秒前`
    })
  }

  render () {
    const { comment } = this.props
    return (
      <div className='comment'>
        <div className="comment-user">
          <span>{comment.userName} :</span>&nbsp;
        </div>
        <p>{comment.content}</p>
        <div className="comment-createdtime">{this.state.timeString}</div>
      </div>
    )
  }
}

export default Comment
