import createElement from '../lib/createElement'
import './Header.css'

export default function Header() {
  const el = createElement('header', { className: 'Header' })
  const HeaderTitleEl = createElement('h1', {
    className: 'Header__title',
    innerText: `Quiz App`,
  })
  const HeaderSubTitleEl = createElement('span', {
    className: 'Header__subtitle',
    innerText: `May the best win!`,
  })

  el.append(HeaderTitleEl, HeaderSubTitleEl)

  return el
}
