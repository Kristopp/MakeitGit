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
import NewUser from './Module/newUser'
import createAuth0Client from '@auth0/auth0-spa-js';

//Global state
window.addEventListener('DOMContentLoaded', () => {
    let users = [];
    /** dynamic clear input field*/

    /* clear register input fields on click*/
    /* login page functions */
    const logIn = async () => {
        //Get u**r and p****d data
        let name = loginElements.userName.value
        let pword = loginElements.passWord.value

        // window.location.href = "http://127.0.0.1:5500/src/index.html"
        console.log(name, pword)

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
    //Open forgot pw
    const forgotPw = () => {
        console.log("help")
    }
    
    //get register input data
    const submitReg = () => {
        let regUname = registerElements.userNameRegister.value
        let eMail = registerElements.emailRegister.value
        let pword = registerElements.registerPassword.value

        let newUser = new NewUser(regUname, eMail, pword);
        users.push(newUser);
        console.log(regUname, eMail, pword)
    }
    const regBackButton = () => {
        loginElements.openRegister.style.display = "none"
        loginElements.mainContainer.style.display = "inline-grid";
    }

    const clearInputRegister = (myTextField) => {

        //Let's Catch Default Value
        let default_value = myTextField.defaultValue;
        console.log(myTextField)
        //Let's clear default value from input field. 
        //We will catch input field by its ID name.
        let current_value = myTextField.value;
        //if field is empty put back original data. Works for blur
        if (current_value == "") {
            myTextField.value = default_value;
            return;
        }
        //chek if field value is equal to default
        //if false then empty field
        if (current_value == default_value) {
            myTextField.value = '';
            return false;
        }
    }
    //auto clear input fields
    window.clearInput = clearInputRegister;

    /* login screen buttons*/
    loginElements.loginButton.addEventListener('click', logIn);
    loginElements.register.addEventListener('click', openRegister)
    loginElements.forgotPW.addEventListener('click', forgotPw);
    /* register screen buttons */
    registerElements.userNameRegister.addEventListener('click', clearInputRegister);
    registerElements.regSubmitButton.addEventListener('click', submitReg)
    registerElements.registerBackButton.addEventListener('click', regBackButton);

});