export default class Mission {
    constructor(newMissionName, stepsCount) {
        this.newMissionName = newMissionName;
        this.stepsCount = stepsCount;
        this.id = Math.random().toString(36).substr(2, 9);
    }
    newCardMarkUp = () => { 
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

    
}
