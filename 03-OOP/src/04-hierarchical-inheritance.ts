class Animal {
    public eat(): void {
        console.log("eating...");
    }
}

class Dog extends Animal {
    public bark(): void {
        console.log("barking...");
    }
}

class Cat extends Animal {
    public meow(): void {
        console.log("meowing...");
    }
}

const newDog = new Dog();
newDog.eat();
newDog.bark();

const newCat = new Cat();
newCat.eat();
newCat.meow();