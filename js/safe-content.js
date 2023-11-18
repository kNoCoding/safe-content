'use strict'

var gUsers = [
    { id: 'u101', username: 'puki', password: 'secret', lastLoginTime: 1601891998864, isAdmin: false, },
    { id: 'u102', username: 'kuki', password: 'secret', lastLoginTime: 1601891998888, isAdmin: false, },
]

function onInit() {
    renderLogIn()
}

function renderLogIn() {
    const elLogInContainer = document.querySelector('.log-in-container')
    const strHtml = `
    <h1>Sign In!</h1>
    <img src="img/log-in.jpg" alt="log-in-image">

    <form onsubmit="onLogIn(event)" class="log-in-form">
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



function onLogIn() {
    console.log('user logged in!')
    renderSecretContent()

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

function onLogOut() { }

