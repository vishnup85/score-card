let homeEl = document.getElementById('home-score')
let guestEl = document.getElementById('guest-score')

let home_score = 0
let guest_score = 0

function home_plus_one() {
    home_score +=1
    homeEl.textContent = home_score 
}

function home_plus_two() {
    home_score +=2
    homeEl.textContent = home_score 
}

function home_plus_three() {
    home_score +=3
    homeEl.textContent = home_score 
}

function guest_plus_one() {
    guest_score +=1
    guestEl.textContent = guest_score 
}

function guest_plus_two() {
    guest_score +=2
    guestEl.textContent = guest_score 
}

function guest_plus_three() {
    guest_score +=3
    guestEl.textContent = guest_score 
}
