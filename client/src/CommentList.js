import React from 'react'
import axios from 'axios'
import Ratings from './Ratings'
import urls from './Urls'
import useAlert from './Alert/userAlert'

const CommentList = ({ postId, comments, notifyParent }) => {
  const { setAlert } = useAlert()

  const removeComment = async (commentId) => {
    try {
      await axios.delete(
        `${urls.CommentsServiceBase}/post/${postId}/comments/${commentId}`
      )
      notifyParent(true)
    } catch (e) {
      const msg = `error occured when deleting comment for post id=${postId}.`
      console.log(`${msg} error = ${e}`)
      setAlert(msg, 'danger')
    }
  }

  const renderedComments = comments.map((comment) => {
    let content = comment.content
    // if (comment.status === 'approved') {
    //   content = comment.content
    // }

    // if (comment.status === 'pending') {
    //   content = 'This comment is awaiting moderation'
    // }

    // if (comment.status === 'rejected') {
    //   content = 'This comment has been rejected'
    // }
    return (
      <li className="list-group-item" key={comment.id}>
        <div style={{ display: 'flex' }}>
          {content}

          {/* {comment.status === 'approved' ? (
            <span style={{ marginLeft: 'auto' }}>
              <a
                onClick={(e) => {
                  e.preventDefault()
                  removeComment(comment.id)
                }}
              >
                <i className="fa-solid fa-circle-minus"></i>
              </a>
            </span>
          ) : null} */}
        </div>
        {/* {comment.ratings ? (
          <Ratings
            commentId={comment.id}
            rating={comment.ratings}
            notifyParent={notifyParent}
            postId={postId}
          />
        ) : null} */}
      </li>
    )
  })

  return (
    <ul
      className="list-group list-group-flush overflow-auto"
      style={{ maxHeight: '200px', borderBottom: '10px' }}
    >
      {renderedComments}
    </ul>
  )
}

export default CommentList
