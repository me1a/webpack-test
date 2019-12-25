import React, { useState } from 'react'
import ReactDOM from 'react-dom'


function Index(props) {

  const [count, setCount] = useState(0)

  function click() {
    setCount(count + 1)
  }
  return <div>
    <h1 onClick={click}>index</h1>
    <p>{count}d</p>
  </div>

}

const app = document.querySelector('#app')
ReactDOM.render(<Index />, app)
