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

function checkDetails(uname, psw){
    var form = document.querySelector('.log-in-form')
    var username = form.uname.value
    var password = form.psw.value

    var users = gUsers
    // var foundUser = users.find(user => user.uname === )

}

function onLogIn(ev) {

    var form = document.querySelector('.log-in-form')
    var username = form.uname.value
    var password = form.psw.value
    console.log('ev:', ev)
    ev.preventDefault()
    concealLogIn()
    console.log('user logged in!')
    renderSecretContent()



    console.log('Username:', username, 'Password:', password);
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

function onLogOut() {
    console.log('user logged out!')
    concealSecretContent()
    renderLogIn()
}

