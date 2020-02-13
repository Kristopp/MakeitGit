import { html } from './base'
import * as inputValues from './inputValues';



//here to red error thing 
//steps value and add slider
let stepsCount = inputValues.getStepCount()
console.log(stepsCount)

export const newCardMarkUp = () => { 
    const markup = `<div class="floating-main-card" id=>
    <span class="card-text-name">${inputValues.getInputName()}</span>
    <div class="steps-container" id="card-steps">
      <ul class="progressbar" id="progressbar">
        <li class="active" id="active">
          go!</li>
        <li>step</li>
      </ul>
    </div>`;
    html.doListContainer.insertAdjacentHTML('beforeend', markup)
  } 

  
  
  
  
  
  /*  
    html.progressBar.insertAdjacentHTML('beforeend', liMarkUp)
  /*  function steps()  { 
   for(let i = 0; i < inputValues.getStepCount();i++) { 
     console.log('hello')
   }
} */  
   