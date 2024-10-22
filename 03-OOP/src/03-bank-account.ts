class BankAccount {
    private static idCounter: number = 1;
    private static interestRate: number = 0.02;

    private id: number;
    private balance: number;

    constructor() {
        this.id = BankAccount.idCounter++;
        this.balance = 0;
        console.log(`Account ID${this.id} created`);
    }

    public static setInterestRate(rate: number) {
        BankAccount.interestRate = rate;
    }

    public getInterest(years: number): number {
        return this.balance * BankAccount.interestRate * years;
    }

    public deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited ${amount} to ID${this.id}`);
    }

    public getId(): number {
        return this.id;
    }
}

function createAccounts(arr: string[]) {
    const accounts: Map<number, BankAccount> = new Map();

    let index = 0;
    let line = arr[index];

    while (line !== 'End') {
        const [command, numOne, numTwo] = line.split(' ');

        if (command === 'Create') {
            const newAccount = new BankAccount();
            accounts.set(newAccount.getId(), newAccount);

        } else if (command === 'Deposit') {
            const id = Number(numOne);
            const amount = Number(numTwo);

            const account = accounts.get(id);

            if (account) {
              account.deposit(amount);
            } else {
              console.log(`Account does not exist`);
            }

        } else if (command === 'SetInterest') {
            const rate = Number(numOne);
            BankAccount.setInterestRate(rate);

        } else if (command === 'GetInterest') {
            const id = Number(numOne);
            const years = Number(numTwo);

            const account = accounts.get(id);

            if (account) {
              const interest = account.getInterest(years);
              console.log(interest.toFixed(2));
            } else {
              console.log(`Account does not exist`);
            }
        }
        
        index++;
        line = arr[index];
    }
}

// createAccounts(['Create', 'Deposit 1 20', 'GetInterest 1 10', 'End']);
createAccounts(['Create', 'Create', 'Deposit 1 20', 'Deposit 3 20', 'Deposit 2 10', 'SetInterest 1.5', 'GetInterest 1 1', 'GetInterest 2 1', 'GetInterest 3 1', 'End']);