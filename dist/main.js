
let doublesPlayerNum = document.getElementById('playerInput').value
let doublesCourtNum = document.getElementById('courtInput').value

// let doublesPlayerNum = 40
// let doublesCourtNum = 10
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
    resultWrap.setAttribute("id", "resultWrap");

    let divForResultFirst = document.createElement('div');
    divForResultFirst.setAttribute("id", "resultFirstRoundWrap");



    let firstRoundGrops = firstRoundGropMaker(doublesPairGenerator(getNumsPlayers(doublesPlayerNum)))





    for (let i = 0; i < firstRoundGrops.length; i++) {
        let divForGroupWrap = document.createElement('div');
        divForGroupWrap.setAttribute("class", "groupWrap");

        let pairOne = firstRoundGrops[i][0];
        let pairTwo = firstRoundGrops[i][1];
        console.log(pairOne)
        console.log(pairTwo)
        // let nodeFirstGroupCourtText = document.createTextNode("Court")
        let nodeFirstGroupCourtNo = document.createTextNode(i + 1)
        let nodeFirstGroupPairOne = document.createTextNode(pairOne)
        let nodeFirstGroupPairTwo = document.createTextNode(pairTwo)
        let nodeFirstGroupPairVs = document.createTextNode('vs.')

        let pForPairOne = document.createElement('p');
        pForPairOne.setAttribute("class", "pForPairOne");
        let pForPairTwo = document.createElement('p');
        pForPairTwo.setAttribute("class", "pForPairTwo");
        let pForCourtNo = document.createElement('p');
        pForCourtNo.setAttribute("class", "pForCourtNo");
        let pForVs = document.createElement('p');
        pForVs.setAttribute("class", "pForVs");

        pForPairOne.appendChild(nodeFirstGroupPairOne)
        pForPairTwo.appendChild(nodeFirstGroupPairTwo)
        // pForCourtNo.appendChild(nodeFirstGroupCourtText)
        pForCourtNo.appendChild(nodeFirstGroupCourtNo)
        pForVs.appendChild(nodeFirstGroupPairVs)

        divForGroupWrap.appendChild(pForCourtNo)
        divForGroupWrap.appendChild(pForPairOne)
        divForGroupWrap.appendChild(pForVs)
        divForGroupWrap.appendChild(pForPairTwo)


        divForResultFirst.appendChild(divForGroupWrap)
        resultWrap.appendChild(divForResultFirst)

    }






    // let divForResultSecond = document.createElement('div');
    // divForResultSecond.setAttribute("id", "divForResultSecond");
    // let testTextSecond = document.createTextNode(SecondRoundNumRondomizer(doublesSecondRoundGenerator(getNumsPlayers(doublesPlayerNum)), doublesPlayerNum, doublesCourtNum))
    // divForResultSecond.appendChild(testTextSecond)
    // resultWrap.appendChild(divForResultSecond)


}

// getNumsPlayers(doublesPlayerNum)

// make an array of player numbers
function getNumsPlayers(doublesPlayerNum) {
    // get numbers of players
    let doublesPlayerNumArr = [];
    for (let i = 1; i <= doublesPlayerNum; i++) {
        doublesPlayerNumArr.push(i);
    }
    return doublesPlayerNumArr;
}


// make an array of court numbers
function getNumsCourts(doublesCourtNum) {
    // get amounts of courts
    let doublesCourtNumArr = [];
    for (let i = 1; i <= doublesCourtNum; i++) {
        doublesCourtNumArr.push(i);
    }
    return doublesCourtNumArr;
}

// making pair array
function doublesPairGenerator(doublesPlayerNum) {
    let doublespairArray = []
    for (let i = 0; i < doublesPlayerNum.length; i += 2) {
        doublespairArray.push(doublesPlayerNum.slice(i, i + 2))
    }
    return doublespairArray
}


// first round 
function firstRoundGropMaker(doublespairArray) {
    let groupArr = []
    for (let i = 0; i < doublespairArray.length; i += 2) {
        groupArr.push(doublespairArray.slice(i, i + 2))
    }
    return groupArr
}
console.log(firstRoundGropMaker(doublesPairGenerator(getNumsPlayers(doublesPlayerNum))))




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
// console.log(SecondRoundNumRondomizer(doublesPairGenerator(getNumsPlayers(doublesPlayerNum)), doublesPlayerNum, doublesCourtNum))



// reset btn

let resetBtn = document.getElementById('reset-btn')
resetBtn.addEventListener('click', () => { resetInputResult() })

function resetInputResult() {
    document.getElementById('playerInput').value = '4'
    document.getElementById('courtInput').value = '1'

}