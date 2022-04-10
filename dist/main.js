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
    return secondRoundPairArray

}

// console.log(doublesSecondRoundGenerator(getNumsPlayers(doublesPlayerNum)))

function SecondRoundNumRondomizer(secondRoundPairArray, doublesPlayerNum, doublesCourtNum) {
    // console.log(secondRoundPairArray)
    let firstHalfPair = []
    let lastHalfPair = []
    let secondRoundPairArrayLength = secondRoundPairArray.length;
    // console.log(secondRoundPairArrayLength)
    for (let z = 0; z < 6; z++) {
        for (let k = 0; k < secondRoundPairArrayLength / 2; k++) {
            return firstHalfPair.push(secondRoundPairArray[k])
        }

        firstHalfPair[z].push(lastHalfPair[z][0])
    }
    // for (let z = 0; z < 6; z++) {

    //     for (let l = secondRoundPairArrayLength / 2; l < secondRoundPairArrayLength; l++) {
    //         lastHalfPair.push(secondRoundPairArray[l])
    //     }

    //     firstHalfPair[z].push(lastHalfPair[z][1])

    // }
    console.log(firstHalfPair)
    // console.log(lastHalfPair)
    return firstHalfPair

}
console.log(SecondRoundNumRondomizer(doublesSecondRoundGenerator(getNumsPlayers(doublesPlayerNum)), doublesPlayerNum, doublesCourtNum))
