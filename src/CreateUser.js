import { memo, useCallback, useContext, useRef } from "react"
import { ContextDispatch } from "./App"
import useInputs from "./useInputs"


function CreateUser() {
  const dispatch = useContext(ContextDispatch)
  const nextId = useRef(4)
  const [{ username, email }, onChange, onReset] = useInputs({
    username: '',
    email: ''
  })
  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE',
      user: {
        id: nextId.current,
        username,
        email
      }
    })
    nextId.current += 1
    onReset()
  },[username, email, onReset, dispatch])
  return (
    <div>
      <input name="username" onChange={onChange} value={username} />
      <input name="email" onChange={onChange} value={email} />
      <button onClick={onCreate}>생성</button>
    </div>
  )
}

export default memo(CreateUser)