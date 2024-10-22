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

    
}

