import React, { useState } from 'react'
import AlertPopup from './Alert/AlertPopup'
import PostCreate from './PostCreate'
import PostList from './PostList'

const App = () => {
  const [postCreated, setPostCreated] = useState(false)
  return (
    <>
      <AlertPopup />
      <div className="container">
        <h1>Create Post</h1>
        <PostCreate
          notifyParent={() => {
            setPostCreated(!postCreated)
          }}
        />
        <hr />

        <PostList postCreated={postCreated} />
      </div>
    </>
  )
}
export default App
