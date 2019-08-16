const socket = io();

let place = false;
let choosedTeam = [false, false, false, false]

let teamBlue;
let teamPurple;
let teamRed;
let teamYellow;
let start;
let statut = true;
let triggered = false

socket.on('playersListUpdate', data => {
    choosedTeam = [...data.players];
})

socket.on('playGameScene', data => {
    triggered = data;
    if (triggered) {
    console.log('hello');
    }
    
})

