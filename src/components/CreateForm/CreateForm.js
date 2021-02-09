import createElement from '../../lib/createElement'
import Button from '../Button'
import './CreateForm.css'

export default function CreateForm(onSubmit) {
  const form = createElement('form', {
    className: 'CreateForm',
    innerHTML: `
    <label>
      Question:
      <input name="question" placeholder="What is ...?">
    </label>
    <label>
      Answer:
      <input name="answer" placeholder="It is ...">
    </label>
  `,
  })

  form.append(Button('Create!'))

  form.addEventListener('submit', event => {
    event.preventDefault()
    const { question: questionInput, answer: answerInput } = form.elements
    const question = questionInput.value
    const answer = answerInput.value

    onSubmit(question, answer)
  })

  return form
}

/* 
 /*
              <h2>question</h2>
              <label for="question"> Write your own question: </label> 
              <textarea
                name="questionInput"
                type="text"
                rows="2"
                cols="40"
                maxlength="100"
              >
              </textarea>
          
              <h2>answer</h2>
              <label for="answers"> Add your answer </label> 

              
                <textarea
                name="answerInput"
                  rows="2"
                  cols="40"
                  maxlength="100"
                  name="answers"
                  type="text"
                >
                </textarea>
                
            
                B)
                <textarea
                  rows="2"
                  cols="40"
                  maxlength="100"
                  type="text"
                >
                </textarea
                >
              
                C)
                <textarea
                  rows="2"
                  cols="40"
                  maxlength="100"
                  type="text"
                >
                </textarea
                >
            
                D)
                <textarea
                  rows="2"
                  cols="40"
                  maxlength="100"
                  type="text"
                >
                </textarea>
            
              <h2>solution</h2>
              Tick the right answer: 

              <ul>
                <label for="q1a"> A) </label>
                <input type="radio" name="q1" value="a" name="q1a" />
                
                <label for="q1b"> B) </label>
                <input type="radio" name="q1" value="b" name="q1b" />
                
                <label for="q1c">C)</label>
                <input type="radio" name="q1" value="c" name="q1c" />
                
                <label for="q1d">D)</label>
                <input type="radio" name="q1" value="d" name="q1d" />
              </ul> -->
         
            <h2>share it to the world</h2>
           

*/
