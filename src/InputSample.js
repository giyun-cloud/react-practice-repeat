import React, {useState, useRef} from 'react'

function InputSample() {
  let a = 1
  const [str, setStr] = useState({
    id: '',
    password: '',
  })
  const onChange = e => {
    const {id, value} = e.target
    setStr({
      ...str,
      [id]: value,
    })
    a += 1
  }
  const onRemove = () => {
    setStr({
      id: '',
      password: '',
    })
    console.log(a)
    nameInput.current.focus()
  }
  const nameInput = useRef()
  const number = useRef(5)
  const onNumber = () => {
    number.current += 1
  }
  
  return (
    <div>
      <input id="id" onChange={onChange} value={str.id} ref={nameInput} />
      <input id="password" onChange={onChange} value={str.password} />
      <p>아이디: {str.id} / 비밀번호: {str.password} </p>
      <button onClick={onRemove}>초기화</button>
      <button onClick={onNumber}>number+1</button>
      <p>number : {number.current}</p>
    </div>
  )
}

export default InputSample