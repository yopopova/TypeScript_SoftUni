type Person = {
    firstName: string,
    lastName: string,
    age: number,
}

function personInfo(firstName: string, lastName: string, personAge: string): Person {
    let age: number = Number(personAge);

    const person: Person = {
        firstName: firstName,
        lastName: lastName,
        age: age,
    }

    // for (const [key, value] of Object.entries(person)) {
    //     console.log(`${key}: ${value}`);
    // }    

    return person;
}

// console.log(personInfo("Peter", "Pan", "20"));
// console.log(personInfo("George", "Smith", "18"));

const p = personInfo("Peter", "Pan", "20");
console.log(`firstName: ${p.firstName}`);
console.log(`lastName: ${p.lastName}`);
console.log(`age: ${p.age}`);

// const p = personInfo("George", "Smith", "18");
// console.log(`firstName: ${p.firstName}`);
// console.log(`lastName: ${p.lastName}`);
// console.log(`age: ${p.age}`);