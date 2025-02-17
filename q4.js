// ৪। তিনটি সংখ্যার মধ্যে সর্বোচ্চ সংখ্যাটি কীভাবে বের করবে?

// A functio to identify the largest number among three given numbers.
function largeNum(num1, num2, num3) {
    // if ((num1 > num2 && num1 > num3) || (num1 > num3 && num1 > num2)) {
    //     console.log(`${num1} is the largest number.`);
    // } else if ((num2 > num1 && num2 > num3) || (num2 > num3 && num2 > num1)){
    //     console.log(`${num2} is the largest number.`);
    // } else {
    //     console.log(`${num3} is the largest number.`);
    // }
    // if (num1 === "" || num1 === "string" || num1 === null ||
    //     num2 === "" || num2 === "string" || num2 === null ||
    //     num3 === "" || num3 === "string" || num3 === null
    // ) {
    //     console.log("Invalid input!!");
    // } else if (num1 === num2 && num1 === num3) {
    //     console.log(`${num1}, ${num2} and ${num3} all are equal!`);
    // } else if (num1 === num2) {
    //     if (num1 > num3) {
    //         console.log(`${num1} and ${num2} are equal; both are larger than ${num3}`);
    //     } else {
    //         console.log(`${num3} is the largest number.`);
    //     }
    // }  else if (num1 === num3) {
    //     if (num1 > num2) {
    //         console.log(`${num1} and ${num3} are equal; both are larger than ${num2}`);
    //     } else {
    //         console.log(`${num2} is the largest number.`);
    //     }
    // } else if (num1 > num2) {
    //     if (num1 > num3) {
    //         console.log(`${num1} is the largest number.`);
    //     } 
    // } else if (num2 > num3) {
    //     console.log(`${num2} is the largest number.`);
    // } else if (num3 > num1) {
    //     console.log(`${num3} is the largest number.`);
    // } else {
    //     console.log("Error!!!");
    // }

    if (typeof(num1) !== "number" || typeof(num2) !== "number" || typeof(num3) !== "number") {
        console.log("Invalid input!!!");
    } else if (num1 === num2 && num1 === num3) {
            console.log(`${num1}, ${num2} and ${num3} all are equal!`);
        } else if (num1 === num2) {
            if (num1 > num3) {
                console.log(`${num1} and ${num2} are equal; both are larger than ${num3}`);
            } else {
                console.log(`${num3} is the largest number.`);
            }
        }  else if (num1 === num3) {
            if (num1 > num2) {
                console.log(`${num1} and ${num3} are equal; both are larger than ${num2}`);
            } else {
                console.log(`${num2} is the largest number.`);
            }
        } else if (num1 > num2) {
            if (num1 > num3) {
                console.log(`${num1} is the largest number.`);
            } 
        } else if (num2 > num3) {
            console.log(`${num2} is the largest number.`);
        } else if (num3 > num1) {
            console.log(`${num3} is the largest number.`);
        } else {
            console.log("Error!!!");
        }
}

largeNum(5,5,null);