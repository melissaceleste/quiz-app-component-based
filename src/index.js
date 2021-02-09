import Header from './components/Header'
import Card from './components/Cards'
import CreateForm from './components/CreateForm'
import Navigation from './components/Navigation/Navigation'
import createElement from './lib/createElement'

const cards = []

const navigation = Navigation(onNavigate)
/*
const homePage = createElement(
  'main',
  { className: 'HomePage', hidden: false },
  Card('Frage 1?', 'Antwort 1'),
  Card('Frage 2?', 'Bar baz!'),
  Card('Frage 3?', 'Bar baz!')
) */
const homePage = createElement('main', { className: 'HomePage', hidden: false })

const form = CreateForm(onSubmit)

const createPage = createElement(
  'main',
  { className: 'CreatePage', hidden: true },
  form
)

const grid = createElement(
  'div',
  { className: 'appGrid' },
  Header('Quiz App', 'May the best win!'),
  Card('Welche Kunden werden nie bedient?', 'die Sekunden'),
  CreateForm(),
  navigation
)

document.body.append(grid)

function onSubmit(question, answer) {
  cards.push({ question, answer })
  renderCards()
}

function renderCards() {
  const cardElements = cards.map(({ question, answer }) =>
    Card(question, answer)
  )
  homePage.innerHTML = ''
  homePage.append(...cardElements)
}

function onNavigate(text) {
  if (text === 'Home') {
    homePage.hidden = false
    createPage.hidden = true
  }
  if (text === 'Create') {
    homePage.hidden = true
    createPage.hidden = false
  }
}
