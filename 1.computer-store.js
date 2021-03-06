function computerStore(input) {
    let customerType = input.pop();
    let sumWithoutTax = 0;

    for (let i = 0; i < input.length; i++) {
        let currentPrice = Number(input[i]);

        if (currentPrice > 0) {
            sumWithoutTax += currentPrice;
        } else {
            console.log(`Invalid price!`);
        }
    }

    let amountTaxes = sumWithoutTax * 0.20;
    let sumWithTax = sumWithoutTax + amountTaxes;


    if (customerType === 'special') {
        let discount = sumWithTax * 0.10;

        sumWithTax -= discount;

    }

    if (sumWithTax === 0) {
        console.log(`Invalid order!`);
    } else {
        console.log(`Congratulations you've just bought a new computer!`)
        console.log(`Price without taxes: ${sumWithoutTax.toFixed(2)}$`)
        console.log(`Taxes: ${amountTaxes.toFixed(2)}$`)
        console.log(`-----------`)
        console.log(`Total price: ${sumWithTax.toFixed(2)}$`)
    }
}

computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
]);