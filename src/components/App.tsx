class BankAccount {
  constructor(public accountNumber: number, private balance: number, public owner: string) {}

  checkBalance(): number {
    return this.balance;
  }

  deposit(amount: number): boolean {
    if (amount > 0) {
      this.balance += amount;
      console.log(`${amount} added to account`)
      return true
    } else {
      console.log(`The amount of deposit must be more that 0`)
    }
  }

  withdraw(amount: number): boolean {
    if (amount > 0 && this.balance >= amount) {
      this.balance -= amount
      console.log(`${amount} withdrawn from account`)
      return false
    } else if (amount <= 0) {
      console.log(`The amount of withdraw must be more than 0`)
      return true
    } else {
      console.log("No sufficient account balance")
      return false
    }
  }
}

const account1 = new BankAccount(12345, 1000, "John")
console.log(account1.checkBalance())
account1.deposit(500)
account1.withdraw(200)
account1.checkBalance()
console.log(account1.checkBalance())

export default function App() {
  return <div>Check the console for results</div>
}

