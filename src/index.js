import Button from './components/Button'
import Header from './components/Header'
import Cards from './components/Cards'
import CreateForm from './components/CreateForm'
import createElement from './lib/createElement'

const grid = createElement(
  'div',
  { className: 'appGrid' },
  Header('Quiz App', 'May the best win!'),
  Cards('Welche Kunden werden nie bedient?', 'die Sekunden'),
  Button('Click me'),
  Button('Hold me'),
  CreateForm('test')
)

document.body.append(grid)
