// private => #  --> private is a property

class BankAccount {
    #balance = 0;
    deposite(amount){
        this.#balance += amount
    }

// getters and setters
    //getters
    get balance(){
        return this.#balance
    }

    //setter
    set balance(amount){
        this.#balance = amount;
    }

    getBalance(){
        console.log(this.#balance)
    }
}

let acc = new BankAccount()
acc.deposite(5000)
acc.getBalance()
acc.balance = 0
acc.getBalance()