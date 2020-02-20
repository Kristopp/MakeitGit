import "./style.css";
import {
    html
} from './Layout/base';
import Mission from './Module/newDoTo';
import * as inputValues from './Layout/inputValues';


//Global state
const state = [];


const addNewMission = () => {
    //Get values 
    const stepValue = inputValues.getStepCount();

    //Create new card
    let mission = new Mission(inputValues.getInputName(), stepValue);
    mission.newCardHtml()
    state.push(mission);
    html.modal.style.display = "none";
    //create progress bar           
    if (inputValues.getInputName(), stepValue >= 1 || stepValue < 5) {
        for (let i = 1; i < stepValue; i++) {
            mission.liElement();
        }
    } else {
        console.log('error')
    }
}
const compliteStep = () => { 
    //change progressbar color when step complited
    
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
html.