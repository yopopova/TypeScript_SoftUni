function largestNumber(numOne: number, numTwo: number, numThree: number): void {
    let largestNum: number;

    if (numOne >= numTwo && numOne >= numThree) {
        largestNum = numOne;
    } else if (numTwo >= numOne && numTwo >= numThree) {
        largestNum = numTwo;
    } else if (numThree >= numOne && numThree >= numTwo) {
        largestNum = numThree;
    }

    console.log(`The largest number is ${largestNum}.`);
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);