import Button from './components/Button'
import Header from './components/Header'
import Cards from './components/Cards'
import CreateForm from './components/CreateForm'
import Navigation from './components/Navigation/Navigation'
import createElement from './lib/createElement'

const navigation = Navigation(onNavigate)

function onNavigate(text) {
  console.log(text)
}

const grid = createElement(
  'div',
  { className: 'appGrid' },
  Header('Quiz App', 'May the best win!'),
  Cards('Welche Kunden werden nie bedient?', 'die Sekunden'),
  Button('Click me'),
  Button('Hold me'),
  CreateForm('test'),
  navigation
)

document.body.append(grid)
