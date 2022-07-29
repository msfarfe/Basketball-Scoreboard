
 let homeScoreEl = document.getElementById("home-score")
 let guestScoreEl = document.getElementById("guest-score")
 let homeScore = 0
 let guestScore = 0
 
function scoreOneHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
    highlightLeader()
}

function scoreTwoHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
    highlightLeader()
}

function scoreThreeHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
    highlightLeader()
}

function scoreOneGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
    highlightLeader()
}

function scoreTwoGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
    highlightLeader()
}

function scoreThreeGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
    highlightLeader()
}

function newGame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
    titleHomeEl.style.textDecoration = "none"
    titleGuestEl.style.textDecoration = "none"
}

let titleHomeEl = document.getElementById("title-home")
let titleGuestEl = document.getElementById("title-guest")

function highlightLeader(){
    if (homeScore > guestScore) {
        titleHomeEl.style.textDecoration = "underline"
        titleGuestEl.style.textDecoration = "none"    
    } else if (homeScore < guestScore) {
        titleGuestEl.style.textDecoration = "underline"
        titleHomeEl.style.textDecoration = "none"
    } else {
        titleHomeEl.style.textDecoration = "none"
        titleGuestEl.style.textDecoration = "none"
    }
}

/* function timer(){
    let minutes = 900 / 60;
    var sec = 30;
    var timer = setInterval(function(){
        document.getElementById('timer-display').innerHTML='00:'+sec;
        sec--;
    }, 1000);
} */