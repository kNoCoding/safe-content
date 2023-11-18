'use strict'

var gUsers
var gIdNum = 100


// returns users by the current sorting
function getUsersToShow() { }

//the function should return the user object if found or null if not (HINT: use array.find) 
// If the user successfully log-in, update his lastLoginDate 
// Also save the loggedinUser to localStorage
function doLogin(userName, password) { }

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



