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

const cc = new Animal("cc", 4, "black");
const dd = new Animal("dd", 2, "red");
cc.describe();
dd.describe();
