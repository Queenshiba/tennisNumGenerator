let doublesPlayerNum = 20
let doublesCourtNum = 5
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

// first round 
function doublesFirstRoundGenerator(doublesPlayerNum, doublesGroupNum, doublesCourtNum) {
    let gropsInArray
    if (doublesPlayerNum % doublesCourtNum) {
        gropsInArray = Array.from({ length: doublesCourtNum }, () => doublesPlayerNum.splice(0, doublesGroupNum));
    } else {
        gropsInArray = Array.from({ length: doublesCourtNum + 1 }, () => doublesPlayerNum.splice(0, doublesGroupNum));
    }
    return gropsInArray

}
// console.log(doublesFirstRoundGenerator(getNumsPlayers(doublesPlayerNum), doublesGroupNum, doublesCourtNum))



function doublesSecondRoundGenerator(doublesPlayerNum) {
    let secondRoundPairArray = []

    for (let i = 0; i < doublesPlayerNum.length; i += 2) {
        secondRoundPairArray.push(doublesPlayerNum.slice(i, i + 2))

    }
    // console.log(secondRoundPairArray)
    return secondRoundPairArray

}

// console.log(doublesSecondRoundGenerator(getNumsPlayers(doublesPlayerNum)),'test')

function SecondRoundNumRondomizer(secondRoundPairArray, doublesPlayerNum, doublesCourtNum) {
    // console.log(secondRoundPairArray)
    let firstHalfPair = []
    let lastHalfPair = []
    let secondRoundPairArrayLength = secondRoundPairArray.length;
    // console.log(secondRoundPairArrayLength)
    for (let z = 0; z < doublesCourtNum; z++) {
        for (let k = 0; k < secondRoundPairArrayLength; k++) {
            firstHalfPair.push(secondRoundPairArray[k])
        }

        firstHalfPair[z].push('a')
        firstHalfPair[z].push('b') 
    }

    // console.log(firstHalfPair)
    // console.log(lastHalfPair)
    return firstHalfPair

}
console.log(SecondRoundNumRondomizer(doublesSecondRoundGenerator(getNumsPlayers(doublesPlayerNum)), doublesPlayerNum, doublesCourtNum))
