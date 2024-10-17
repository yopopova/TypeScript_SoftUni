abstract class CreateAccount<T, U> {
    bankName: T;
    bankId: U;

    constructor (bankName: T, bankId: U) {
        this.bankName = bankName;
        this.bankId = bankId;
    }
}

