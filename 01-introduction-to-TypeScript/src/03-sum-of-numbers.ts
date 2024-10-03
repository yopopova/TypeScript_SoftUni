function sumOfNumbers(n: string, m: string): void {
    const nNum = Number(n);
    const mNum = Number(m);

    let sum: number = 0;

    for (let i = nNum; i <= mNum; i++) {
        sum += i;
    }

    console.log(sum);
}

sumOfNumbers('1', '5');
sumOfNumbers('-8', '20');