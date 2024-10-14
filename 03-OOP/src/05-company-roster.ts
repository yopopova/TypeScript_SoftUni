class Employee {
    name: string;
    salary: number;
    position: string;
    department: string;
    email?: string;
    age?: number;

    constructor(name: string, salary: number, position: string, department: string, email?: string, age?: number) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.email = email || 'n/a';
        this.age = age || -1;
    }
}

function companyRoster(arr: string[]): void {
    const arrLength = Number(arr.shift());

    const employees: Employee[] = [];

    for (let i = 0; i < arrLength; i++) {
        const [name, salary, position, department, email, age] = arr[i].split(' ');

        const empSalary = Number(salary);
        const empAge = Number(age);

        if (email !== undefined && age !== undefined) {
            const newEmployee = new Employee(name, empSalary, position, department, email, empAge);
            employees.push(newEmployee);
            
        } else if (email === undefined && age === undefined) {
            const newEmployee = new Employee(name, empSalary, position, department);
            employees.push(newEmployee);

        } else if (Number(email) / 1) {
            const currentEmail = 'n/a';
            const currantAge = Number(email);

            const newEmployee = new Employee(name, empSalary, position, department, currentEmail, currantAge);
            employees.push(newEmployee);

        } else {
            const newEmployee = new Employee(name, empSalary, position, department, email);
            employees.push(newEmployee);
        }
    }

    // console.log(employees);

    
}

companyRoster([
    '4',
    'Peter 120.00 Dev Development peter@abv.bg 28',
    'Tina 333.33 Manager Marketing 33',
    'Sam 840.20 ProjectLeader Development sam@sam.com',
    'George 0.20 Freeloader Nowhere 18'
]);

console.log('----------------------------------------');

companyRoster([
    '6',
    'Silver 496.37 Temp Coding silver@yahoo.com',
    'Sam 610.13 Manager Sales',
    'John 609.99 Manager Sales john@abv.bg 44',
    'Venci 0.02 Director BeerDrinking beer@beer.br 23',
    'Andre 700.00 Director Coding',
    'Popeye 13.3333 Sailor SpinachGroup popeye@pop.ey'
]);