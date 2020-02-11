import { html } from './base'
export const newCardMarkUp = () => { 
    const markup = `<div class="floating-main-card" id=>
    <span class="card-text-name">Mission name</span>
    <div class="steps-container" id="card-steps">
      <ul class="progressbar" id="progressbar">
        <li class="active" id="active">
          go!</li>
        <li>step</li>
      </ul>
    </div>`;

    html.doListContainer.insertAdjacentHTML('beforeend', markup)
} 