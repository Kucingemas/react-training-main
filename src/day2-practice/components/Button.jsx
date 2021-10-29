import React from 'react'

export default function ButtonKlik({text, color, klik}) {
  return (
    <div>
      <button style={{background:color}} onClick={klik}>{text}</button>
    </div>
  )
}
