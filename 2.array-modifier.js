function arrayModifier(input) {
    let initialArray = input.shift().split(' ');
    // console.log(initialArray.length);

    for(let i = 0; i < input.length; i++) {
        let currentCommand = input[i].split(' ');
        let action = currentCommand[0];
        let firstIndex = currentCommand[1];
        let endIndex = currentCommand[2];
        let isEnd = false;

        switch(action) {
            case 'swap':
                let initialFirst = initialArray[firstIndex]
                let initialLast = initialArray[endIndex];
                initialArray[endIndex] = initialFirst;
                initialArray[firstIndex] = initialLast;
            break;
            case 'multiply':
                let multiply = Number(initialArray[firstIndex]) * Number(initialArray[endIndex]);
                initialArray[firstIndex] = multiply;
            break;
            case 'decrease':
                for(let i = 0; i < initialArray.length;i++) {
                    let currentNumber = Number(initialArray[i]);
                    let decrease = currentNumber - 1;
                    initialArray[i] = decrease;
                }
            break;
            case 'end':
                isEnd = true;
            break;
        }

        if(isEnd) {
            break;
        }
    }
    console.log(initialArray.join(', '));
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);