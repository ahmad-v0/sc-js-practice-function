function oddEven(num) {
    if (num === "" || isNaN(num)) {
        console.log("Input is not a Number.");
    } else {
        if (num % 2 === 0 ) {
            console.log("The given number is Even.");
        } else {
            console.log('The given number is Odd.');
        }
    }
} 

oddEven(0);