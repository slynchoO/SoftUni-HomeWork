function passValidator(password) {
    let enoughtLength = false;
    let onlyDigitsAndLetters = false;
    let digits = 0;


    if (password.length >= 6 && password.length <= 10) {
        enoughtLength = true;
    } else {
        enoughtLength = false;
    }


    for (let i = 0; i < password.length; i++) {
        let currentChar = password[i].charCodeAt(0);
        if (currentChar >= 48 && currentChar <= 57 ||
            currentChar >= 65 && currentChar <= 90 ||
            currentChar >= 97 && currentChar <= 122) {
            onlyDigitsAndLetters = true;
        } else {
            onlyDigitsAndLetters = false;
            break;
        }
    }


    for (let i = 0; i < password.length; i++) {
        let currentChar = password[i].charCodeAt(0);
        if (currentChar >= 48 && currentChar <= 57) {
            digits++;
        }
    }

    if (enoughtLength === true &&
        digits >= 2 &&
        onlyDigitsAndLetters === true) {
        console.log("Password is valid");
    } else {
        if(!enoughtLength) {
            console.log('Password must be between 6 and 10 characters');
        }
        if(!onlyDigitsAndLetters) {
            console.log('Password must consist only of letters and digits');
        }
        if(digits < 2) {
            console.log('Password must have at least 2 digits');
        }
    }

}

passValidator('logIn');