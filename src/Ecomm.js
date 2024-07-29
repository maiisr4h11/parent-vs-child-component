import React from 'react'

function Ecomm(props) {
  return (
    <div>
        <h1>{props.names}</h1>
        <button onClick={() => props.chk()}>Click me</button>
    </div>
    
  )
}

export default Ecomm