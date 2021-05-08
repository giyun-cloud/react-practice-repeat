import React, { memo, useContext } from 'react'
import { ContextDispatch } from './App'

const User = memo(function User({ user }) {
  const dispatch = useContext(ContextDispatch)
  return <div key={user.id}>
    <b style={{
      color: user.toggle ? 'pink' : 'black',
      cursor: 'pointer'
    }} onClick={() => (dispatch({
      type: 'TOGGLE',
      id: user.id
    }))}>{user.username}</b> {user.email}
    <button onClick={() => (dispatch({
      type: 'REMOVE',
      id: user.id
    }))}>삭제</button>
    </div>
})

function UserList({ users }) {
  
  return (
    <div>
      {users.map( user => <User user={user} key={user.id} />)}
    </div>
    
  )
}

export default memo(UserList, (next,prev) => next.users === prev.users)