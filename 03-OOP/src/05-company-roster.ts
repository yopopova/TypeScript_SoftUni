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

