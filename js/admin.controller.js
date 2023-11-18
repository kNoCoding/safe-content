'use strict'

function onInit() {
    renderUsers()
}

function renderUsers() {
    const elUsersList = document.querySelector('.users-table-body')
    const strHtml = getUsersToShow().map(user => `   
    <tr>
        <td>${user.id}</td>
        <td>${user.uname}</td>
        <td>${user.psw}</td>
        <td>${user.lastLoginTime}</td>
        <td>${user.isAdmin}</td>
    </tr>    
    `).join('')

    elUsersList.innerHTML += strHtml
}