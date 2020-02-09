import "./style.css"
import { html } from './Layout/base'
import Mission from './Module/newDoTo'
import * as inputValues from './Layout/inputValues'

//Global state
const state = {}
console.log(inputValues)
const addNewMission = () => { 
    //Get values 
    const nameValue = inputValues.getInputName();
    if(nameValue) { 
        state.newMission = new Mission(nameValue, 2);

    }
    
}
//Create new mission on click
html.goButton.addEventListener('click', () => { 
    addNewMission()
    console.log(state)
})
const progressBar = ()=> {
    //Set progressBar state
    const progressBar = state.progressBar 

}
/*open close modal*/
function openModal() {
    html.modal.style.display = "block"
}

function closeModal() {
    html.modal.style.display = "none"
}
html.addItem.addEventListener('click', openModal)
html.closeModal.addEventListener('click', closeModal)

console.log(html)
console.log(__dirname)
