abstract class CreateAccount<T, U> {
    bankName: T;
    bankId: U;

    constructor (bankName: T, bankId: U) {
        this.bankName = bankName;
        this.bankId = bankId;
    }
}

class PersonalAccount<T, U> extends CreateAccount<T, U> {
    readonly ownerName: string;
    public money: number = 0;
    public recentTransactions: { [key: string]: number } = {};

    constructor (bankName: T, bankId: U, ownerName: string) {
        super(bankName, bankId);
        this.ownerName = ownerName;
    }

    
}

let account = new PersonalAccount('DSK', 101240, 'Ivan Ivanov');

account.deposit(1000);
account.deposit(1000);
account.expense(700, 'Buy new phone');
account.expense(400, 'Book a vacation');
account.expense(400, 'Book a vacation');
account.expense(100, 'Buy food');
console.log(account.showDetails());

let account2 = new PersonalAccount('Fibank', 100000, 'Petar Petrol');

account2.deposit(10000);
account2.deposit(7000);
account2.expense(1200, 'Buy a new car');
account2.expense(200, 'Go to a fancy restaurant');
account2.expense(100, 'Go to a bar');
account2.expense(30, 'Go to the movies');
console.log(account2.showDetails());