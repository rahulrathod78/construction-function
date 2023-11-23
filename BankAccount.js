function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true; 
  }
  BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  };
  
  BankAccount.prototype.withdraw = function(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
    } else {
      console.log('Insufficient funds');
    }
  };
  
  BankAccount.prototype.checkBalance = function() {
    console.log(`Account balance: ${this.balance}`);
  };
  
  BankAccount.prototype.isActive = function() {
    return this.active;
  };
  let account1 = new BankAccount(1, 'Rahul', 'Savings', 500);
let account2 = new BankAccount(2, 'Sundar', 'Checking', 1000);
// Add more accounts as needed
account1.deposit(4000);
account1.withdraw(2000);
account2.deposit(1000);
account2.withdraw(900);

account1.checkBalance();
account2.checkBalance();
console.log(account1.isActive()); 
console.log(account2.isActive()); 
function getTotalBalance(...accounts) {
    return accounts.reduce((total, acc) => {
      if (acc.isActive()) {
        return total + acc.balance;
      }
      return total;
    }, 0);
  }
  console.log(getTotalBalance(account1, account2)); 