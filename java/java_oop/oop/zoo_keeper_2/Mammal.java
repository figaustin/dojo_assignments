public class Mammal {

    private Integer energyLevel = 100;

    public Integer getEnergyLevel() {
        return this.energyLevel;
    }

    public void setEnergyLevel(Integer energyLevel) {
        this.energyLevel = energyLevel;
    }

    public Mammal() {
        
    }

    public Integer displayEnergy() {
        System.out.println(this.energyLevel);
        return this.energyLevel;
    }



}