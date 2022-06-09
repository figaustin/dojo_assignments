public class Bat extends Mammal{

    public Bat() {
        this.setEnergyLevel(300);
    }

    public void fly() {
        System.out.println("Woooooosh");
        this.setEnergyLevel(this.getEnergyLevel() - 50);
    }

    public void eatHumans() {
        this.setEnergyLevel(this.getEnergyLevel() + 25);
    }

    public void attackTown() {
        System.out.println("*Sounds of town on fire*");
        this.setEnergyLevel(this.getEnergyLevel() - 100);
    }
    
}
