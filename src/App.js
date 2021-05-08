import { useMemo, useReducer, createContext } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function ActiveUserCount(users) {
  return users.filter(user => user.toggle).length
}

const initialState = {
  users: [
    {
      id: 1,
      username: 'D',
      email: 'D@naver.com',
      toggle: false,
    },
    {
      id: 2,
      username: "Con",
      email: 'Con@gmail.com',
      toggle: false,
    },
    {
      id: 3,
      username: "Amy",
      email: 'Amy@example.com',
      toggle: false,
    },
  ]
}

const reducer = (state,action) => {
  switch(action.type) {
    case 'CREATE':
      return {
        users: [
          ...state.users,
          action.user
        ]
      }
    case 'REMOVE':
      return {
        users: state.users.filter(user => user.id !== action.id)
      }
    case 'TOGGLE':
      return {
        users: state.users.map(user => user.id === action.id ? {...user, toggle: !user.toggle} : user)
      }
    default:
      throw new Error('Unhandled type')
    
  }
}

export const ContextDispatch = createContext('')

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  const { users } = state
  const count = useMemo(() => ActiveUserCount(users), [users])
  
  return (
    <ContextDispatch.Provider value={dispatch}>
    <CreateUser />
    <UserList users={users} />
    <p>활성화된 계정 수 : {count}</p>
    </ContextDispatch.Provider>
  );
}

export default App;
