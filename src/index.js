import "./style.css";
import { html } from './Layout/base';
import Mission from './Module/newDoTo';
import * as inputValues from './Layout/inputValues';
import * as newCard from './Layout/newCard'

//Global state
export const state = [];

const addNewMission = () => { 
    //Get values 
    const stepValue = inputValues.getStepcount();
    if(inputValues.getInputName(),stepValue >= 1 || stepValue < 5) { 
        //Create new card and close modal
        let mission = new Mission(inputValues.getInputName(), stepValue);
        state.push(mission);
        html.modal.style.display = "none";
        //inputValues.clearInput();
    } else { 
        console.log('error')
    }
    //extract stepscount 
    
    //dynamic progressBar
    //loop through object to get input values
    newCard.newCardMarkUp(); 
    
    console.log(state)
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
