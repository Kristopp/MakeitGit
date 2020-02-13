import "./style.css";
import { html } from './Layout/base';
import Mission from './Module/newDoTo';
import * as inputValues from './Layout/inputValues';
import * as newCard from './Layout/newCard'

//Global state
export const state = [];
const liMarkUp = `<li>step</li> `

const addNewMission = () => { 
    //Get values 
    const stepValue = inputValues.getStepCount();
    
    if(inputValues.getInputName(),stepValue >= 1 || stepValue < 5) { 
        //Create new card and close modal
        let mission = new Mission(inputValues.getInputName(), stepValue);
        state.push(mission);
        html.modal.style.display = "none";
        newCard.newCardMarkUp();
        //inputValues.clearInput();
    } else { 
        console.log('error')
    }
    //extract stepscount 
    
    //dynamic progressBar
    //loop through object to get input values
    console.log(html.stepNumber)
    
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
