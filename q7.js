// ৭. একজন ব্যক্তি ভোট দিতে পারবে কিনা তা কীভাবে নির্ধারণ করবে? (ভোটারের বয়স >= ১৮)

// A function to determine if a person is eligible to vote (by age)

function isEligibleVoter(age) {
    if (age === null || typeof(age) !== "number") {
        console.log("Invalid Input!");
    } else if (age < 0) {
        console.log("Age can not be negative!");
    } else if (age === 0) {
        console.log("Age should not be 0 (Zero)!");
    } else if (age > 0 && age < 18) {
        console.log(`Voter is under aged. A voter must be atlest 18 to vote.`);
    } else if (age >= 18 && age <= 150) {
        console.log(`Eligible Voter. Congratulation!!! You can vote.`);
    } else {
        console.log("Error...");
    }
}

isEligibleVoter(null);