import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import '../less/index.less'


function Index(props) {
  const type = [
    { name: '博客', url: '/docs.html', blank: false },
    { name: '资源', url: '/', blank: false },
    { name: '资讯', url: '/', blank: false },
    { name: '实验室', url: '/', blank: false },
  ]
  return <div className='home'>
    <div>
      <div className="name">MeiHuan`s Blog</div>
      <div className="menu">
        {
          type.map((item, key) =>
            <a href={item.url} key={key} target={item.blank ? '_blank' : ''}>{item.name}</a>
          )
        }
      </div>
    </div>
  </div>

}

const app = document.querySelector('#app')
ReactDOM.render(<Index />, app)
