class BankAccount:
    all_accounts = []
    def __init__(self, int_rate, balance = 0):
        self.int_rate = int_rate
        self.balance = balance

        BankAccount.all_accounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
        else:
            print('Insufficient funds: Charging a $5 fee')
            self.balance - 5
        return self
    def display_account_info(self):
        print("Balance: ", self.balance)
        return self
    def yield_interest(self):
        if self.balance > 0:
            self.balance *= self.int_rate
        return self

    @classmethod
    def print_info(cls):
       for account in cls.all_accounts:
           print(f'{account.int_rate}%, ${account.balance}')
        

# Accounts
account1 = BankAccount(5, 100)
account2 = BankAccount(3, 200)

# Using Accounts

account1.deposit(30).deposit(30).deposit(30).withdraw(20).yield_interest().display_account_info()

account2.deposit(40).deposit(40).withdraw(10).withdraw(10).withdraw(10).withdraw(10).yield_interest().display_account_info()

print('=================')

BankAccount.print_info()




