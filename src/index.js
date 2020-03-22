import "./style.css";
import {
    html
} from './Layout/base';
import Mission from './Module/newDoTo';
import * as inputValues from './Layout/inputValues';


//Global state
const state = [];


const addNewMission = () => {

    const stepValue = inputValues.getStepCount();
    if (inputValues.getInputName(), stepValue < 6) {
        //Get values 

        //Create new card
        let mission = new Mission(inputValues.getInputName(), stepValue);
        mission.newCardHtml()
        state.push(mission);
        html.modal.style.display = "none";
        //create progress bar           

        for (let i = 1; i < stepValue; i++) {
            mission.liElement();
        }
    } else {
        console.log('error')
    }
}
const compliteStep = () => {
    html.
    console.log(liElement)
}


/*open close modal*/
function openModal() {
    html.modal.style.display = "block"
}

function closeModal() {
    html.modal.style.display = "none"
}
html.addItem.addEventListener('click', openModal);
html.closeModal.addEventListener('click', closeModal);
html.goButton.addEventListener('click', addNewMission);
//document.getElementById(this.id)