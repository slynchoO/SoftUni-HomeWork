function carWash(input) {
    let start = 0;
    let increase = 0;
    let decrease = 0;

    for(let i = 0; i < input.length; i++) {
        let currentAction = input[i];

        switch(currentAction) {
            case 'soap':
                start += 10;
            break;
            case 'water':
                increase = start * 0.20
                start +=increase;
            break;
            case 'vacuum cleaner':
                increase = start * 0.25;
                start += increase;
            break;
            case 'mud':
                decrease = start * 0.10;
                start -= decrease;
            break;
        }
    }

    console.log(`The car is ${start.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])