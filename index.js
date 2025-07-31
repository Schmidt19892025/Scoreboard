let homeScore = document.getElementById("homescore")
let home = 0

function add1h() {
    home += 1
    homeScore.innerText = home
}

function add2h() {
    home += 2
    homeScore.innerText = home
}

function add3h() {
    home += 3
    homeScore.innerText = home
}

let guestScore = document.getElementById("guestscore")
let guest = 0

function add1g() {
    guest += 1
    guestScore.innerText = guest
}

function add2g() {
    guest += 2
    guestScore.innerText = guest
}

function add3g() {
    guest += 3
    guestScore.innerText = guest
}

function reset() {
    homeScore.innerText = 0
    guestScore.innerText = 0
}