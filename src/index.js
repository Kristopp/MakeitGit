import {
    html
} from './Layout/base'
console.log('hello')
//Global state
const state = {}
/*add-controls*/
function openModal() {
    html.modal.style.display = "block"
    console.log('click')
}

function closeModal() {
    html.modal.style.display = "none"
    console.log(html)
}
html.addItem.addEventListener('click', openModal)
html.closeModal.addEventListener('click', closeModal)
//Function to open modal
//Clode modal