import createElement from '../../lib/createElement'
import './Button.css'

export default function Button(text) {
  return createElement('button', { className: 'Button', innerText: text })
}
/*
export default function createElement(type, props, ...children) {
  // children is a rest parameter
  const el = document.createElement(type)
  Object.assign(el, props)
  children && el.append(...children) // spread operator
  return el
} 
*/
