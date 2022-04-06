let doublesPlayerNum = 24
let doublesCourtNum = 6
let doublesGroupNum = 4
let doublesPairNum = 2

let doublesNumsArr = []

function getNumsPlayers(doublesPlayerNum) {
    // get numbers of players
    let doublesPlayerNumArr = [];
    for (let i = 1; i <= doublesPlayerNum; i++) {
        doublesPlayerNumArr.push(i);
    }
    return doublesPlayerNumArr;
}
getNumsPlayers(doublesPlayerNum)

function getNumsCourts(doublesCourtNum) {
    // get amounts of courts
    let doublesCourtNumArr = [];
    for (let i = 1; i <= doublesCourtNum; i++) {
        doublesCourtNumArr.push(i);
    }
    return doublesCourtNumArr;
}

// let secondGroup





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



function doublesPlayerGropsSecondRoundGenerator(doublesPlayerNum, doublesGroupNum, doublesCourtNum) {
    // console.log(doublesPlayerNum)
    let gropsInSecondArray = []

    for (let i = 0; i < doublesPlayerNum.length; i += 2) {
        gropsInSecondArray.push(doublesPlayerNum.slice(i, i + 2))

        
    }
    console.log(gropsInSecondArray.length)
    return gropsInSecondArray

}

console.log(doublesPlayerGropsSecondRoundGenerator(getNumsPlayers(doublesPlayerNum), doublesGroupNum, doublesCourtNum))

