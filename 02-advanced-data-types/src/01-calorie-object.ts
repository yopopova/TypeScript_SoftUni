function calorieObject(arr: string[]): void {
    const arrLength: number = arr.length;
    let caloriesInfo = {};

    for (let i = 0; i < arrLength; i+=2) {
        let food: string = arr[i]; 
        let calories: number = Number(arr[i + 1]);

        caloriesInfo[food] = calories;        
    }

    console.log(caloriesInfo);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);