function biggerHalf(arr: number[]): void {
    let sortedArr = arr.sort((a, b) => {
        return a - b;
    });

    let arrHalfLength = Math.floor(sortedArr.length / 2);

    let newArr = sortedArr.slice(arrHalfLength);

    console.log(newArr);
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);