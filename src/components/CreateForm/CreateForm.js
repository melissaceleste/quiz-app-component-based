import createElement from '../../lib/createElement'
import './CreateForm.css'

export default function CreateForm() {
  const el = createElement('form')
  el.className = 'form'
  el.innerHTML = `
  
              <h2>question</h2>
              <label for="question"> Write your own question: </label> 
              <textarea
                id="question"
                type="text"
                rows="2"
                cols="40"
                maxlength="100"
              >
              </textarea>
          
              <h2>answers</h2>
              <label for="answers"> Add four answer options:</label> 

                A)
                <textarea
                  rows="2"
                  cols="40"
                  maxlength="100"
                  id="answers"
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
                <input type="radio" name="q1" value="a" id="q1a" />
                
                <label for="q1b"> B) </label>
                <input type="radio" name="q1" value="b" id="q1b" />
                
                <label for="q1c">C)</label>
                <input type="radio" name="q1" value="c" id="q1c" />
                
                <label for="q1d">D)</label>
                <input type="radio" name="q1" value="d" id="q1d" />
                
              </ul>
         
          
          
            <h2>share it to the world</h2>
            <button> create card </button>
            

            
     
  
  `

  return el
}
