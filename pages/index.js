import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import text from '../docs/test.md'


function Index(props) {
  console.log(text)
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
