import { useReducer, useCallback } from 'react'

function reducer(state,action) {
  switch(action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.name]: action.value
      }
    case 'RESET':
      return Object.keys(state).reduce((acc,cur) => {
        acc[cur] = ''
        return acc
      }, {})
    default:
      throw new Error('Unhandled type')
  }
}

function useInputs(initialForm) {
  const [form, dispatch] = useReducer(reducer, initialForm)
  const onChange = useCallback(e => {
    const { name, value } = e.target
    dispatch({
      type: 'CHANGE',
      name,
      value
    })
  },[])
  const onReset = useCallback(() => {
    dispatch({
      type: 'RESET'
    })
  }, [])
  return [form, onChange, onReset]
}

export default useInputs