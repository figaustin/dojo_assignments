public class BankAccount {
    
    private double checkingBalance = 0.0;
    private double savingsBalance = 0.0;

    public static Integer accountsCreated = 0;
    public static Double totalMoney;

    public BankAccount() {
        accountsCreated += 1;
    }

    public double getCheckingBalance() {
        return this.checkingBalance;
    }

    public void setCheckingBalance(double checkingBalance) {
        this.checkingBalance = checkingBalance;
    }

    public double getSavingsBalance() {
        return this.savingsBalance;
    }

    public void setSavingsBalance(double savingsBalance) {
        this.savingsBalance = savingsBalance;
    }

    public void deposit(String account, double amount) {
        
        if(account.equals("checking")){
            checkingBalance += amount;
        }
        else if(account.equals("savings")){
            savingsBalance += amount;
        }
        else{
            System.out.println("Could not find a bank account with that name");
        }
    }

    public void withdraw(String account, double amount){
        if(account.equals("checking") && checkingBalance > 0.0){
            checkingBalance -= amount;
        }
        else if(account.equals("savings") && savingsBalance > 0.0){
            savingsBalance -= amount;
        }
        else{
            System.out.println("Could not find a bank account with that name or account does not sufficient funds");
        }
    }

    public void display(){
        System.out.println("Checking Balance: " + getCheckingBalance() + "Savings Balance: " + getSavingsBalance());
    }
}
