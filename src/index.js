import "./style.css";
import {
    loginElements
} from "../src/login/login-base/baseLogin"
import {
    registerElements
} from "../src/login/login-base/baseLogin"

//Global state
window.addEventListener('DOMContentLoaded', (event) => {
    const state = [];
    /** dynamic clear input field*/

    /*register functions*/
    const openRegister = () => {
        let mainCont = loginElements.mainContainer;
        let x = loginElements.openRegister;
        if (x.style.display === "none") {
            x.style.display = "inline-grid";
            mainCont.style.display = "none ";

        } else {
            mainCont.style.display = "inline-grid";
            x.style.display = "none";
        }
    }
    /* clear register input fields on click*/
    const clearInputRegister = (myTextField) => {

        //Let's Catch Default Value
		//We will get Default value just to not clear user's data

        let default_value = myTextField.defaultValue;
        //Let's clear default value from input field. 
		//We will catch input field by its ID name.
        let current_value = myTextField.value;

        //if field is empty put back original data. Works for blur
        if(current_value == "") {
			myTextField.value = default_value;
			return;
		}
        if(current_value == default_value) {
			myTextField.value = '';
			return false;
        }
    }
    window.clearInput = clearInputRegister;
    /* login page functions */
    const logIn = () => {
        console.log("hello")
    }
    /* login screen buttons*/
    loginElements.loginButton.addEventListener('click', logIn);
    loginElements.register.addEventListener('click', openRegister)
    
    /* register screen buttons */
    registerElements.userNameRegister.addEventListener('click', clearInputRegister);
    console.log('DOM fully loaded and parsed');
});