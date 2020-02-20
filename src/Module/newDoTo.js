import {
  html
} from '../Layout/base'
export default class Mission {
  constructor(newMissionName, stepsCount) {
    this.newMissionName = newMissionName;
    this.stepsCount = stepsCount;
    this.id = Math.random().toString(36).substr(2, 9);
  }
  newCardHtml() {
    const markup = `<div class="floating-main-card">
    <span class="card-text-name">${this.newMissionName}</span>
    <div class="steps-container" id="card-steps">
    <ul class="progressbar" id="${this.id}">
    <li class="active" id="active">go!</li>
    </ul>
    </div>`;
    html.doListContainer.insertAdjacentHTML('beforeend', markup)
  }
  liElement() {
    const liElement = document.createElement("li")
    const att = document.createAttribute("id")
    att.value = "li-element"
    liElement.innerHTML = "step"
    liElement.setAttributeNode(att)
    document.getElementById(this.id).appendChild(liElement);

  }
}