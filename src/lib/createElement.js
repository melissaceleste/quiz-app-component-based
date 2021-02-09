export default function createElement(type, props, ...children) {
  // children is a rest parameter
  const el = document.createElement(type)
  Object.assign(el, props)
  children && el.append(...children.map(child => child.el ?? child)) // spread operator
  return el
}
/* (type,props) = wie eine Art Platzhalter. Das type beschreibt all unsere HTML-Elemente
//object.assign ist vorgegeben, dass steht da so
//object=prop den wir ansprechen, assign=sowas wie hinzufügen (target - das ziel wohin, danach die props)
*/
