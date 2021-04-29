function reverseThisString(string){
    var split = string.split("")
    var reverse = split.reverse()
    var join = reverse.join("")
    return join
}

function swapCase(string) {
    var split = string.split("")
    for(let i = 0; i < split.length; i++) 
    {
        if(split[i] == split[i].toUpperCase()) {
            split[i] = split[i].toLowerCase()
        } else {
            split[i] = split[i].toUpperCase()
        }
    }
    var join = split.join("")
    return join
}

function toCelsius(array){
    const celsius = array.map(function(array) {
        return (array-32) * (5/9);
    });
    return celsius;
}

function passOrFail(array){
    const passFail = array.map(function(array) {
        if (array >= 75) {
            return true
        } else {
            return false
        }
    })
    return passFail
}

function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    let cardGermNumber = []

    for(let i = 0; i < cardinalNumbers.length; i++)
    {
        cardGermNumber[i] = cardinalNumbers[i] + " is " + germanNumbers[i]
    }
    return cardGermNumber
}

function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    const prime = numbers.filter(function(numbers) {
        return (numbers == 2 || numbers == 3 || (numbers > 1  && numbers%2 > 0 && numbers%3 > 0))
    })
    return prime
}

function iLoveCSC225() {
    for(let i = 1; i < 101; i++)
    {
        if(i%3 == 0 && i%5 == 0) {
            console.log("CSC225 RULES I LOVE JAVASCRIPT")
        } else if(i%3 == 0) {
            console.log("CSC225 RULES")
        } else if(i%5 == 0) {
            console.log("I LOVE JAVASCRIPT")
        } else {
            console.log(i)
        }
    }
}

console.log(reverseThisString('Hello'))
console.log(swapCase('Hello World'))
let fahrenheit = [23, 32, 41, 50, 59]
console.log(toCelsius(fahrenheit))
let tests = [20, 30, 50, 80, 90, 100]
console.log(passOrFail(tests))
console.log(germanNumbers())
console.log(returnPrimeNumbers())
console.log(iLoveCSC225())