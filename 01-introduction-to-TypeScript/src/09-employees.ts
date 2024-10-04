function employees(arr: string[]): void {
    const arrLength: number = arr.length;

    for (let i = 0; i < arrLength; i++) {
        let employeeName = arr[i];
        let personalNum = employeeName.length;

        console.log(`Name: ${employeeName} -- Personal Number: ${personalNum}`);
    }
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
employees(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland']);