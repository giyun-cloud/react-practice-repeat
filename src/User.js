
function User({user}) {
  return (
    <>
      <div>
        <b>ID : </b> {user.id}
      </div>
      <div>
        <b>Email : </b> {user.email}
      </div>
    </>
  )
}

export default User