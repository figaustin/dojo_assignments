public class Gorilla extends Mammal{
    

    public Gorilla() {

    }

    public void throwSomething() {
        System.out.println("Gorilla threw something at you!");
        this.setEnergyLevel(this.getEnergyLevel() - 5);
    }

    public void eatBananas() {
        System.out.println("Gorilla ate yummy bananas");
        this.setEnergyLevel(this.getEnergyLevel() + 10);
    }

    public void climb() {
        System.out.println("Gorilla climbed a tree!");
        this.setEnergyLevel(this.getEnergyLevel() - 10);
    }


}
