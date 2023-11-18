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
}

function concealLogIn() {
    const elLogInContainer = document.querySelector('.log-in-container')
    elLogInContainer.innerHTML = ``
}

function renderSecretContent() {
    const elSecretContentContainer = document.querySelector('.secret-content-container')
    const strHtml = `
    <h2 class="secret-content-greeting">Welcome back:<span class="uname">${gLoggedInUser.uname}</span>
    <button class="log-out-btn" onclick="onLogOut()">Logout</button></h2>
    <p class="is-admin-contaniner">Admin user? <span class="is-admin">${gLoggedInUser.isAdmin}</span></p>
    <p>Secret Content ~~ Secret Content ~~ Secret Content ~~ Secret Content ~~ Secret Content ~~ Secret Content ~~ Secret Content ~~ Secret Content ~~ </p>
    `

    elSecretContentContainer.innerHTML = strHtml
    // var elUname = document.querySelector('.uname')
    // elUname.innerText = gLoggedInUser.uname

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

function onLogOut() {
    console.log('user logged out!')
    concealSecretContent()
    localStorage.clear()
    renderLogIn()
}

