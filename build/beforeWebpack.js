const dirTree = require('directory-tree')
const fs = require('fs')
const path = require('path')
let str = ''

const tree = dirTree('docs', {}, item => {
  str += `import (/* webpackChunkName: "${item.path}" */'../${item.path}')\n`
})
fs.writeFileSync(path.resolve(__dirname, '../pages/docs.js'), str)
console.log('docs.js generated!')
console.log(tree)