function printAndSum(numOne: number, numTwo: number): void {
    let finalSum: number = 0;
    let allNumbers: number[] = [];

    for (let i = numOne; i <= numTwo; i++) {
        allNumbers.push(i);
        finalSum += i;
    }

    console.log(allNumbers.join(' '));
    console.log(`Sum: ${finalSum}`);
}

// printAndSum(5, 10);
// printAndSum(0, 26);
printAndSum(50, 60);