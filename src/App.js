import React from 'react'
import Ecomm from './Ecomm'
import Profile from './Profile'
function App() {
  // var name = "sarah"
  // function check(){
  //   alert("button clicked")
  // }
  // return (
  //   <div>
  //     <Ecomm names = {name} chk ={check}/>
  //     </div>
    
  // )
  var name = "sarah"
  function getName(){
    alert("Hi sarah")
  }
  return(
    <div>
      <Profile names = {name} chk = {getName}/>
    </div>
  )
}
export default App