from ninjas import Ninja

class Pet:
    def __init__(self, name, type, tricks, energy = 0, health = 100):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.energy = energy
        self.health = health
    
    def sleep(self):
        self.energy += 25
        return self
    
    def eat(self):
        self.energy += 5
        self.health += 10
        return self
    
    def play(self):
        self.health += 10
        return self

    def noise(self):
        if (self.type == 'cat'):
            print('meow')
        else:
            print('woof')
        return self

class Cat(Pet):
    def __init__(self, name):
        Pet.__init__(self,name,'cat','sit',100,100)
        

cat = Cat('Jett')

spike = Ninja('Spike', 'Spiegel', 'bacon', 'Redford naturals', cat)

print(cat.energy)
print(cat.health)
spike.feed().walk().bathe()
print(cat.energy)
print(cat.health)
