let doublesPlayerNum = 20
let doublesCourtNum = 4
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
    let gropsInArray = Array.from({ length: doublesCourtNum }, () => doublesPlayerNum.splice(0, doublesGroupNum));
    console.log(gropsInArray[0].length)
    return gropsInArray
}

console.log(doublesPlayerGropsGenerator(getNumsPlayers(doublesPlayerNum), doublesGroupNum, doublesCourtNum))