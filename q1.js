function sizeMatter (num1, num2) {
    if (num1 === num2 ) {
        console.log('Both numbers are equal!');
    } else if (num1 > num2) {
        console.log(`${num1} is the larger number.`);
    } else {
        console.log(`${num2} is the larger number.`);
    }
}

sizeMatter(-15, -15);