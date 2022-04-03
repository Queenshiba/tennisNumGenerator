let doublesPlayerNum = 23
let doublesCourtNum = 5
let doublesGroupNum = 4

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

function doublesPlayerGropsGenerator(doublesPlayerNum, doublesGroupNum, doublesCourtNum) {
    let gropsInArray
    if (doublesPlayerNum % doublesCourtNum) {
    gropsInArray = Array.from({ length: doublesCourtNum}, () => doublesPlayerNum.splice(0, doublesGroupNum));
    } else {
        gropsInArray = Array.from({ length: doublesCourtNum + 1}, () => doublesPlayerNum.splice(0, doublesGroupNum));
    }
    return gropsInArray
}

console.log(doublesPlayerGropsGenerator(getNumsPlayers(doublesPlayerNum), doublesGroupNum, doublesCourtNum))