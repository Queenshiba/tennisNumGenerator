// let doublesPlayerNum = document.getElementById('playerInput').value
// let doublesCourtNum = document.getElementById('courtInput').value

let doublesPlayerNum = 40
let doublesCourtNum = 10
let doublesGroupNum = 4
let doublesPairNum = 2

let doublesNumsArr = []

let setBtn = document.getElementById('set-btn')
setBtn.addEventListener('click', () => { appendResult() })

function appendResult() {
    // let doublesPlayerNum = document.getElementById('playerInput').value
    // let doublesCourtNum = document.getElementById('courtInput').value


    let resultWrap = document.getElementById('result-wrap')
    resultWrap.setAttribute("id", "resultWrap");



    let firstRoundGroups = firstRoundGropMaker(doublesPairGenerator(getNumsPlayers(doublesPlayerNum)))

    // appending title "first round"
    let divForResultFirst = document.createElement('div');
    divForResultFirst.setAttribute("id", "resultFirstRoundWrap");

    let h2ForFirstRoundTitleText = document.createElement('p');
    let nodeFirstRoundTitleText = document.createTextNode("First Round")
    h2ForFirstRoundTitleText.appendChild(nodeFirstRoundTitleText)
    resultWrap.appendChild(h2ForFirstRoundTitleText)

    // appending numbers of firstround
    for (let i = 0; i < firstRoundGroups.length; i++) {
        let divForGroupWrap = document.createElement('div');
        divForGroupWrap.setAttribute("class", "groupWrap");

        let pairOne = firstRoundGroups[i][0];
        let pairTwo = firstRoundGroups[i][1];

        console.log(pairOne)

        let nodeFirstGroupCourtNo = document.createTextNode(i + 1)
        let nodeFirstGroupPairOne = document.createTextNode(pairOne)
        let nodeFirstGroupPairTwo = document.createTextNode(pairTwo)
        let nodeFirstGroupPairVs = document.createTextNode('vs.')


        h2ForFirstRoundTitleText.setAttribute("id", "firstRoundTitleText");
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
        pForCourtNo.appendChild(nodeFirstGroupCourtNo)
        pForVs.appendChild(nodeFirstGroupPairVs)

        divForGroupWrap.appendChild(pForCourtNo)
        divForGroupWrap.appendChild(pForPairOne)
        divForGroupWrap.appendChild(pForVs)
        divForGroupWrap.appendChild(pForPairTwo)


        divForResultFirst.appendChild(divForGroupWrap)

        resultWrap.appendChild(divForResultFirst)
    }


    // second round
    let secondRoundGroupShuffledGroup = secondRoundGroupShuffled(secondRoundGroupingArr)


    console.log(secondRoundGroupShuffledGroup)
        // appending title "second round"
    let divForResultSecond = document.createElement('div');
    divForResultSecond.setAttribute("id", "resultSecondRoundWrap");

    let h2ForSecondRoundTitleText = document.createElement('p');
    let nodeSecondRoundTitleText = document.createTextNode("Second Round")
    h2ForSecondRoundTitleText.appendChild(nodeSecondRoundTitleText)
    resultWrap.appendChild(h2ForSecondRoundTitleText)


    // appending numbers of secondround

    for (let i = 0; i < secondRoundGroupShuffledGroup.length; i++) {
        let divForGroupWrap = document.createElement('div');
        divForGroupWrap.setAttribute("class", "groupWrap");

        let playerOne = secondRoundGroupShuffledGroup[i][0];
        let playerTwo = secondRoundGroupShuffledGroup[i][1];
        let playerThree = secondRoundGroupShuffledGroup[i][2];
        let playerFour = secondRoundGroupShuffledGroup[i][3];


        let nodeSecondGroupCourtNo = document.createTextNode(i + 1)
        let nodeSecondGroupPlayerOne = document.createTextNode(playerOne)
        let nodeSecondGroupPlayerTwo = document.createTextNode(playerTwo)
        let nodeSecondGroupPlayerThree = document.createTextNode(playerThree)
        let nodeSecondGroupPlayerFour = document.createTextNode(playerFour)
        let nodeSecondGroupPairVs = document.createTextNode('vs.')


        h2ForSecondRoundTitleText.setAttribute("id", "secondRoundTitleText");
        let pForPlayerOne = document.createElement('p');
        pForPlayerOne.setAttribute("class", "pForPlayerOne");
        let pForPlayerTwo = document.createElement('p');
        pForPlayerTwo.setAttribute("class", "pForPlayerTwo");
        let pForPlayerThree = document.createElement('p');
        pForPlayerThree.setAttribute("class", "pForPlayerThree");
        let pForPlayerFour = document.createElement('p');
        pForPlayerFour.setAttribute("class", "pForPlayerFour");
        let pForCourtNo = document.createElement('p');
        pForCourtNo.setAttribute("class", "pForCourtNo");
        let pForVs = document.createElement('p');
        pForVs.setAttribute("class", "pForVs");


        pForPlayerOne.appendChild(nodeSecondGroupPlayerOne)
        pForPlayerTwo.appendChild(nodeSecondGroupPlayerTwo)
        pForCourtNo.appendChild(nodeSecondGroupCourtNo)
        pForPlayerThree.appendChild(nodeSecondGroupPlayerThree)
        pForPlayerFour.appendChild(nodeSecondGroupPlayerFour)
        pForVs.appendChild(nodeSecondGroupPairVs)

        divForGroupWrap.appendChild(pForCourtNo)
        divForGroupWrap.appendChild(pForPlayerOne)
        divForGroupWrap.appendChild(pForPlayerTwo)
        divForGroupWrap.appendChild(pForVs)
        divForGroupWrap.appendChild(pForPlayerThree)
        divForGroupWrap.appendChild(pForPlayerFour)

        divForResultSecond.appendChild(divForGroupWrap)

        resultWrap.appendChild(divForResultSecond)
    }



}

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
// console.log(firstRoundGropMaker(doublesPairGenerator(getNumsPlayers(doublesPlayerNum))))


function SecondRoundGrouping(secondRoundPairArray, doublesPlayerNum, doublesCourtNum) {

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

        let amountsofgroup = Math.floor(doublesPlayerNum / 4)
        let remainder = doublesPlayerNum % doublesCourtNum
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
    }
    return firstHalfPair
}
// console.log(SecondRoundGrouping(doublesPairGenerator(getNumsPlayers(doublesPlayerNum)), doublesPlayerNum, doublesCourtNum))
let secondRoundGroupingArr = SecondRoundGrouping(doublesPairGenerator(getNumsPlayers(doublesPlayerNum)), doublesPlayerNum, doublesCourtNum)
    // console.log(secondRoundGroupingArr)

function secondRoundGroupShuffled(secondRoundGroupingArr) {
    // console.log(secondRoundGroupingArr[0])

    let shuffledGroupArr = []
    for (let i = 0; i < secondRoundGroupingArr.length; i++) {

        let group = secondRoundGroupingArr[i]
        group.splice(1, 0, secondRoundGroupingArr[i][2])
        group.splice(3, 0, secondRoundGroupingArr[i][4])
        let shuffledGroup = group.slice(0, 4)
        shuffledGroupArr.push(shuffledGroup)
    }
    return shuffledGroupArr
        // console.log(shuffledGroup)

}
// secondRoundGroupShuffled(secondRoundGroupingArr)


// reset btn

let resetBtn = document.getElementById('reset-btn')
resetBtn.addEventListener('click', () => { resetInputResult() })

function resetInputResult() {
    document.getElementById('playerInput').value
    document.getElementById('courtInput').value
    alert('test')
}
// document.getElementById('playerInput').value.reset();