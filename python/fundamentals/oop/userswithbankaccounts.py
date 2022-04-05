
class User:
    def __init__(self, name, account_type):
        self.name = name
        self.account_type = account_type
        self.account = BankAccount(name, 2, account_type, 100)
    
    def make_deposit(self, amount):
        self.account.deposit(amount)

    def make_withdrawal(self, amount):
        self.account.withdraw(amount)
    
    def display_user_balance(self):
        print(f"Balance: {self.account.balance}")

    def transfer_money(self, other_user, amount):
        self.account -= amount
        other_user.account += amount

# 
# 

class BankAccount:
    all_accounts = []
    def __init__(self, int_rate, balance = 0):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_accounts.append(self)

    def deposit(self, amount, account_type):
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
            percent = self.int_rate / 100
            interest = self.balance * percent
            self.balance += interest
        return self

    @classmethod
    def print_info(cls):
       for account in cls.all_accounts:
           print(f'{account.int_rate}%, ${account.balance}')



