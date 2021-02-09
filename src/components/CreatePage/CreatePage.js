import createElement from '../../lib/createElement'
import CreateForm from '../CreateForm'
import './CreatePage.css'

// import './CreatePage.css'‚

export default function CreatePage(onSubmit) {
  const el = createElement(
    'main',
    { className: 'createPage', hidden: false },
    CreateForm(onSubmit)
  )

  function show() {
    el.hidden = false
  }

  function hide() {
    el.hidden = true
  }

  return {
    el,
    show,
    hide,
  }
}
