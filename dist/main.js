let doublesPlayerNum = 23
let doublesCourtNum = 5
let doublesGroupNum = 4

let doublesNumsArr = []

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

// let secondGroup

function randamizePlayers(doublesPlayerNum, doublesGroupNum, doublesCourtNum) {
    let secondArr
    for (let i = 0; i < doublesPlayerNum.length; i++) {
        secondArr = Array.from({ length: doublesCourtNum }, () => doublesPlayerNum.splice(i, doublesGroupNum),
        doublesPlayerNum.splice(i+2, doublesGroupNum))
        return secondArr
    }


}
console.log(randamizePlayers(getNumsPlayers(doublesPlayerNum), doublesGroupNum, doublesCourtNum))

function doublesPlayerGropsGenerator(doublesPlayerNum, doublesGroupNum, doublesCourtNum) {
    let gropsInArray
    if (doublesPlayerNum % doublesCourtNum) {
        gropsInArray = Array.from({ length: doublesCourtNum }, () => doublesPlayerNum.splice(0, doublesGroupNum));
    } else {
        gropsInArray = Array.from({ length: doublesCourtNum + 1 }, () => doublesPlayerNum.splice(0, doublesGroupNum));
    }
    return gropsInArray

}



// console.log(doublesPlayerGropsGenerator(getNumsPlayers(doublesPlayerNum), doublesGroupNum, doublesCourtNum))