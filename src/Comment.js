/**
 * Created by marvin on 18/1/18.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired
  }

  render () {
    const { comment } = this.props
    return (
      <div className='comment'>
        <div className="comment-user">
          <span>{comment.userName} :</span>&nbsp;
        </div>
        <p>{comment.content}</p>
      </div>
    )
  }
}

export default Comment
