import { html } from './base'

export const getInputName = () => html.addName.value;
export const getStepcount = () => html.addSteps.value;
export const clearInput = () => { 
    html.getInputName.value = '';
}
