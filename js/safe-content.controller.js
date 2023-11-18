'use strict'


function onInit() {
    renderLogIn()
}

function renderLogIn() {
    const elLogInContainer = document.querySelector('.log-in-container')
    const strHtml = `
    <h1>Sign In!</h1>
    <img class="log-in-img" src="img/log-in.png" alt="log-in-image">

    <form class="log-in-form" onsubmit="onLogIn(event)">
        <label for="uname" class="uname">Username</label>
        <input type="text" name="uname" placeholder="Enter Username">

        <label for="psw" class="psw">Password</label>
        <input type="password" name="psw" placeholder="Enter Password">

        <button type="submit">Login</button>
    </form>
    `
    elLogInContainer.innerHTML = strHtml
    console.log('elLogInContainer:', elLogInContainer)
    console.log('.log-in-container rendered!');
}

function concealLogIn() {
    const elLogInContainer = document.querySelector('.log-in-container')
    elLogInContainer.innerHTML = ``
}

function renderSecretContent() {
    const elSecretContentContainer = document.querySelector('.secret-content-container')
    const strHtml = `
    <h2 class="secret-content-greeting">Welcome back: "Dynamic user name here"
    <button class="log-out-btn" onclick="onLogOut()">Logout</button></h2>
    <p class="is-admin-contaniner">Admin user? <span class="is-admin">"Dynamic yes/no here"</span></p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi molestiae aut mollitia eius. Ducimusconsequuntur neque, magni dolores rem porro ipsa voluptate ipsum exercitationem quis et, ipsam maiores, earum itaque.</p>
    `

    elSecretContentContainer.innerHTML = strHtml
    console.log('elSecretContentContainer:', elSecretContentContainer)
    console.log('.secret-content-container rendered!')
}

function concealSecretContent() {
    const elSecretContentContainer = document.querySelector('.secret-content-container')
    elSecretContentContainer.innerHTML = ``
}

function onLogIn(ev) {
    ev.preventDefault()

    var form = document.querySelector('.log-in-form')
    var uname = form.uname.value
    var psw = form.psw.value
    var loggedInUser = doLogIn(uname, psw)

    if (loggedInUser !== undefined) {
        concealLogIn()
        renderSecretContent()
        console.log('user logged in!')
    } else {
        alert('Incorrect username or password')
        return
    }
}


//////////////// i think i need to delete this because i have the doLogin and the onLogIn
// function checkDetails(uname, psw) {
//     var form = document.querySelector('.log-in-form')
//     var username = form.uname.value
//     var password = form.psw.value


// }
//////////////// i think i need to delete this because i have the doLogin and the onLogIn

function onLogOut() {
    console.log('user logged out!')
    concealSecretContent()
    renderLogIn()
}

