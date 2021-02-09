import createElement from '../../lib/createElement'
import './Navigation.css'

import homeSVG from '@fortawesome/fontawesome-free/svgs/solid/caravan.svg'
import bookmarkSVG from '@fortawesome/fontawesome-free/svgs/solid/bookmark.svg'
import createSVG from '@fortawesome/fontawesome-free/svgs/solid/pencil-alt.svg'
import settingsSVG from '@fortawesome/fontawesome-free/svgs/solid/cogs.svg'

const buttonsConfig = [
  { svgPath: homeSVG, text: 'Home' },
  { svgPath: bookmarkSVG, text: 'Bookmarks' },
  { svgPath: createSVG, text: 'Create' },
  { svgPath: settingsSVG, text: 'Settings' },
]
/* 
hier haben wir einfach nur ein Objekt erstellt mit einem Array drin.
Ist kürzer als die auskommentierte Form (siehe A). 
Und ermöglicht es uns später mit der index.js zu kommunizieren.
*/

export default function Navigation(onNavigate) {
  // destructuring assignment  const buttons = ({ svgPath, text })
  const buttons = buttonsConfig.map(({ svgPath, text }) => {
    // destructuring assignment of a parameter
    const button = createElement('img', { src: svgPath, alt: text })
    button.addEventListener('click', () => onNavigate(text))
    return button
  })

  const el = createElement('nav', { className: 'Navigation' }, ...buttons) // spread of buttons
  return el
}

/* 
(A auskommentierte längere Alternative der Konstanten)
const homeIcon = createElement('img', {
  src: homeSVG,
  alt: 'Home',
  className: 'homeIcon',
})
const bookmarkIcon = createElement('img', {
  src: bookmarkSVG,
  alt: 'Bookmarks',
  className: 'bookmarkIcon',
})
const createIcon = createElement('img', {
  src: createSVG,
  alt: 'Create',
  className: 'createIcon',
})
const settingsIcon = createElement('img', {
  src: settingsSVG,
  alt: 'Settings',
  className: 'settingsIcon',
})

export default function Navigation() {
  const el = createElement(
    'nav',
    { className: 'Navigation' },
    homeIcon,
    bookmarkIcon,
    createIcon,
    settingsIcon
  )
  return el
}
 */

/* Die destrukturierende Zuweisung ermöglicht es, Daten aus Arrays oder Objekten zu extrahieren, und zwar mit Hilfe einer Syntax, die der Konstruktion von Array- und Objekt-Literalen nachempfunden ist. */
