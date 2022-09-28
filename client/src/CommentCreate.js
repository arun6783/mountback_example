import React, { useState } from 'react'
import axios from 'axios'
import urls from './Urls'
import useAlert from './Alert/userAlert'

const CommentCreate = ({ postId, notifyParent }) => {
  const [content, setContent] = useState('')
  const { setAlert } = useAlert()

  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post(`${urls.CommentsServiceBase}/post/${postId}/comments`, {
        content,
      })
      notifyParent(true)
      setContent('')
      setAlert('successfully created new comment', 'success')
    } catch (e) {
      let msg='';
      if (e.response.status === 400) {
        const validationMessages = e.response.data?.validationMessages || []
        validationMessages.forEach((x)=>{ msg += '<li>' + x + '</li>'})
      }else{
        msg = `error occured when creating comment for post id=${postId}.`
      }
      console.log(`${msg} error = ${e}`)
      setAlert(msg, 'danger')
    }
  }

  return (
    <div className="mt-2">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default CommentCreate
