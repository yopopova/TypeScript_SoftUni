function aggregateElements(arr: number[]): void {
    const arrLength: number = arr.length;    

    // Calculates the sum of all elements from the input array.
    let sum = arr.reduce((a, b) => a + b);

    // Calculates the sum of the inverse values of all elements from the array.
    let inverseValuesSum: number = 0;
 
    for (let i = 0; i < arrLength; i++) {
        inverseValuesSum += 1 / arr[i];
    }

    // Concatenates the string representations of all elements from the array.
    let concatArr = arr.join('');

    console.log(sum);
    console.log(inverseValuesSum);
    console.log(concatArr);   
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);