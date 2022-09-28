import React, { useState } from 'react'
import axios from 'axios'
import urls from './Urls'
import useAlert from './Alert/userAlert'

const PostCreate = ({ notifyParent }) => {
  const [title, setTitle] = useState('')
  const { setAlert } = useAlert()
  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post(`${urls.PostsServiceBase}/posts`, {
        title,
      })
      notifyParent()
      setTitle('')
      setAlert(`New post ${title} created successfully`, 'success')

    } catch (err) {
      setAlert(`error occured when creating new post ${title}`, 'danger')
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default PostCreate
