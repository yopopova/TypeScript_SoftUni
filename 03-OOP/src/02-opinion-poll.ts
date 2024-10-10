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

function opinionPoll(line: string) {
    const [ name, personAge ] = line.split(' ');
    const age = Number(personAge);

    const newPerson = new Person(name, age);
    newPerson.printPersonInfo();
}

opinionPoll('Peter 12');
opinionPoll('Sofia 33');