// 给代码添加mac窗口
module.exports = function () {
  return function transformer(tree, data) {
    const boxStyle = `
      position: relative;
      margin: 32px auto;
      background: #282c34;
      border-radius: 6px;
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12) !important;
      box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12) !important;
      box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12) !important;
      box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12) !important;
    `
    const controlStyle = `padding: 8px 0;`
    const btnStyle = `
      display: inline-block;
      height: 12px;
      width: 12px;
      border-radius: 50%;
      margin-left: 8px;
    `
    const btn1 = `${btnStyle}background: #dd4a68`
    const btn2 = `${btnStyle}background: #e6db74`
    const btn3 = `${btnStyle}background: #a6e22e`
    const children = tree.children
    tree.children = children.map((item, key) => {
      if (item.type === 'element' && item.tagName === 'pre') {
        if (Array.isArray(item.children) && item.children[0].tagName === 'code') {
          const c = item.children[0].properties.className
          item.children[0].properties.className = Array.isArray(c) ? c.includes('hljs') ? c : [...c, 'hljs', 'language-bash'] : ['hljs', 'language-bash']
          return {
            type: 'element',
            tagName: 'div',
            properties: { className: ['code-box'], style: boxStyle },
            children: [
              {
                type: 'element', tagName: 'div', properties: { className: ['code-box-control'], style: controlStyle }, children: [
                  { type: 'element', tagName: 'span', properties: { className: ['code-box-control-close'], style: btn1 } },
                  { type: 'element', tagName: 'span', properties: { className: ['code-box-control-min'], style: btn2 } },
                  { type: 'element', tagName: 'span', properties: { className: ['code-box-control-max'], style: btn3 } }
                ]
              },
              item
            ]
          }
        }
      }
      return item
    })
  }
}