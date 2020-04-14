
export let loginElements = {
    /* object for login element nodes */
    mainContainer: document.getElementById("main-container"),
    userName: document.getElementById("username-input"),
    passWord: document.getElementById("password-input"),
    register:document.getElementById("register-container"),
    openRegister: document.getElementById("id-register-modal"),
    loginButton: document.getElementById("login-button"),

} 
export let registerElements = { 
    /*object for register element nodes  */
    userNameRegister: document.getElementById("username-input-register"),
    emailRegister: document.getElementById("email-input"),
    registerPassword: document.getElementById("password-input-register"),
    regSubmitButton: document.getElementById("register-submit-button"),
    registerBackButton: document.getElementById("register-back-button")
}

console.log(loginElements)