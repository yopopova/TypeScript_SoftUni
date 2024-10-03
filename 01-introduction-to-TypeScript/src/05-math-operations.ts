function mathOperations(numOne: number, numTwo: number, operator: string): void {

    switch (operator) {
        case '+':
            console.log(numOne + numTwo);
            break;
        case '-':
            console.log(numOne - numTwo);
            break;
        case '*':
            console.log(numOne * numTwo);
            break;
        case '/':
            console.log(numOne / numTwo);
            break;
        case '%':
            console.log(numOne % numTwo);
            break;
        case '**':
            console.log(numOne ** numTwo);
            break;
        default:
            break;
    }
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');
mathOperations(10, 2, '%');
mathOperations(10, 3, '%');
mathOperations(2, 3, '**');