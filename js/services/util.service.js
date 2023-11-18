'use strict'

function makeId() {
    var id = 'u' + ++gIdNum
    return id
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min) + min)
}


function getTimeStamp() {
    const currentDate = new Date()
    const timestamp = currentDate.getTime()
    return timestamp
}

function getDate() {
    var now = new Date();
    return now
}