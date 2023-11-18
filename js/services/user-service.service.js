'use strict'

var gUsers
var gLoggedInUser
var gIdNum = 100
var gSortBy = 'lastLoginTime'

_createUsers()

// returns users by the current sorting
function getUsersToShow() {
    var users = gUsers
    if (gSortBy === 'lastLoginTime') {
        users.sort((a, b) => b.lastLoginTime - a.lastLoginTime)
    }

return users
}

//the function should return the user object if found or null if not (HINT: use array.find) 
// If the user successfully log-in, update his lastLoginDate 
// Also save the loggedinUser to localStorage
function doLogIn(uname, psw) {
    var users = gUsers
    var loggedInUser = users.find(user => user.uname === uname && user.psw === psw)
    if (loggedInUser !== undefined) loggedInUser.lastLoginTime = getTimeStamp()
    _saveUsers()
    gLoggedInUser = loggedInUser
    console.log('gLoggedInUser:', gLoggedInUser)
    return loggedInUser
}

// Private functions

//will populate a users array with user objects (gUsers array with 3 users) 
function _createUsers() {
    gUsers = loadFromStorage('usersDB')
    if (gUsers && gUsers.length) return

    gUsers = [_createUser('puki', 'secret', false), _createUser('muki', 'hahaha', false), _createUser('kuki', 'secret', true)]
    _saveUsers()
}

// will create a single user object
function _createUser(uname, psw, isAdmin) {
    return {
        id: makeId(),
        uname,
        psw,
        lastLoginTime: getTimeStamp(),
        isAdmin,
    }
}

//that saves the users to localStorage
function _saveUsers() {
    saveToStorage('usersDB', gUsers)
}



