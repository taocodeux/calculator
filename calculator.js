let symbol;
let display = document.getElementById("display")

let firstVal = ""
let secondVal = ""

function show(num){
    display.innerHTML += num
    firstVal += num
}


function operator(num2){
    display.innerHTML += num2
    secondVal = Number(firstVal)
    firstVal = ""
    symbol = num2
}

function delLastNum(){
    display.innerHTML = display.innerHTML.slice(0, -1)
    firstVal = display.innerHTML
}

function clearResult(){
    display.innerHTML = " "
    firstVal = ""
    secondVal = ""

}

function showResult(symbol){
    if (symbol === '+'){
        result = Number(secondVal) + Number(firstVal)
        display.innerHTML = result
        firstVal = result
    }

    else if (symbol === '/') {
        result = Number(secondVal) / Number(firstVal)
        display.innerHTML = result
        firstVal = result
    }

    else if (symbol === '*') {
        result = Number(secondVal) * Number(firstVal)
        display.innerHTML = result
        firstVal = result
    }

    else if (symbol === '-') {
        result = Number(secondVal) - Number(firstVal)
        display.innerHTML = result
        firstVal = result
    }

    else if (symbol === '%') {
        result = Number(secondVal) / 100
        display.innerHTML = result
        firstVal = result
    }
}