import Cards from './Cards'

export default {
  title: 'Cards',
  component: Cards,
}

export const base = () =>
  Cards('What does git log do?', 'Show the history of commits')
