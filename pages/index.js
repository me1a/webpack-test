import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import text from '../docs/test.md'
import text2 from '../docs/test2.md'


function Index(props) {
  console.log(text, text2)
  const [count, setCount] = useState(0)

  function click() {
    setCount(count + 1)
  }
  return <div>
    <h1 onClick={click}>index</h1>
    <p>{count}d</p>
    <div dangerouslySetInnerHTML={{ __html: text }}></div>
    <div dangerouslySetInnerHTML={{ __html: text2 }}></div>
  </div>

}

const app = document.querySelector('#app')
ReactDOM.render(<Index />, app)
