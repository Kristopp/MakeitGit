import {
    html
} from './Layout/base'
console.log(html)
//Global state
const state = {}
/*open close modal*/
function openModal() {
    html.modal.style.display = "block"
}

function closeModal() {
    html.modal.style.display = "none"
}
html.addItem.addEventListener('click', openModal)
html.closeModal.addEventListener('click', closeModal)
