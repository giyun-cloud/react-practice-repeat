import ErrorBoundary from "./ErrorBoundary"
import User from "./User"

function UserApp() {
  // const user = {
  //   id: 1,
  //   email: 'naver.com'
  // }
  return (
    <ErrorBoundary>
      <User />
      <div>짜잔~</div>
    </ErrorBoundary>
  )
}

export default UserApp