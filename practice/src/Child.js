import React from 'react'

const Child = React.memo(({onClick}) => {
    console.log('child rendered');
  return (
    <div>
      <button onClick={onClick}>Click</button>
    </div>
  )
})

export default Child
