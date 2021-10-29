import React from 'react'

//you can add export
const divStyle = {
  border:"5px solid blue", 
  width:"30%", 
  margin:"0 35% 0 35%", //top right bottom left
  borderRadius:'15px'
}

export default function TitleComponent({text}) {
  return (
    <div style={{
      border:"5px solid blue", 
      width:"30%", 
      margin:"0 35% 0 35%", //top right bottom left
      borderRadius:'15px'
      }}>
     {text}
    </div>
  )
}
