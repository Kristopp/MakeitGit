import "./style.css";
import { html } from './Layout/base';
import Mission from './Module/newDoTo';
import * as inputValues from './Layout/inputValues';
import * as newCard from './Layout/newCard'

//Global state
const state = [];

const addNewMission = () => { 
    console.log(state)
    
    //Get values 
    const nameValue = inputValues.getInputName();
    const stepValue = inputValues.getStepcount();
    if(nameValue,stepValue >= 1 || stepValue < 5) { 
        let mission = new Mission(nameValue, stepValue);
        state.push(mission);
        newCard.newCardMarkUp();
        html.modal.style.display = "none";
    } else { 
        console.log('error')
    }
    //Create new card
    //extract stepscount 
    
    //dynamic progressBar
    //loop through object to get values
    let name = state.map(e => e.newMissionName);
    let steps = state.map(e =>e.stepsCount)
    console.log(name,steps)

//Create new mission on click
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
html.goButton.addEventListener('click',addNewMission);
