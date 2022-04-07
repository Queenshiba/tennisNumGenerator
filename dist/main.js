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

// console.log(doublesPlayerGropsSecondRoundGenerator(getNumsPlayers(doublesPlayerNum), doublesGroupNum, doublesCourtNum))

let arr = doublesPlayerGropsSecondRoundGenerator(getNumsPlayers(doublesPlayerNum), doublesGroupNum, doublesCourtNum)
let testarr = []
let testarr2 = []
let arrhalflength = arr.length/2
for (let k = 0; k < arr.length/2; k++) {
    testarr.push(arr[k])
}
for (let l = arr.length/2; l < arr.length; l++) {
    testarr2.push(arr[l])
    
}

testarr[0].push(testarr2[0][0])
testarr[0].push(testarr2[0][1])

console.log(testarr)
console.log(testarr2)