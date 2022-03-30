let doublesPlayerNum = 20
let doublesCourtNum = 5

function getNumsPlayers(doublesPlayerNum) {
    // get numbers of players
    let doublesPlayerNumArr = [];
    for (let i = 1; i <= doublesPlayerNum; i++) {
        doublesPlayerNumArr.push(i);
    }
    return doublesPlayerNumArr;
}


function getNumsCourts(doublesCourtNum) {
    // get amounts of courts
    let doublesCourtNumArr = [];
    for (let i = 1; i <= doublesCourtNum; i++) {
        doublesCourtNumArr.push(i);
    }
    return doublesCourtNumArr;
}

function doublesPlayerNumGenerator() {
    console.log(getNumsPlayers(doublesPlayerNum))
    console.log(getNumsCourts(doublesCourtNum))
    
}
// console.log(getNumsPlayers(doublesPlayerNum))
// console.log(getNumsCourts(doublesCourtNum))

// console.log(getNumsCourts(doublesCourtNum))
doublesPlayerNumGenerator()