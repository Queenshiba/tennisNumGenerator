
// let doublesPlayerNum = document.getElementById('playerInput').value
// let doublesCourtNum = document.getElementById('courtInput').value
let doublesGroupNum = 4
let doublesPairNum = 2

let doublesNumsArr = []

let setBtn = document.getElementById('set-btn')
setBtn.addEventListener('click', () => { appendResult() })

function appendResult() {
    let doublesPlayerNum = document.getElementById('playerInput').value

    let resultWrap = document.getElementById('result-wrap')

    let divForResult = document.createElement('div');
    divForResult.setAttribute("id", "resultDoublesPlayerNum");
    let testTextdoublesPlayerNum = document.createTextNode(doublesPlayerNum)
    divForResult.appendChild(testTextdoublesPlayerNum)
    resultWrap.appendChild(divForResult)

    let doublesCourtNum = document.getElementById('courtInput').value
    let divForResultdoublesCourtNum = document.createElement('div');
    divForResultdoublesCourtNum.setAttribute("id", "resultdoublesCourtNum");
    let testTextdoublesCourtNum = document.createTextNode(doublesCourtNum)
    divForResultdoublesCourtNum.appendChild(testTextdoublesCourtNum)
    resultWrap.appendChild(divForResultdoublesCourtNum)
}




function getNumsPlayers(doublesPlayerNum) {
    // get numbers of players
    let doublesPlayerNumArr = [];
    for (let i = 1; i <= doublesPlayerNum; i++) {
        doublesPlayerNumArr.push(i);
    }
    return doublesPlayerNumArr;
}

getNumsPlayers(setNums())

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

    let firstHalfPair = []
    let lastHalfPair = []
    let leftover = []
    let secondRoundPairArrayLength = secondRoundPairArray.length;


    if (doublesPlayerNum % doublesCourtNum === 0) {
        for (let k = 0; k < secondRoundPairArrayLength / 2; k++) {
            firstHalfPair.push(secondRoundPairArray[k])
        }
        for (let k = secondRoundPairArrayLength / 2; k < secondRoundPairArrayLength; k++) {
            lastHalfPair.push(secondRoundPairArray[k])
        }
        for (let z = 0; z < doublesCourtNum; z++) {
            firstHalfPair[z].push(lastHalfPair[z][0])
            firstHalfPair[z].push(lastHalfPair[z][1])
        }
    } else {
        // let halfLengthWithOne = Math.round(doublesPlayerNum / 4)
        let amountsofgroup = Math.floor(doublesPlayerNum / 4)
        let remainder = doublesPlayerNum % doublesCourtNum
        // console.log(amountsofgroup)
        for (let k = 0; k < amountsofgroup; k++) {
            firstHalfPair.push(secondRoundPairArray[k])
        }
        for (let k = amountsofgroup; k < secondRoundPairArrayLength; k++) {
            lastHalfPair.push(secondRoundPairArray[k])
        }
        for (let z = 0; z < doublesCourtNum; z++) {
            firstHalfPair[z].push(lastHalfPair[z][0])
            firstHalfPair[z].push(lastHalfPair[z][1])
        }
        for (let i = amountsofgroup * 2; i < amountsofgroup * 2 + remainder / 2; i++) {
            leftover.push(secondRoundPairArray[i])

        }
        // console.log(leftover)
    }
    return firstHalfPair
}
console.log(SecondRoundNumRondomizer(doublesSecondRoundGenerator(getNumsPlayers(doublesPlayerNum)), doublesPlayerNum, doublesCourtNum))



