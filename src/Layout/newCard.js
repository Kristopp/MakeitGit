import { html } from './base'
import state from '../index.js'


export const getInputName = () => html.addName.value;
export const getStepCount = () => html.addSteps.value;
//here to red error thing 
console.log(getInputName())
//steps value 

export const newCardMarkUp = () => { 
    const markup = `<div class="floating-main-card" id=>
    <span class="card-text-name">${getInputName()}</span>
    <div class="steps-container" id="card-steps">
      <ul class="progressbar" id="progressbar">
        <li class="active" id="active">
          go!</li>
        <li>step</li>
      </ul>
    </div>`;

    html.doListContainer.insertAdjacentHTML('beforeend', markup)
} 
console.log(state)