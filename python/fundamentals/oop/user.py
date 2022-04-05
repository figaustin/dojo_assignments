class User:
    def __init__(self, first_name, last_name, account_balance):
        self.first_name = first_name
        self.last_name = last_name
        self.account_balance = account_balance
    
    def make_deposit(self, amount):
        self.account_balance += amount

    def make_withdrawal(self, amount):
        self.account_balance -= amount
    
    def display_user_balance(self):
        print(f"User: {self.first_name} {self.last_name}, Balance: {self.account_balance}")

    def transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance += amount

guido = User('Guido', 'van Rossum', 150)
john = User('John', 'Do', 100)
jane = User('Jane', 'Do', 120)

guido.make_deposit(30)
guido.make_deposit(30)
guido.make_deposit(30)
guido.make_withdrawal(20)
guido.display_user_balance()
print('=======================')
john.make_deposit(10)
john.make_deposit(10)
john.make_withdrawal(25)
john.make_withdrawal(25)
john.display_user_balance()
print('=======================')
john.make_deposit(10)
jane.make_deposit(100)
jane.make_withdrawal(10)
jane.make_withdrawal(10)
jane.make_withdrawal(10)
jane.display_user_balance()
print('=======================')
guido.transfer_money(jane,20)
guido.display_user_balance()
jane.display_user_balance()





