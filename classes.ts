abstract class Vehicle {

    private type: string;

    constructor(type: string) {
        this.type = type;
    }

    print(id: number) {
        console.log(`To jest typ ${this.type} o id ${id}`);
    }
}


class Truck extends Vehicle {

    constructor(type: string) {
        super(type);
    }

    print2(capacity: number) {
        console.log(`Ladownosc ${capacity}`);
    }

}

let truck = new Truck("Chlodnia");
truck.print(3);
truck.print2(5000)

class Car extends Vehicle {

    constructor(type: string) {
        super(type);
    }

}

let car = new Car("Kombi");
car.print(7);
