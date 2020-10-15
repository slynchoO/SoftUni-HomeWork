function palindromeIntegers(input) {
    let result = '';
    for (let num of input) {
        let isPalindrome = "true";
        num = String(num);
        let mid = parseInt(num.length / 2);

        for(let i = 0; i <= mid; i++) {
            let lastDigit = num.length - 1;
            if(num[i] !== num[lastDigit - i]) {
                isPalindrome = "false";
                break;
            }
        }
        result += isPalindrome + '\n';
    }
    return result;
}

console.log(palindromeIntegers([123,323,421,121])); 