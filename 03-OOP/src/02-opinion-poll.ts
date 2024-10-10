class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    printPersonInfo(): void {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

