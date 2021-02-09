import createElement from '../../lib/createElement'
import Card from '../Card'
import './HomePage.css'

export default function HomePage(cards) {
  const el = createElement('main', { className: 'HomePage', hidden: false })

  cards && setCards(cards) // wenn cards in irgendeiner Form vorhanden sind, führe die setCards Funktion aus

  function setCards(cards) {
    const cardElements = cards.map(({ question, answer }) =>
      Card(question, answer)
    ) // erstellt die neuen Cards
    el.innerHTML = ''
    el.append(...cardElements) // hiermit werden die kreierten Karten hinzugefügt
  }

  function show() {
    el.hidden = false
  }

  function hide() {
    el.hidden = true
  }

  return {
    el,
    setCards,
    show,
    hide,
  }
}

// show() and hide() müssen wir mit an die Index ausgeben, sodass diese darauf zugreifen kann. Muss man für jede Komponente die man shown und hiden will machen.
// alle Funktionalitäten die auch zu einer Komponente gehört, müssen in der JS der Komponente stehen und dürfen nicht in die index.js. Von hier rufen wir wirklich nur die Funktionen der Komponenten.js auf.
