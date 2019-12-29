import(/* webpackChunkName: "docs/test.md" */'../docs/test.md')
import(/* webpackChunkName: "docs/test2.md" */'../docs/test2.md')
import obj from '../docs/test.md'
console.log(obj)
const div = document.createElement('div')
div.innerHTML = obj.markdown
document.body.append(div)