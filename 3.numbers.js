function numbers(input) {
    let arrayNumbers = input.split(' ');
    // console.log(arrayNumbers[0]);
    let sum = 0;

    for(let i = 0; i < arrayNumbers.length; i++) {
        let currentNumber = Number(arrayNumbers[i]);
        sum += currentNumber;
    }

    let averageNumber = sum / arrayNumbers.length;
    let biggerNums = [];

    for(let i = 0; i < arrayNumbers.length; i++) {
        let currentNumber = Number(arrayNumbers[i]);
        if(currentNumber < averageNumber) {
            continue;
        } else if(currentNumber > averageNumber) {
            biggerNums.push(currentNumber);
        }
    }

    let firstFive = biggerNums.sort(function(a, b){return b-a}).slice(0, 5);

    if(firstFive.length > 0) {
        console.log(firstFive.join(' '));
    } else {
        console.log('No');
    }
    
}

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');