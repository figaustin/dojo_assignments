package java.java_foundations.fundamentals.cafe_business_logic;

import java.util.ArrayList;

public class CafeUtil {
    
    public int getStreakGoal() {

        return 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;
    }

    public double getOrderTotal(double[] prices) {

        double sum = 0.0;
        for(double price : prices) {
            sum += price;
        }

        return sum;
    }

    public void displayMenu(ArrayList<String> menuItems) {
        
        for(String item : menuItems) {
            System.out.println(menuItems.indexOf(item) + " " + item);
        }
    }

    public void addCustomer(ArrayList<String> customers) {
        System.out.println("Please enter your name: ");

        String userName = System.console().readLine();

        System.out.println("Hello, " + userName + "!");
        System.out.println("There are " + customers.size() + " people in front of you");

        customers.add(userName);
    }
}
