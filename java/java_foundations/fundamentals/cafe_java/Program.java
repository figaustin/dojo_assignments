

public class Program {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripCoffeePrice = 4.5;
        double lattePrice = 5.0;
        double cappuccinoPrice = 5.2;
    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = true;
        boolean isReadyOrder4 = false;
    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
    	// ** Your customer interaction print statements will go here ** //
        System.out.println(generalGreeting + customer1 + readyMessage);

        if(isReadyOrder4) {
            System.out.println(generalGreeting + customer4 + readyMessage + " " + displayTotalMessage + cappuccinoPrice);
        }
        else{
            System.out.println(generalGreeting + customer4 + pendingMessage);
        }

        if(isReadyOrder2){
            System.out.println(generalGreeting + customer2 + readyMessage + " " + displayTotalMessage + (lattePrice * 2));
        }
        else{
            System.out.println(generalGreeting + customer2 + pendingMessage);
        }

        System.out.println(customer3 + ", " + displayTotalMessage + (lattePrice - dripCoffeePrice));
    }
}
