function createAccount(owner, initialBalance) {
    return {
        owner,
        balance: initialBalance,
        deposit(amount) {
            this.balance += amount;
        },
        withdraw(amount) {
            if (this.balance >= amount) {
                this.balance -= amount;
            } 
        },
        getBalance() {
            return this.balance;
        }
    };
}

module.exports = { createAccount };