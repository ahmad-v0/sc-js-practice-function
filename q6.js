// ৬. কোনো একটি সংখ্যা ১০ দিয়ে বিভাজ্য কিনা তা কীভাবে নিশ্চিত করবে?

// A function to determine whether a number is divisible by 10 or not.

function isDivisibleBy10 (num) {
    if (num === null || typeof(num) !== "number") {
        console.log("Invalid Input!!!");
    } else if (num % 10 === 0) {
        console.log(`${num} is divisible by 10.`);
    } else {
        console.log(`${num} is not divisible by 10, the reminder is ${num % 10}.`);
    }
}

isDivisibleBy10(null);