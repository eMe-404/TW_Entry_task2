class Animal {
    constructor(name, legNum, bodyColor) {
        this.name = name;
        this.legNum = legNum;
        this.bodyColor = bodyColor;
    }

    describe() {
        console.log("my name is:" + this.name + ", and I have:" + this.legNum +
            "legs, my body is:" + this.bodyColor);
    }
}

class Dog extends Animal{
    constructor(name, color) {
        super(name, 4, color);
    }
}

class Fish extends Animal {
    constructor(name, color) {
        super(name, 0, color);
    }

    describe() {
        console.log("I know how to swim! And my name is :" + this.name);
    }
}

const cc = new Animal("cc", 4, "black");
const dd = new Animal("dd", 2, "red");
cc.describe();
dd.describe();

const dog1 = new Dog("doggy", "yellow");
dog1.describe();

const fish1 = new Fish("LL", "white");
fish1.describe();