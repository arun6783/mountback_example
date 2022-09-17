import { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'

import Table from 'react-bootstrap/Table'
import axios from 'axios'
import Message from './Message'
import EditUser from './EditUser'
function Users() {
  const postUrl = `/api/users`
  const getUrl = `/api/users`
  const [users, setUsers] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [editUser,setEditUser] = useState(undefined)
  const [name, setName] = useState(undefined)
  const [email, setEmail] = useState(undefined)
  const [username, setuserName] = useState(undefined)
  const [error, setError] = useState(undefined)
  const isValidEmail = function (email) {
    return /^\S+@\S+\.\S+$/.test(email)
  }
  const onSubmit = async (e) => {
    e.preventDefault()
    setError(undefined)
    if (isValidEmail(email)) {
       axios
        .post(postUrl, { name, email, username })
        .then(()=>{
          const newData = [...users, {id:users.length+1, name, email, username}]
          setUsers(newData)
        })
        .catch((err) => {
          console.log('error occured when posting data', err)
          setError('error occured when posting data')
        })
    } else {
      setError('email is invalid')
    }
  }


  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(getUrl)
      setUsers(data)
    }

    fetchData().catch(console.error)
  }, [])
  return (
    <>
    <EditUser showModal={showModal} user={editUser} close={(flag, updatedUser)=>{setShowModal(flag)}} />
      <Message variant="danger">{error}</Message>
      <Row style={{ maxHeight: '500px', overflowY: 'auto' }}>
        <Table id="usersList" striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th> Name</th>
              <th>username</th>
              <th>Email</th>
              <th>view/edit</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr id={`row_${user.username}`} key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td> <a href='javascript:void(0)' onClick={ ()=>{ setEditUser(user); setShowModal(true);} } >view</a> <a href='javascript:void(0)'>edit</a></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Row>
      <Row>
        <form onSubmit={onSubmit}>
          <Row>
            <div key="nameContainer" className="col-sm">
              <label>Name</label>
              <input
              id="name"
                key="nameInput"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="col-sm">
              <label>username</label>
              <input
              id="userName"
                value={username}
                onChange={(e) => setuserName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="col-sm">
              <label>Email</label>
              <input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="col-sm">
              <button id="submitBtn" className="btn btn-primary my-4 py-2">Submit</button>
            </div>
          </Row>
        </form>
      </Row>
    </>
  )
}

export default Users
