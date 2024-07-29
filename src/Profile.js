import React from 'react'

function Profile(props) {
  return (
    <div>
      <h1>Profile Page</h1>
      <h3>Hi {props.names} please click this button</h3>
      <button onClick={() => props.chk()}>Click me</button>
    </div>
  )
}

export default Profile