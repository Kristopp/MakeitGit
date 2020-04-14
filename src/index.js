import "./style.css";
import {
    mainElements
} from './Main/base'
import {
    loginElements
} from "../src/login/login-base/baseLogin"
import {
    registerElements
} from "../src/login/login-base/baseLogin"
import createAuth0Client from '@auth0/auth0-spa-js';

//Global state
window.addEventListener('DOMContentLoaded', () => {
    /** dynamic clear input field*/

    /* clear register input fields on click*/
    const clearInputRegister = (myTextField) => {

        //Let's Catch Default Value
        //We will get Default value just to not clear user's data

        let default_value = myTextField.defaultValue;
        //Let's clear default value from input field. 
        //We will catch input field by its ID name.
        let current_value = myTextField.value;
        //if field is empty put back original data. Works for blur
        if (current_value == "") {
            myTextField.value = default_value;
            return;
        }
        if (current_value == default_value) {
            myTextField.value = '';
            return false;
        }
    }
    //auto clear input fields
    window.clearInput = clearInputRegister;
    /* login page functions */
    const logIn = async () => {
        //Get u**r and p****d data
        let name = loginElements.userName.value
        let pword = loginElements.passWord.value

       // window.location.href = "http://127.0.0.1:5500/src/index.html"
        console.log(name,pword)
        
        //Create auth obect

    }
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
    openRegister();
    const submitReg = () => {
        console.log('hello reg')
    }
    const regBackButton = () => {
        loginElements.openRegister.style.display = "none"
        loginElements.mainContainer.style.display = "inline-grid";
    }
    /* login screen buttons*/
    loginElements.loginButton.addEventListener('click', logIn);
    loginElements.register.addEventListener('click', openRegister)
    /* register screen buttons */
    registerElements.userNameRegister.addEventListener('click', clearInputRegister);
    registerElements.regSubmitButton.addEventListener('click', submitReg)
    registerElements.registerBackButton.addEventListener('click', regBackButton);

});