// ৫. একটি সংখ্যা ধনাত্মক নাকি ঋণাত্মক তা কীভাবে যাচাই করবে?

// A function to determine wheather a given number is positive or negative
function positiveFinder(num) {
    if (typeof(num) !== "number" || num === null) {
        console.log("Invalid input!!");
    } else if (num < 0) {
        console.log(`${num} is a Negative Number.`);
    } else {
        console.log(`${num} is Positive Number.`);
    }
}

positiveFinder(-0);