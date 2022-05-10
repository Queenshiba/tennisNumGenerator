
// let doublesPlayerNum = document.getElementById('playerInput').value
// let doublesCourtNum = document.getElementById('courtInput').value

// let doublesPlayerNum = 12
// let doublesCourtNum = 3
let doublesGroupNum = 4
let doublesPairNum = 2

let doublesNumsArr = []

let setBtn = document.getElementById('set-btn')
setBtn.addEventListener('click', () => { appendResult() })

function appendResult() {
    // let doublesPlayerNum = document.getElementById('playerInput').value
    let doublesPlayerNum = document.getElementById('playerInput').value
    let doublesCourtNum = document.getElementById('courtInput').value


    let resultWrap = document.getElementById('result-wrap')

    let divForResultFirst = document.createElement('div');
    divForResultFirst.setAttribute("id", "divForResultFirst");
    let testTextFirst = document.createTextNode(doublesFirstRoundGenerator(getNumsPlayers(doublesPlayerNum), doublesGroupNum, doublesCourtNum))
    divForResultFirst.appendChild(testTextFirst)
    resultWrap.appendChild(divForResultFirst)

    let divForResultSecond = document.createElement('div');
    divForResultSecond.setAttribute("id", "divForResultSecond");
    let testTextSecond = document.createTextNode(SecondRoundNumRondomizer(doublesSecondRoundGenerator(getNumsPlayers(doublesPlayerNum)), doublesPlayerNum, doublesCourtNum))
    divForResultSecond.appendChild(testTextSecond)
    resultWrap.appendChild(divForResultSecond)


}

// getNumsPlayers(doublesPlayerNum)


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
// console.log(SecondRoundNumRondomizer(doublesSecondRoundGenerator(getNumsPlayers(doublesPlayerNum)), doublesPlayerNum, doublesCourtNum))



// reset btn

let resetBtn = document.getElementById('reset-btn')
resetBtn.addEventListener('click', () => { resetInputResult() })

function resetInputResult() {
    document.getElementById('playerInput').value = '4'
    document.getElementById('courtInput').value = '1'

}