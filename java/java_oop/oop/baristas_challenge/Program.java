public class Program {
    
    public static void main(String[] args) {
        Item item1 = new Item("drip cofffee", 4.5);
        Item item2 = new Item("capuccino", 3.75);

        Order order1 = new Order();
        Order order2 = new Order();
        Order order3 = new Order("Cindy");
        Order order4 = new Order("John");
        Order order5 = new Order("Jane");

        order1.addItem(item1);
        order1.addItem(item1);

        order2.addItem(item2);
        order2.addItem(item2);

        order3.addItem(item1);
        order3.addItem(item1);

        order4.addItem(item2);
        order4.addItem(item2);

        order5.addItem(item1);
        order5.addItem(item2);

        order1.setReady(true);
        order2.setReady(false);
        order3.setReady(true);
        order4.setReady(true);
        order5.setReady(false);

        order1.display();
    }
}
