class BankAccount {
  constructor(private balance: number, public accountNumber: number, protected customerName: string) {}
  deposit(value: number): number | string {
    if (value > 0) {
      this.balance += value
      return this.balance
    }
    return "Deposit must be more than 0"
  }
  withdraw(value: number): number | string {
    if (value <= 0) {
      return "Withdraw must be more than 0";
    }
    if (value > this.balance) {
      return "Insufficient balance";
    }
    this.balance -= value;
    return this.balance;
  }
  getBalance(): number {
    return this.balance
  }
 }

 const account = new BankAccount(1000, 12345, "John")
 console.log(account.accountNumber); // 12345 (accessible - public)
console.log(account.deposit(500)); // 1500
console.log(account.withdraw(200)); // 1300
console.log(account.getBalance()); // 1300

export default function App() {
  return <div>Check the console</div>
}