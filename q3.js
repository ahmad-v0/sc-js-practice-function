function passFail(num) {
    if (num === "" || num === null || isNaN(num)) {
        console.log('Invalid input...');
    } else {
        if (num > 100) {
            console.log("Error!!!");
        } else {
            if (num >= 33) {
                console.log('Pass.');
            } else if (num >=0) {
                console.log("Fail.");
            } else {
                console.log("Marks cannot be Negative.");
            }
        }
    }
}

passFail (-0);